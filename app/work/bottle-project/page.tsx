"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BottleProjectPage() {
    const { t } = useLanguage();
    const story = t.bottleStory;

    return (
        <main className="bottle-story">
            <header className="bottle-hero">
                <div className="bottle-shell">
                    <Link className="bottle-back" href="/#work">
                        <ArrowLeft aria-hidden="true" />
                        {story.back}
                    </Link>

                    <div className="bottle-hero-grid">
                        <div className="bottle-hero-copy">
                            <div className="bottle-kicker">
                                <span>{story.project}</span>
                                <span className="bottle-status">
                                    <i />
                                    {story.status}
                                </span>
                            </div>

                            <h1>{story.title}</h1>

                            <p className="bottle-intro">
                                {story.intro}
                            </p>

                            <div className="bottle-tags">
                                {story.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bottle-hero-image">
                            <Image
                                src="/images/bottle_project.webp"
                                alt={story.title}
                                width={1600}
                                height={1200}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="bottle-section">
                <div className="bottle-shell bottle-section-grid">
                    <div className="bottle-label">
                        <p className="eyebrow">{story.idea.eyebrow}</p>
                    </div>

                    <div className="bottle-content">
                        <h2>{story.idea.title}</h2>

                        {story.idea.paragraphs.map((paragraph) => (
                            <p className="bottle-copy" key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bottle-section bottle-directions">
                <div className="bottle-shell bottle-section-grid">
                    <div className="bottle-label">
                        <p className="eyebrow">
                            {story.exploring.eyebrow}
                        </p>
                    </div>

                    <div className="bottle-content">
                        <h2>{story.exploring.title}</h2>

                        <div className="bottle-direction-list">
                            {story.exploring.items.map((item) => (
                                <article key={item.number}>
                                    <span>{item.number}</span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bottle-image-section">
                <div className="bottle-shell">
                    <div className="bottle-large-image">
                        <Image
                            src="/images/bottle_project.webp"
                            alt={story.imageAlt}
                            width={1800}
                            height={1200}
                        />
                    </div>
                </div>
            </section>

            <section className="bottle-next">
                <div className="bottle-shell">
                    <p className="eyebrow">{story.next.eyebrow}</p>

                    <h2>{story.next.title}</h2>

                    <p>{story.next.description}</p>

                    <div className="bottle-next-actions">
                        <Link href="/#work">
                            <ArrowLeft aria-hidden="true" />
                            {story.back}
                        </Link>

                        <Link href="/#contact">
                            {story.next.contact}
                            <ArrowUpRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
