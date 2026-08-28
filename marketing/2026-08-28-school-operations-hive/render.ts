import { resolve } from "node:path";

const usage = "usage: bun render.ts <art.html> <out.png> <width> <height>";

const [htmlPath, outPath, widthArg, heightArg] = process.argv.slice(2);
if (!htmlPath || !outPath || !widthArg || !heightArg) {
  console.error(usage);
  process.exit(1);
}

const width = Number(widthArg);
const height = Number(heightArg);
if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 16384 || height > 16384) {
  console.error(`invalid dimensions: ${widthArg} x ${heightArg}`);
  process.exit(1);
}

// Root / container environments: Chromium needs --no-sandbox and an explicit path.
const chromePath = process.env.CHROME_PATH || process.env.BUN_CHROME_PATH;
const backend = chromePath
  ? { type: "chrome", path: chromePath, argv: process.env.NO_SANDBOX !== "0" ? ["--no-sandbox"] : [] }
  : undefined;

await using view = backend
  ? new Bun.WebView({ width, height, backend })
  : new Bun.WebView({ width, height });

await view.navigate(`file://${resolve(htmlPath)}`);

// Force the exact viewport (the Chrome backend otherwise clips the window height).
try {
  await view.cdp("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false
  });
} catch {
  // WebKit backend has no CDP bridge; the constructor size already applies.
}

await Bun.write(resolve(outPath), await view.screenshot({ format: "png" }));
console.log(`wrote ${resolve(outPath)} (${width}x${height})`);
