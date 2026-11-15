import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <section className="hero" aria-label={dict.meta.siteName}>
        <div className="hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/fairway-1.jpg"
            alt=""
            width={1600}
            height={1067}
          />
        </div>
        <div className="hero__shade" />
        <div className="hero__content">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero__logo"
            src="/brand/icgs-logo.jpg"
            alt={dict.meta.siteName}
            width={128}
            height={128}
          />
          <h1 className="hero__brand">{dict.home.brand}</h1>
          <p className="hero__hint">{dict.home.brandZhHint}</p>
          <p className="hero__support">{dict.home.support}</p>
          <div className="hero__actions">
            <Link className="btn btn-primary" href={`${base}/join`}>
              {dict.home.ctaJoin}
            </Link>
            <Link className="btn btn-ghost" href={`${base}/about`}>
              {dict.home.ctaAbout}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <h2>{dict.home.sectionTitle}</h2>
          <p>{dict.home.sectionSupport}</p>
          <ul className="pillar-list">
            {dict.home.pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
