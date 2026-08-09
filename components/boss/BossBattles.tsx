"use client";

import { useLanguage } from "@/context/LanguageContext";
import BossCard from "./BossCard";

export default function BossBattles() {
    const { t } = useLanguage();

    return (
        <section
            id="projects"
            className="
                mx-auto
                w-full
                min-w-0
                max-w-7xl
                overflow-x-clip
                px-6
                py-24
                sm:py-28
                lg:py-32
            "
        >
            {/* Section Header */}

            <div className="mb-16 min-w-0 sm:mb-20">
                <p
                    className="
                        mb-3
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-violet-400
                    "
                >
                    {t.bossBattles.section}
                </p>

                <h2
                    className="
                        max-w-full
                        break-words
                        text-4xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-5xl
                        lg:text-6xl
                    "
                >
                    {t.bossBattles.title}
                </h2>

                <p
                    className="
                        mt-6
                        max-w-2xl
                        break-words
                        text-base
                        leading-8
                        text-zinc-400
                        sm:text-lg
                    "
                >
                    {t.bossBattles.description}
                </p>
            </div>

            {/* Projects */}

            <div className="min-w-0 max-w-full space-y-12">
                {t.bossBattles.projects.map((project) => (
                    <BossCard
                        key={project.name}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}