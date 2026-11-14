"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  "about",
  "history",
  "gallery",
  "sponsors",
  "join",
  "contact",
] as const;

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={base} className="brand-mark" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/icgs-logo.jpg" alt="" width={44} height={44} />
          <span>
            <strong>{dict.meta.siteNameShort}</strong>
            <small>{dict.footer.tagline}</small>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span />
          <span />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <Link href={base} onClick={() => setOpen(false)}>
            {dict.nav.home}
          </Link>
          {links.map((key) => (
            <Link
              key={key}
              href={`${base}/${key}`}
              onClick={() => setOpen(false)}
            >
              {dict.nav[key]}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
