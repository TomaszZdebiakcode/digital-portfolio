"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

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

export default function SlimterStoryPage() {
    const { t, language } = useLanguage();
    const baseStory = t.slimterStory;

    const story = baseStory;

    return (
        <main className="slimter-story">
            <header className="slimter-hero">
                <div className="slimter-shell">
                    <Link className="slimter-back" href="/#work">
                        <ArrowLeft aria-hidden="true" />
                        {story.back}
                    </Link>

                    <div className="slimter-hero-grid">
                        <div className="slimter-hero-copy">
                            <div className="slimter-kicker">
                                <span>{story.eyebrow}</span>
                                <span className="slimter-status">
                                    <i />
                                    {story.status}
                                </span>
                            </div>

                            <h1 className="slimter-hero-title">
                                {story.title}
                            </h1>
                            <p className="slimter-intro">
                                {story.intro}
                            </p>

                            <div className="slimter-skills">
                                {story.skills.map((skill) => (
                                    <span key={skill.label}>
                                        {skill.label}
                                    </span>
                                ))}
                            </div>

                            <a
                                className="slimter-button"
                                href="https://slimter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {story.visitWebsite}
                                <ArrowUpRight aria-hidden="true" />
                            </a>
                        </div>

                        <div className="slimter-hero-image">
                            <Image
                                src="/images/slimter-home.webp"
                                alt={story.title}
                                width={1600}
                                height={900}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="slimter-section slimter-challenge">
                <div className="slimter-shell slimter-section-grid">
                    <div className="slimter-label">
                        <p className="eyebrow">
                            {story.challenge.eyebrow}
                        </p>
                    </div>

                    <div className="slimter-section-content">
                        <h2>{story.challenge.title}</h2>

                        <p className="slimter-copy">
                            {story.challenge.description}
                        </p>

                        <div className="slimter-point-grid">
                            {story.challenge.points.map((point, index) => (
                                <div
                                    className="slimter-point"
                                    key={point}
                                >
                                    <span>0{index + 1}</span>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="slimter-section slimter-gallery">
                <div className="slimter-shell">
                    <div className="slimter-gallery-intro">
                        <p className="eyebrow">
                            {story.gallery.eyebrow}
                        </p>

                        <h2>{story.gallery.title}</h2>

                        <p className="slimter-copy">
                            {story.gallery.description}
                        </p>
                    </div>

                    <div className="slimter-screens">
                        {screenshots.map((item, index) => {
                            const content = story.gallery.items[index];

                            return (
                                <article
                                    className="slimter-screen"
                                    key={item.key}
                                >
                                    <div className="slimter-screen-head">
                                        <span>0{index + 1}</span>

                                        <div>
                                            <h3>{content.title}</h3>
                                            <p>{content.description}</p>
                                        </div>
                                    </div>

                                    <div className="slimter-screen-image">
                                        <Image
                                            src={item.image}
                                            alt={content.title}
                                            width={1600}
                                            height={900}
                                            className="slimter-image"
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="slimter-section slimter-work">
                <div className="slimter-shell slimter-section-grid">
                    <div className="slimter-label">
                        <p className="eyebrow">{story.work.eyebrow}</p>
                    </div>

                    <div className="slimter-section-content">
                        <h2>{story.work.title}</h2>

                        <p className="slimter-copy">
                            {story.work.description}
                        </p>

                        <div className="slimter-contribution">
                            {story.work.items.map((item, index) => (
                                <div key={item}>
                                    <span>0{index + 1}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="slimter-next">
                <div className="slimter-shell">
                    <p className="eyebrow">{story.next.eyebrow}</p>

                    <h2>{story.next.title}</h2>

                    <p>{story.next.description}</p>

                    <div className="slimter-next-actions">
                        <a
                            className="slimter-button slimter-button-light"
                            href="https://slimter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {story.visitWebsite}
                            <ArrowUpRight aria-hidden="true" />
                        </a>

                        <Link href="/#work">
                            {story.back}
                            <span>↑</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
