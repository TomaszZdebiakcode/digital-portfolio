"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className="contact" id="contact">
            <p className="eyebrow">{t.contact.eyebrow}</p>

            <h2>
                {t.contact.titleLine1}
                <br />
                <em>{t.contact.titleLine2}</em>
            </h2>

            <div className="contact-actions">
                <a
                    className="button"
                    href="mailto:TomaszZdebiak@gmail.com"
                >
                    {t.contact.email}
                    <span>↗</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/zdebiaktomasz/?locale=pl"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.contact.linkedin} ↗
                </a>
            </div>
        </section>
    );
}
