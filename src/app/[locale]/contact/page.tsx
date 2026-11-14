import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return { title: getDictionary(localeParam).contact.title };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.contact.title}</h1>
        <p>{dict.contact.lead}</p>
      </header>

      <div className="contact-block">
        <strong>{dict.contact.emailLabel}</strong>
        <a href={`mailto:${dict.contact.emailValue}`}>{dict.contact.emailValue}</a>
        <p className="muted">{dict.contact.emailNote}</p>
      </div>
      <div className="contact-block">
        <strong>{dict.contact.wechatLabel}</strong>
        <span>{dict.contact.wechatValue}</span>
        <p className="muted">{dict.contact.wechatNote}</p>
      </div>
      <div className="contact-block">
        <strong>{dict.contact.locationLabel}</strong>
        <span>{dict.contact.locationValue}</span>
        <p className="muted">{dict.contact.locationNote}</p>
      </div>

      <p className="lead" style={{ marginTop: "2rem" }}>
        {dict.contact.formHint}
      </p>
      <div className="split-cta">
        <Link className="btn btn-navy" href={`/${locale}/join`}>
          {dict.common.applyNow}
        </Link>
      </div>
    </div>
  );
}
