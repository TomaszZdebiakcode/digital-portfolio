"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero" id="top">
            <div className="rail" aria-hidden="true">
                PRODUCT
                <br />
                ENGINEER
            </div>

            <div className="hero-copy">
                <p className="eyebrow">{t.hero.eyebrow}</p>

                <h1>
                    {t.hero.titleLine1}
                    <br />
                    {t.hero.titleLine2}
                    <br />
                    <em>{t.hero.titleLine3}</em>
                </h1>

                <div className="hero-bottom">
                    <p>{t.hero.description}</p>

                    <a
                        className="circle-link"
                        href="#work"
                        aria-label="See selected work"
                    >
                        ↓
                    </a>
                </div>
            </div>

            <figure className="portrait">
                <img
                    src="/images/tomasz-zdebiak.webp"
                    alt="Tomasz Zdebiak"
                    width={800}
                    height={1000}
                />

                <figcaption>
                    <span>{t.hero.currently}</span>
                    {t.hero.currentlyText}
                </figcaption>
            </figure>
        </section>
    );
}
