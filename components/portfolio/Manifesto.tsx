"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Manifesto() {
    const { t } = useLanguage();

    return (
        <section className="manifesto" aria-label={t.manifesto.eyebrow}>
            <p>{t.manifesto.intro}</p>

            <h2>{t.manifesto.title}</h2>
        </section>
    );
}
