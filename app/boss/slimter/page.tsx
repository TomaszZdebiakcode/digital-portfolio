"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Globe2,
    Layers3,
    MonitorSmartphone,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const screenshots = [
    {
        key: "homepage",
        image: "/images/slimter-home.webp",
    },
    {
        key: "comparison",
        image: "/images/slimter-comparison.webp",
    },
    {
        key: "calculator",
        image: "/images/slimter-calculator.webp",
    },
    {
        key: "health",
        image: "/images/slimter-health.webp",
    },
] as const;

const skillIcons = {
    wordpress: Globe2,
    javascript: Code2,
    css: Layers3,
    accessibility: ShieldCheck,
};

export default function SlimterStoryPage() {
    const { t } = useLanguage();
    const story = t.slimterStory;

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
            {/* Back navigation */}
            <div className="mx-auto w-full max-w-6xl px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
                <Link
                    href="/#projects"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-900/60
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-zinc-300
                        transition
                        hover:border-violet-500/50
                        hover:bg-zinc-900
                        hover:text-white
                    "
                >
                    <ArrowLeft className="h-4 w-4" />
                    {story.back}
                </Link>
            </div>

            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28">
                <div className="max-w-4xl">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
                            {story.eyebrow}
                        </span>

                        <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {story.status}
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                        {story.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                        {story.intro}
                    </p>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {story.skills.map((skill) => {
                            const Icon =
                                skillIcons[
                                skill.icon as keyof typeof skillIcons
                                ];

                            return (
                                <span
                                    key={skill.label}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-zinc-800
                                        bg-zinc-900
                                        px-3.5
                                        py-2
                                        text-xs
                                        font-medium
                                        text-zinc-300
                                        sm:text-sm
                                    "
                                >
                                    <Icon className="h-4 w-4 text-violet-400" />
                                    {skill.label}
                                </span>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-9">
                        <a
                            href="https://slimter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                min-h-12
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-violet-500
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:-translate-y-0.5
                                hover:bg-violet-400
                                hover:shadow-xl
                                hover:shadow-violet-500/20
                                sm:w-auto
                            "
                        >
                            {story.visitWebsite}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Project overview */}
            <section className="border-y border-zinc-900 bg-zinc-950/60">
                <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:px-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                            {story.challenge.eyebrow}
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            {story.challenge.title}
                        </h2>
                    </div>

                    <div>
                        <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                            {story.challenge.description}
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {story.challenge.points.map((point) => (
                                <div
                                    key={point}
                                    className="
                                        rounded-2xl
                                        border
                                        border-zinc-800
                                        bg-zinc-900/60
                                        p-5
                                    "
                                >
                                    <CheckCircle2 className="h-5 w-5 text-violet-400" />

                                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                <div className="mb-12 max-w-2xl sm:mb-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                        {story.gallery.eyebrow}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {story.gallery.title}
                    </h2>

                    <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
                        {story.gallery.description}
                    </p>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-28">
                    {screenshots.map((item, index) => {
                        const content = story.gallery.items[index];

                        return (
                            <article
                                key={item.key}
                                className="group"
                            >
                                <div className="mb-6 flex items-start gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-sm font-bold text-violet-400">
                                        0{index + 1}
                                    </span>

                                    <div>
                                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                                            {content.title}
                                        </h3>

                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                                            {content.description}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-zinc-800
                                        bg-zinc-900
                                        shadow-2xl
                                        shadow-black/20
                                        transition
                                        duration-500
                                        group-hover:border-violet-500/30
                                    "
                                >
                                    <Image
                                        src={item.image}
                                        alt={content.title}
                                        width={1600}
                                        height={900}
                                        priority={index === 0}
                                        className="
                                            h-auto
                                            w-full
                                            object-cover
                                            transition
                                            duration-700
                                            group-hover:scale-[1.01]
                                        "
                                    />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* What I worked on */}
            <section className="border-y border-zinc-900 bg-zinc-950/60">
                <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                                {story.work.eyebrow}
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                {story.work.title}
                            </h2>

                            <p className="mt-5 text-base leading-7 text-zinc-400">
                                {story.work.description}
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {story.work.items.map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-zinc-800
                                        bg-zinc-900/60
                                        p-5
                                    "
                                >
                                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />

                                    <span className="text-sm leading-6 text-zinc-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                <div
                    className="
                        rounded-3xl
                        border
                        border-violet-500/20
                        bg-violet-500/[0.04]
                        p-8
                        text-center
                        sm:p-12
                        lg:p-16
                    "
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                        {story.next.eyebrow}
                    </p>

                    <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                        {story.next.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400">
                        {story.next.description}
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href="https://slimter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                min-h-12
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-violet-500
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-violet-400
                            "
                        >
                            <Globe2 className="h-4 w-4" />
                            {story.visitWebsite}
                        </a>

                        <Link
                            href="/#projects"
                            className="
                                inline-flex
                                min-h-12
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-zinc-700
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-zinc-200
                                transition
                                hover:border-violet-400
                                hover:bg-zinc-900
                            "
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {story.back}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}