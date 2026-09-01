"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburger, GiFrenchFries } from "react-icons/gi";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import {
    smoothScrollTo,
    smoothScrollToSection,
} from "@/components/utils/smoothScroll";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const { t } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();

    const links = [
        {
            key: "about",
            href: "#about",
            label: t.navbar.about,
        },
        {
            key: "projects",
            href: "#projects",
            label: t.navbar.projects,
        },
        {
            key: "inventory",
            href: "#inventory",
            label: t.navbar.inventory,
        },
    ];

    // Close mobile menu when clicking outside navbar
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [isOpen]);

    const handleLogoClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();

        setIsOpen(false);

        if (pathname === "/") {
            smoothScrollTo(0, 1100);
        } else {
            router.push("/");
        }
    };

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        section: string
    ) => {
        e.preventDefault();

        setIsOpen(false);

        if (pathname === "/") {
            smoothScrollToSection(section, 128, 1100);
        } else {
            router.push(`/#${section}`);
        }
    };

    return (
        <header
            ref={navRef}
            className="fixed left-0 top-0 z-50 w-full"
        >
            <div className="mx-auto max-w-7xl px-4">
                <nav
                    className="
                        mt-4
                        flex items-center justify-between

                        xl:grid
                        xl:grid-cols-[320px_1fr_320px]
                        xl:items-center

                        rounded-2xl
                        border border-white/10
                        bg-black/40
                        px-6
                        py-4
                        backdrop-blur-xl
                    "
                >
                    {/* Logo */}

                    <div className="justify-self-start">
                        <Link
                            href="/"
                            onClick={handleLogoClick}
                            className="
                                text-xl
                                font-bold
                                tracking-wide
                                text-white
                                transition
                                hover:text-blue-400
                            "
                        >
                            Tomasz Zdebiak
                            <span className="text-blue-400">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}

                    <div className="hidden justify-self-center xl:flex xl:items-center xl:gap-8">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(
                                        e,
                                        link.href.replace("#", "")
                                    )
                                }
                                className="
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                    transition
                                    hover:text-blue-400
                                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}

                    <div className="flex items-center justify-self-end gap-4">
                        {/* Language */}

                        <div className="hidden xl:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Contact */}

                        <a
                            href="#contact"
                            onClick={(e) =>
                                handleNavClick(e, "contact")
                            }
                            className="
                                hidden
                                rounded-xl
                                bg-[#2563eb]
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#3b82f6]
                                hover:shadow-lg
                                hover:shadow-blue-500/10
                                xl:block
                            "
                        >
                            {t.navbar.contact}
                        </a>

                        {/* Mobile / Tablet Burger */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                                text-3xl
                                text-white
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:text-blue-400
                                xl:hidden
                            "
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <GiFrenchFries />
                            ) : (
                                <GiHamburger />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile / Tablet Menu */}

                {isOpen && (
                    <div
                        className="
                            mt-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/90
                            backdrop-blur-xl
                            xl:hidden
                        "
                    >
                        <div className="flex flex-col gap-6 p-6">
                            {links.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(
                                            e,
                                            link.href.replace("#", "")
                                        )
                                    }
                                    className="
                                        text-zinc-300
                                        transition
                                        hover:text-blue-400
                                    "
                                >
                                    {link.label}
                                </a>
                            ))}

                            <LanguageSwitcher />

                            {/* Mobile Contact */}

                            <a
                                href="#contact"
                                onClick={(e) =>
                                    handleNavClick(e, "contact")
                                }
                                className="
                                    rounded-xl
                                    bg-[#2563eb]
                                    px-4
                                    py-3
                                    text-center
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-[#3b82f6]
                                    hover:shadow-lg
                                    hover:shadow-blue-500/10
                                "
                            >
                                {t.navbar.contact}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}