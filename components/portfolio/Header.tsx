"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((open) => !open);
    };

    return (
        <>
            <header className="site-header">
                <div className="header-left">
                    <a
                        className="wordmark"
                        href="#top"
                        aria-label="Tomasz Zdebiak, home"
                        onClick={closeMenu}
                    >
                        TZ<span>®</span>
                    </a>

                    <button
                        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <span />
                        <span />
                    </button>
                </div>

                <nav
                    className="desktop-nav"
                    aria-label="Main navigation"
                >
                    <a href="#work">{t.nav.work}</a>
                    <a href="#about">{t.nav.about}</a>
                    <a href="#contact">{t.nav.contact}</a>
                </nav>

                <div className="header-right">
                    <div
                        className="language-switcher"
                        aria-label="Language"
                    >
                        {(["pl", "en", "de"] as const).map((lang) => (
                            <button
                                key={lang}
                                type="button"
                                className={
                                    language === lang ? "active" : ""
                                }
                                onClick={() => setLanguage(lang)}
                                aria-pressed={language === lang}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <a
                        className="status"
                        href="#contact"
                        onClick={closeMenu}
                    >
                        <i />
                        {t.header.availability}
                    </a>
                </div>
            </header>

            <div
                className={`mobile-menu${menuOpen ? " is-open" : ""}`}
                aria-hidden={!menuOpen}
            >
                <nav aria-label="Mobile navigation">
                    <a href="#work" onClick={closeMenu}>
                        <span>{t.nav.work}</span>
                        <small>01</small>
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        <span>{t.nav.about}</span>
                        <small>02</small>
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        <span>{t.nav.contact}</span>
                        <small>03</small>
                    </a>
                </nav>
            </div>
        </>
    );
}