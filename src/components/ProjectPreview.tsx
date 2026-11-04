import Image from "next/image";

export function ProjectPreview({
  field,
  name,
  label,
  note,
  image,
}: {
  field: string;
  name: string;
  label: string;
  note: string;
  image?: { src: string; alt: string };
}) {
  return (
    <div className={`project-preview preview-${field}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 720px) 100vw, 65vw"
        />
      ) : (
        <>
          <span className="preview-note">{label}</span>
          <span className="preview-name">
            {name}
          </span>
          <span className="preview-caption">{note}</span>
        </>
      )}
    </div>
  );
}
