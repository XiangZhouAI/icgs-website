import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = getDictionary(localeParam);
  return { title: dict.about.title };
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.about.title}</h1>
        <p>{dict.about.lead}</p>
      </header>
      <div className="prose">
        {dict.about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="section" style={{ paddingInline: 0 }}>
        <h2>{dict.about.valuesTitle}</h2>
        <ul className="value-grid">
          {dict.about.values.map((value) => (
            <li key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
