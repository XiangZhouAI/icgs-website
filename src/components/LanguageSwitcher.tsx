"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|zh)/, "") || "";

  return (
    <div className="lang-switch" aria-label="Language">
      <Link
        href={`/en${rest}`}
        className={locale === "en" ? "is-active" : undefined}
        hrefLang="en"
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={`/zh${rest}`}
        className={locale === "zh" ? "is-active" : undefined}
        hrefLang="zh"
      >
        中文
      </Link>
    </div>
  );
}
