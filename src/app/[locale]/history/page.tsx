import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/history">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return { title: getDictionary(localeParam).history.title };
}

export default async function HistoryPage({
  params,
}: PageProps<"/[locale]/history">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.history.title}</h1>
        <p>{dict.history.lead}</p>
      </header>
      <ol className="timeline">
        {dict.history.timeline.map((item) => (
          <li key={item.title}>
            <span className="year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
