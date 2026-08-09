"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Swords } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import DeveloperCard from "@/components/shared/DeveloperCard";
import {
    smoothScrollTo,
    smoothScrollToSection,
} from "@/components/utils/smoothScroll";

export default function Hero() {
    const [adventureStarted, setAdventureStarted] = useState(false);

    const { t } = useLanguage();
    const pathname = usePathname();
    const startAdventure = () => {
        setAdventureStarted(true);

        smoothScrollToSection("projects", 0, 1100);
    };

    useEffect(() => {
        if (adventureStarted) return;

        const activate = () => {
            if (window.scrollY > 50) {
                setAdventureStarted(true);
                window.removeEventListener("scroll", activate);
            }
        };

        window.addEventListener("scroll", activate, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", activate);
        };
    }, [adventureStarted]);

    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) return;

        const id = hash.replace("#", "");

        const timeout = setTimeout(() => {
            if (id) {
                smoothScrollToSection(id, 128, 1100);
            } else {
                smoothScrollTo(0, 1100);
            }

            history.replaceState(
                null,
                "",
                window.location.pathname
            );
        }, 150);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-16 pb-20">
                <div className="grid w-full -translate-y-5 items-center gap-8 lg:grid-cols-[1fr_0.9fr]">

                    {/* LEFT */}
                    {/* LEFT */}
                    <div className="flex max-w-xl flex-col items-start text-left">

                        {/* Eyebrow */}
                        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-violet-400">
                            {t.hero.eyebrow}
                        </span>

                        {/* Title */}
                        <h1 className="mt-6 text-6xl font-black leading-[0.82] tracking-tight lg:text-7xl">
                            <span className="block text-white">
                                {t.hero.titleLine1}
                            </span>

                            <span className="block text-white">
                                {t.hero.titleLine2}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-md text-xl leading-relaxed text-zinc-400">
                            {t.hero.description1}{" "}
                            <span className="font-semibold text-white">
                                {t.hero.descriptionHighlight1}
                            </span>{" "}
                            {t.hero.description2}
                            <br />
                            <span className="font-semibold text-white">
                                {t.hero.descriptionHighlight2}
                            </span>
                        </p>

                        {/* CTA */}
                        <a
                            href="https://linkedin.com/in/TWOJ-LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
            mt-12
            inline-flex
            h-13
            w-[300px]
            items-center
            justify-center
            gap-2
            whitespace-nowrap
            rounded-xl
            bg-violet-500
            px-4
            text-sm
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-violet-400
            hover:shadow-xl
            hover:shadow-violet-500/20
        "
                        >
                            <FaLinkedin className="h-4 w-4 shrink-0" />
                            <span>Contact me on LinkedIn</span>
                        </a>

                        {/* Story */}
                        <button
                            onClick={() =>
                                smoothScrollToSection("mission", 128, 1100)
                            }
                            className="
            mt-6
            text-sm
            text-zinc-500
            transition
            hover:text-zinc-300
        "
                        >
                            {t.hero.story} →
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative hidden h-[700px] lg:block">
                        {/* Tutaj w etapie 2 wrzucimy Boss of Bottles */}
                    </div>

                </div>
            </div>

            {/* Developer Card */}
            <DeveloperCard started={adventureStarted} />
        </section>
    );
}