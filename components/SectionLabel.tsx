type SectionLabelProps = {
  index: string;
  title: string;
  light?: boolean;
};

export function SectionLabel({ index, title, light }: SectionLabelProps) {
  return (
    <p
      className={`label-mono flex items-center gap-2.5 uppercase ${
        light ? "text-muted-3" : "text-primary"
      }`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {index} / {title}
    </p>
  );
}
