"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const screenshots = [
    { key: "hero", image: "/images/portfolio-home.webp" },
    { key: "about", image: "/images/portfolio-about.webp" },
    { key: "projects", image: "/images/portfolio-projects.webp" },
    { key: "arsenal", image: "/images/portfolio-arsenal.webp" },
    { key: "contact", image: "/images/portfolio-contact.webp" },
] as const;

export default function EngineerPortfolioPage() {
    const { t } = useLanguage();
    const story = t.engineerPortfolioStory;

    return (
        <main className="engineer-story">
            <header className="engineer-hero">
                <div className="engineer-shell">
                    <Link className="engineer-back" href="/#work">
                        <ArrowLeft aria-hidden="true" />
                        {story.back}
                    </Link>

                    <div className="engineer-hero-grid">
                        <div className="engineer-hero-copy">
                            <div className="engineer-kicker">
                                <span>{story.eyebrow}</span>
                                <span>{story.status}</span>
                            </div>

                            <h1>{story.title}</h1>

                            <p className="engineer-intro">
                                {story.intro}
                            </p>

                            <div className="engineer-skills">
                                {story.skills.map((skill) => (
                                    <span key={skill.label}>
                                        {skill.label}
                                    </span>
                                ))}
                            </div>

                            <Link
                                className="engineer-button"
                                href="/"
                            >
                                {story.visitPortfolio}
                                <ArrowUpRight aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="engineer-hero-image">
                            <Image
                                src="/images/portfolio-home.webp"
                                alt={story.title}
                                width={1600}
                                height={900}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="engineer-section engineer-about">
                <div className="engineer-shell engineer-section-grid">
                    <div className="engineer-label">
                        <p className="eyebrow">{story.about.eyebrow}</p>
                    </div>

                    <div className="engineer-section-content">
                        <h2>{story.about.title}</h2>

                        <div className="engineer-copy-stack">
                            {story.about.paragraphs.map((paragraph) => (
                                <p className="engineer-copy" key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="engineer-point-grid">
                            {story.about.points.map((point, index) => (
                                <div className="engineer-point" key={point}>
                                    <span>0{index + 1}</span>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="engineer-section engineer-gallery">
                <div className="engineer-shell">
                    <div className="engineer-gallery-intro">
                        <p className="eyebrow">{story.gallery.eyebrow}</p>
                        <h2>{story.gallery.title}</h2>
                        <p className="engineer-copy">
                            {story.gallery.description}
                        </p>
                    </div>

                    <div className="engineer-screens">
                        {screenshots.map((item, index) => {
                            const content = story.gallery.items[index];

                            return (
                                <article
                                    className="engineer-screen"
                                    key={item.key}
                                >
                                    <div className="engineer-screen-head">
                                        <span>0{index + 1}</span>

                                        <div>
                                            <h3>{content.title}</h3>
                                            <p>{content.description}</p>
                                        </div>
                                    </div>

                                    <div className="engineer-screen-image">
                                        <Image
                                            src={item.image}
                                            alt={content.title}
                                            width={1600}
                                            height={900}
                                            priority={index === 0}
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="engineer-section engineer-work">
                <div className="engineer-shell engineer-section-grid">
                    <div className="engineer-label">
                        <p className="eyebrow">{story.work.eyebrow}</p>
                    </div>

                    <div className="engineer-section-content">
                        <h2>{story.work.title}</h2>

                        <p className="engineer-copy">
                            {story.work.description}
                        </p>

                        <div className="engineer-contribution">
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

            <section className="engineer-next">
                <div className="engineer-shell">
                    <p className="eyebrow">{story.next.eyebrow}</p>

                    <h2>{story.next.title}</h2>

                    <p>{story.next.description}</p>

                    <div className="engineer-next-actions">
                        <Link
                            className="engineer-button engineer-button-light"
                            href="/"
                        >
                            {story.visitPortfolio}
                            <ArrowUpRight aria-hidden="true" />
                        </Link>

                        <Link href="/#work">
                            <ArrowLeft aria-hidden="true" />
                            {story.back}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
