import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

const photos = [
  "/gallery/outing-1.jpg",
  "/gallery/outing-2.jpg",
  "/gallery/outing-3.jpg",
  "/gallery/outing-4.jpg",
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/gallery">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return { title: getDictionary(localeParam).gallery.title };
}

export default async function GalleryPage({
  params,
}: PageProps<"/[locale]/gallery">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.gallery.title}</h1>
        <p>{dict.gallery.lead}</p>
      </header>

      <h2>{dict.gallery.photosTitle}</h2>
      <div className="gallery-grid">
        {photos.map((src, index) => (
          <figure key={src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${dict.gallery.photoCaption} ${index + 1}`}
              width={800}
              height={600}
            />
            <figcaption>
              {dict.gallery.photoCaption} {index + 1}
            </figcaption>
          </figure>
        ))}
      </div>

      <h2>{dict.gallery.videosTitle}</h2>
      <p className="muted">{dict.gallery.moreSoon}</p>
      <div className="video-placeholders">
        <div className="video-slot">{dict.gallery.videoPlaceholder}</div>
        <div className="video-slot">{dict.gallery.videoPlaceholder}</div>
      </div>
    </div>
  );
}
