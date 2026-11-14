import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">{dict.meta.siteName}</p>
          <p className="muted">{dict.footer.tagline}</p>
          <p className="muted">{dict.footer.bilingual}</p>
        </div>
        <div className="site-footer__links">
          <Link href={`${base}/join`}>{dict.nav.join}</Link>
          <Link href={`${base}/contact`}>{dict.nav.contact}</Link>
          <Link href={`${base}/sponsors`}>{dict.nav.sponsors}</Link>
          <span className="stub">{dict.footer.outingsStub}</span>
          <span className="stub">{dict.footer.competitionsStub}</span>
        </div>
      </div>
      <p className="site-footer__copy">
        © 2026 {dict.footer.rights}
      </p>
    </footer>
  );
}
