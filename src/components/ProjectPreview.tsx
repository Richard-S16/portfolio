import Image from "next/image";

export function ProjectPreview({
  field,
  image,
  sizes = "(max-width: 720px) calc(100vw - 40px), (max-width: 1352px) 58vw, 710px",
}: {
  field: string;
  image: { src: string; alt: string; width: number; height: number };
  sizes?: string;
}) {
  return (
    <div className={`project-preview project-image preview-${field}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
      />
    </div>
  );
}
