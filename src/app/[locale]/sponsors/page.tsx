import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { sponsors } from "@/lib/sponsors";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sponsors">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return { title: getDictionary(localeParam).sponsors.title };
}

export default async function SponsorsPage({
  params,
}: PageProps<"/[locale]/sponsors">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.sponsors.title}</h1>
        <p>{dict.sponsors.lead}</p>
      </header>
      <p className="muted">{dict.sponsors.note}</p>
      <ul className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <li key={sponsor.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sponsor.logo} alt={sponsor.name} />
          </li>
        ))}
      </ul>
      <section>
        <h2>{dict.sponsors.becomeTitle}</h2>
        <p className="lead">{dict.sponsors.becomeBody}</p>
        <div className="split-cta">
          <Link className="btn btn-navy" href={`/${locale}/contact`}>
            {dict.common.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
