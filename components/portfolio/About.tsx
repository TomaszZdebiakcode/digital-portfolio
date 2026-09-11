"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const principles = [
        t.about.principles.problem,
        t.about.principles.systems,
        t.about.principles.ship,
    ];

    return (
        <section className="about" id="about">
            <div className="about-title">
                <p className="eyebrow">{t.about.eyebrow}</p>

                <h2>
                    {t.about.titleLine1}
                    <br />
                    {t.about.titleLine2}
                </h2>
            </div>

            <div className="principles">
                {principles.map((principle, index) => (
                    <article key={index}>
                        <span>{String(index + 1).padStart(2, "0")}</span>

                        <h3>{principle.title}</h3>

                        <p>{principle.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
