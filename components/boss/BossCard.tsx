"use client";

import {
    Trophy,
    Star,
    Code2,
    Atom,
    Layers3,
    Palette,
    Globe,
    Accessibility,
    MonitorSmartphone,
    Brain,
    GitBranch,
    TestTubeDiagonal,
    BriefcaseBusiness,
    Megaphone,
    Sprout,
    Package,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebook,
    FaTiktok,
} from "react-icons/fa6";

type Skill = {
    icon: string;
    label: string;
};

type SocialLink = {
    label: string;
    href: string;
    icon: string;
};

type BossProject = {
    boss: string;
    status: string;
    name: string;
    description: string;
    difficulty: number;
    image: string;
    imagePosition?: string;

    rewardsTitle: string;
    skills: Skill[];

    battleButton: string;
    hoverButton: string;

    sourceButton?: string;

    historyButton?: string;
    historyHref?: string;

    href: string;
    github?: string;

    socialLinks?: SocialLink[];
};

type Props = {
    project: BossProject;
};

const icons = {
    react: Atom,
    next: Layers3,
    tailwind: Palette,
    responsive: MonitorSmartphone,

    wordpress: Globe,
    javascript: Code2,
    css: Palette,
    accessibility: Accessibility,

    python: Code2,
    astar: Brain,
    bfs: GitBranch,
    testing: TestTubeDiagonal,

    entrepreneurship: BriefcaseBusiness,
    advertising: Megaphone,
    gardening: Sprout,
    product: Package,
};

const socialIcons = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    tiktok: FaTiktok,
};

export default function BossCard({ project }: Props) {
    return (
        <div
            className="
                group
                w-full
                min-w-0
                max-w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/80
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-zinc-950
                hover:shadow-2xl
                hover:shadow-white/[0.03]
            "
        >
            <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2">
                {/* Image */}

                <div className="min-w-0 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.name}
                        className={`
                            aspect-video
                            h-full
                            w-full
                            max-w-full
                            object-cover
                            transition
                            duration-700
                            group-hover:scale-105
                            lg:aspect-auto
                            ${project.imagePosition ?? ""}
                        `}
                    />
                </div>

                {/* Content */}

                <div
                    className="
                        relative
                        flex
                        min-w-0
                        max-w-full
                        flex-col
                        justify-center
                        overflow-hidden
                        p-6
                        md:p-8
                        lg:p-10
                    "
                >
                    {/* Subtle white / blue atmosphere */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            bg-blue-500/[0.045]
                            blur-3xl
                            transition-all
                            duration-700
                            group-hover:bg-blue-400/[0.07]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[15%]
                            top-[18%]
                            h-32
                            w-32
                            rounded-full
                            bg-white/[0.015]
                            blur-3xl
                            transition-all
                            duration-700
                            group-hover:bg-white/[0.035]
                        "
                    />

                    {/* Header */}

                    <div
                        className="
                            relative
                            z-10
                            mb-6
                            flex
                            min-w-0
                            flex-col
                            gap-3
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <span
                            className="
                                w-fit
                                max-w-full
                                rounded-full
                                border
                                border-blue-400/15
                                bg-blue-500/[0.06]
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-blue-300
                                sm:text-sm
                            "
                        >
                            ⚔ {project.boss}
                        </span>

                        <span
                            className="
                                w-fit
                                max-w-full
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-zinc-300
                                sm:text-sm
                            "
                        >
                            ✔ {project.status}
                        </span>
                    </div>

                    {/* Title */}

                    <h3
                        className="
                            relative
                            z-10
                            min-w-0
                            max-w-full
                            break-words
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-white
                            lg:text-4xl
                        "
                    >
                        {project.name}
                    </h3>

                    {/* Description */}

                    <p
                        className="
                            relative
                            z-10
                            mt-6
                            min-w-0
                            max-w-full
                            break-words
                            text-base
                            leading-8
                            text-zinc-400
                            sm:text-lg
                        "
                    >
                        {project.description}
                    </p>

                    {/* Difficulty */}

                    <div className="relative z-10 mt-8 min-w-0">
                        <p
                            className="
                                mb-3
                                text-xs
                                uppercase
                                tracking-widest
                                text-zinc-500
                                sm:text-sm
                            "
                        >
                            Difficulty
                        </p>

                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`
                                        h-5
                                        w-5
                                        shrink-0
                                        transition-colors
                                        duration-300
                                        ${star <= project.difficulty
                                            ? "fill-white text-white"
                                            : "text-zinc-700"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Rewards */}

                    <div className="relative z-10 mt-10 min-w-0 max-w-full">
                        <div className="mb-4 flex min-w-0 items-center gap-2">
                            <Trophy className="h-5 w-5 shrink-0 text-white/70" />

                            <h4
                                className="
                                    min-w-0
                                    max-w-full
                                    break-words
                                    font-semibold
                                    text-white
                                "
                            >
                                {project.rewardsTitle}
                            </h4>
                        </div>

                        <div className="flex min-w-0 max-w-full flex-wrap gap-3">
                            {project.skills.map((skill) => {
                                const Icon =
                                    icons[
                                    skill.icon as keyof typeof icons
                                    ];

                                return (
                                    <span
                                        key={skill.label}
                                        className="
                                            flex
                                            min-w-0
                                            max-w-full
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/[0.025]
                                            px-4
                                            py-2
                                            text-xs
                                            text-zinc-300
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:border-white/20
                                            hover:bg-white/[0.05]
                                            hover:text-white
                                            sm:text-sm
                                        "
                                    >
                                        {Icon && (
                                            <Icon
                                                className="
                                                    h-4
                                                    w-4
                                                    shrink-0
                                                    text-blue-300
                                                "
                                            />
                                        )}

                                        <span className="min-w-0 break-words">
                                            {skill.label}
                                        </span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* Buttons */}

                    <div
                        className="
                            relative
                            z-10
                            mt-10
                            flex
                            min-w-0
                            max-w-full
                            flex-wrap
                            gap-3
                            xl:flex-nowrap
                        "
                    >
                        {/* Main Website / Battle Button */}

                        <a
                            href={project.href}
                            target={
                                project.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                project.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="
                                group/button
                                relative
                                flex
                                h-14
                                w-full
                                min-w-0
                                max-w-full
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-xl
                                bg-blue-600
                                px-4
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-blue-500
                                hover:shadow-xl
                                hover:shadow-blue-500/10
                                xl:w-64
                                xl:shrink-0
                            "
                        >
                            <span
                                className="
                                    absolute
                                    flex
                                    max-w-full
                                    items-center
                                    gap-2
                                    px-4
                                    text-center
                                    transition-all
                                    duration-300
                                    group-hover/button:translate-y-6
                                    group-hover/button:opacity-0
                                "
                            >
                                ⚔ {project.battleButton}
                            </span>

                            <span
                                className="
                                    absolute
                                    flex
                                    max-w-full
                                    translate-y-6
                                    items-center
                                    gap-2
                                    px-4
                                    text-center
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover/button:translate-y-0
                                    group-hover/button:opacity-100
                                "
                            >
                                ▶ {project.hoverButton}
                            </span>
                        </a>

                        {/* Social Media */}

                        {project.socialLinks &&
                            project.socialLinks.length > 0 && (
                                <div
                                    className="
                                        flex
                                        w-full
                                        shrink-0
                                        gap-3
                                        xl:w-auto
                                    "
                                >
                                    {project.socialLinks.map((social) => {
                                        const SocialIcon =
                                            socialIcons[
                                            social.icon as keyof typeof socialIcons
                                            ];

                                        if (!SocialIcon) return null;

                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                title={social.label}
                                                className="
                                                    flex
                                                    h-12
                                                    w-12
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-white/[0.015]
                                                    text-zinc-400
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-1
                                                    hover:border-blue-400/30
                                                    hover:bg-white/[0.04]
                                                    hover:text-white
                                                    xl:h-14
                                                    xl:w-14
                                                "
                                            >
                                                <SocialIcon className="h-5 w-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            )}

                        {/* History */}

                        {!project.socialLinks?.length &&
                            project.historyButton &&
                            project.historyHref && (
                                <a
                                    href={project.historyHref}
                                    className="
                                        flex
                                        h-14
                                        w-full
                                        min-w-0
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.015]
                                        px-6
                                        text-center
                                        text-zinc-300
                                        transition-all
                                        hover:-translate-y-1
                                        hover:border-white/20
                                        hover:bg-white/[0.04]
                                        hover:text-white
                                    "
                                >
                                    📖 {project.historyButton}
                                </a>
                            )}

                        {/* Source Code */}

                        {!project.socialLinks?.length &&
                            !project.historyButton &&
                            project.github &&
                            project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        h-14
                                        w-full
                                        min-w-0
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.015]
                                        px-6
                                        text-center
                                        text-zinc-300
                                        transition-all
                                        hover:-translate-y-1
                                        hover:border-white/20
                                        hover:bg-white/[0.04]
                                        hover:text-white
                                    "
                                >
                                    <Code2 className="h-5 w-5 shrink-0" />

                                    <span className="min-w-0 break-words">
                                        {project.sourceButton}
                                    </span>
                                </a>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}