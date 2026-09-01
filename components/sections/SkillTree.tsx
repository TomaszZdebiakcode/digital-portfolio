"use client";

import { Layers, Cpu, Brain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Layers, Cpu, Brain];

export default function SkillTree() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mb-16">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                    {t.skillTree.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {t.skillTree.title}
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                {t.skillTree.cards.map((card, index) => {
                    const Icon = icons[index];

                    return (
                        <div
                            key={card.title}
                            className="
                                group
                                relative
                                h-full
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-zinc-950/80
                                p-6
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-white/20
                                hover:bg-zinc-900/80
                                hover:shadow-xl
                                hover:shadow-white/[0.03]
                                md:p-8
                            "
                        >
                            {/* Subtle white glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-16
                                    -top-16
                                    h-40
                                    w-40
                                    rounded-full
                                    bg-white/[0.025]
                                    blur-3xl
                                    transition-all
                                    duration-500
                                    group-hover:bg-white/[0.05]
                                "
                            />

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    mb-6
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    transition-all
                                    duration-500
                                    group-hover:border-white/20
                                    group-hover:bg-white/[0.06]
                                    group-hover:shadow-lg
                                    group-hover:shadow-white/[0.04]
                                "
                            >
                                <Icon className="h-6 w-6 text-blue-400 transition-colors duration-300 group-hover:text-blue-300 sm:h-7 sm:w-7" />
                            </div>

                            <h3 className="relative mb-4 break-words text-2xl font-bold leading-tight text-white">
                                {card.title}
                            </h3>

                            <p className="relative break-words text-base leading-8 text-zinc-400 sm:text-lg">
                                {card.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}