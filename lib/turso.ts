import { createClient } from "@libsql/client";
import type { Client } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

export const turso: Client | null = url ? createClient({ url, authToken }) : null;

export const TURSO_ENABLED = turso !== null;

export type ApplicationRecord = {
  name: string;
  email: string;
  company: string;
  role: string;
  region: string;
  partnerType: string;
  qualification: string;
  message: string;
};

let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  if (!turso) return Promise.resolve();
  if (!schemaReady) {
    schemaReady = turso
      .execute(
        `CREATE TABLE IF NOT EXISTS bee_bud_applications (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          role TEXT,
          region TEXT NOT NULL,
          partner_type TEXT NOT NULL,
          qualification TEXT NOT NULL,
          message TEXT,
          created_at TEXT NOT NULL DEFAULT (datetime('now'))
        )`
      )
      .then(() => undefined)
      .catch((error) => {
        schemaReady = null;
        throw error;
      });
  }
  return schemaReady;
}

export async function insertApplication(record: ApplicationRecord): Promise<void> {
  if (!turso) return;
  await ensureSchema();
  await turso.execute({
    sql: `INSERT INTO bee_bud_applications
          (name, email, company, role, region, partner_type, qualification, message)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      record.name,
      record.email,
      record.company,
      record.role,
      record.region,
      record.partnerType,
      record.qualification,
      record.message
    ]
  });
}
