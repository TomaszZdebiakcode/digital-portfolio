"use client";

import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-zinc-900 p-6 md:p-8 lg:p-12">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.contact.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {t.contact.titleStart}{" "}
                    <span className="sm:hidden">
                        <br />
                    </span>
                    {t.contact.titleMiddle}{" "}
                    <span className="sm:hidden">
                        <br />
                    </span>
                    {t.contact.titleEnd}
                </h2>

                <p className="mt-8 max-w-3xl break-words text-base leading-8 text-zinc-400 sm:text-lg">
                    {t.contact.description}
                </p>

                <div className="mt-10 sm:mt-12">
                    {/* Primary CTA */}
                    <a
                        href="https://www.linkedin.com/in/zdebiaktomasz/?locale=pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-2xl
                            bg-violet-500
                            px-6
                            py-4
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-violet-400
                            hover:shadow-xl
                            hover:shadow-violet-500/20
                            sm:w-auto
                            sm:px-8
                        "
                    >
                        <FaLinkedin className="h-5 w-5 shrink-0" />
                        Contact me on LinkedIn
                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </a>

                    {/* Secondary contact */}
                    <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                        <span>Prefer email?</span>

                        <a
                            href="mailto:TomaszZdebiak@gmail.com"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-zinc-300
                                transition-colors
                                hover:text-violet-400
                            "
                        >
                            <Mail className="h-4 w-4" />
                            TomaszZdebiak@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}