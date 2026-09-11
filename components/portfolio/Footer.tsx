"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer>
            <span>{t.footer.copyright}</span>
            <span>{t.footer.tagline}</span>
            <a href="#top">{t.footer.backToTop} ↑</a>
        </footer>
    );
}