"use client";

import {
    BrainCircuit,
    Workflow,
    Code2,
    Gauge,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const arsenalItems = [
    {
        number: "01",
        icon: BrainCircuit,
        key: "ai",
    },
    {
        number: "02",
        icon: Workflow,
        key: "automation",
    },
    {
        number: "03",
        icon: Code2,
        key: "implementation",
    },
    {
        number: "04",
        icon: Gauge,
        key: "optimization",
    },
] as const;

export default function Inventory() {
    const { t } = useLanguage();

    return (
        <section
            id="inventory"
            className="mx-auto max-w-7xl px-6 py-24 lg:py-32"
        >
            {/* HEADER */}
            <div className="mb-14 lg:mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                    {t.inventory.section}
                </p>

                <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {t.inventory.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                    {t.inventory.description}
                </p>
            </div>

            {/* ARSENAL */}
            <div className="grid gap-5 md:grid-cols-2">
                {arsenalItems.map((item) => {
                    const Icon = item.icon;
                    const content = t.inventory[item.key];

                    return (
                        <article
                            key={item.key}
                            className="
                                group
                                relative
                                min-h-[300px]
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-zinc-950/80
                                p-7
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-white/20
                                hover:bg-zinc-900/80
                                hover:shadow-xl
                                hover:shadow-white/[0.03]
                                sm:p-9
                            "
                        >
                            {/* Subtle white glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-56
                                    w-56
                                    rounded-full
                                    bg-white/[0.025]
                                    blur-3xl
                                    transition-all
                                    duration-500
                                    group-hover:bg-white/[0.05]
                                "
                            />

                            {/* Number */}
                            <span
                                className="
                                    absolute
                                    right-7
                                    top-6
                                    text-5xl
                                    font-light
                                    tracking-tight
                                    text-white/[0.08]
                                    transition-colors
                                    duration-500
                                    group-hover:text-white/[0.16]
                                    sm:right-9
                                    sm:top-8
                                "
                            >
                                {item.number}
                            </span>

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    mb-12
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    text-blue-400
                                    transition-all
                                    duration-500
                                    group-hover:border-white/20
                                    group-hover:bg-white/[0.06]
                                    group-hover:text-blue-300
                                    group-hover:shadow-lg
                                    group-hover:shadow-white/[0.04]
                                "
                            >
                                <Icon className="h-6 w-6" />
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    {content.title}
                                </h3>

                                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                                    {content.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {content.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/[0.03]
                                                px-3
                                                py-1.5
                                                text-xs
                                                font-medium
                                                text-zinc-400
                                                transition-all
                                                duration-300
                                                group-hover:border-white/15
                                                group-hover:bg-white/[0.05]
                                                group-hover:text-zinc-300
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}