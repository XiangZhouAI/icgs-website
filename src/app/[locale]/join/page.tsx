import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JoinForm } from "@/components/JoinForm";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/join">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return { title: getDictionary(localeParam).join.title };
}

export default async function JoinPage({
  params,
}: PageProps<"/[locale]/join">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <header className="page-intro">
        <h1>{dict.join.title}</h1>
        <p>{dict.join.lead}</p>
      </header>

      <div className="join-layout">
        <div>
          <h2>{dict.join.channelsTitle}</h2>
          <ul className="channel-list">
            <li>
              <strong>{dict.common.email}</strong>
              <a href={`mailto:${dict.join.emailValue}`}>{dict.join.emailValue}</a>
              <p className="muted">{dict.join.emailNote}</p>
            </li>
            <li>
              <strong>{dict.common.wechat}</strong>
              <span>{dict.join.wechatValue}</span>
              <p className="muted">{dict.join.wechatNote}</p>
            </li>
          </ul>

          <h2>{dict.join.requirementsTitle}</h2>
          <p className="muted">{dict.join.requirementsIntro}</p>
          <ol className="req-list">
            {dict.join.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <h2>{dict.join.handicapTitle}</h2>
          <p className="muted">{dict.join.handicapIntro}</p>
          <ol className="step-list">
            {dict.join.handicapSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-index">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2>{dict.join.formTitle}</h2>
          <JoinForm dict={dict} />
        </div>
      </div>
    </div>
  );
}
