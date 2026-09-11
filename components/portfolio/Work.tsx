"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ProjectLink = {
    label: string;
    href: string;
    external?: boolean;
};

type Project = {
    number: string;
    key: "tomekgardens" | "slimter" | "engineerPortfolio" | "bottleProject";
    href: string | null;
    image: string;
    muted?: boolean;
    links?: ProjectLink[];
};

const projects: Project[] = [
    {
        number: "01",
        key: "tomekgardens",
        href: "https://tomekgardens.pl",
        image: "/images/tomekgardens.webp",
        links: [
            {
                label: "Website",
                href: "https://tomekgardens.pl",
                external: true,
            },
            {
                label: "Instagram",
                href: "https://www.instagram.com/tomekgardens/",
                external: true,
            },
            {
                label: "Facebook",
                href: "https://www.facebook.com/tomekgardens",
                external: true,
            },
            {
                label: "TikTok",
                href: "https://www.tiktok.com/@tomekgardens",
                external: true,
            },
        ],
    },
    {
        number: "02",
        key: "slimter",
        href: "https://slimter.pl",
        image: "/images/slimter.webp",
        links: [
            {
                label: "Website",
                href: "https://slimter.pl",
                external: true,
            },
            {
                label: "Read story",
                href: "/work/slimter",
            },
        ],
    },
    {
        number: "03",
        key: "engineerPortfolio",
        href: "https://github.com/TomaszZdebiakcode/digital-portfolio",
        image: "/images/home.webp",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/TomaszZdebiakcode/digital-portfolio",
                external: true,
            },
            {
                label: "Read story",
                href: "/work/engineer-portfolio",
            },
        ],
    },
    {
        number: "04",
        key: "bottleProject",
        href: null,
        image: "/images/bottle_project.webp",
        muted: true,
        links: [
            {
                label: "Coming soon",
                href: "/work/bottle-project",
            },
        ],
    },
];

export default function Work() {
    const { t } = useLanguage();

    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [previewPosition, setPreviewPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMove = (
        event: React.MouseEvent<HTMLDivElement>,
        project: Project
    ) => {
        const previewWidth = 320;
        const previewHeight = 210;
        const gap = 32;
        const padding = 24;

        const headerHeight = window.innerWidth <= 600 ? 64 : 76;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        let x = 0;
        let y = 0;

        if (
            mouseX + gap + previewWidth <= vw - padding &&
            mouseY - gap - previewHeight >= headerHeight + padding
        ) {
            x = mouseX + gap;
            y = mouseY - previewHeight - gap;
        } else if (
            mouseX - gap - previewWidth >= padding &&
            mouseY - gap - previewHeight >= headerHeight + padding
        ) {
            x = mouseX - previewWidth - gap;
            y = mouseY - previewHeight - gap;
        } else if (
            mouseX + gap + previewWidth <= vw - padding &&
            mouseY + gap + previewHeight <= vh - padding
        ) {
            x = mouseX + gap;
            y = mouseY + gap;
        } else {
            x = mouseX - previewWidth - gap;
            y = mouseY + gap;
        }

        x = Math.max(
            padding,
            Math.min(x, vw - previewWidth - padding)
        );

        y = Math.max(
            headerHeight + padding,
            Math.min(y, vh - previewHeight - padding)
        );

        setActiveProject(project);
        setPreviewPosition({ x, y });
    };

    const handleLeave = () => {
        setActiveProject(null);
    };

    return (
        <section className="work" id="work">
            <div className="section-head">
                <p className="eyebrow">{t.work.eyebrow}</p>
                <p>{t.work.count}</p>
            </div>

            <div className="project-list">
                {projects.map((project) => {
                    const content = t.work.projects[project.key];
                    const mainLink =
                        project.href ?? project.links?.[0]?.href ?? "#";
                    const isExternalMainLink = Boolean(project.href);

                    return (
                        <div
                            className={`project${project.muted ? " is-muted" : ""
                                }`}
                            key={project.number}
                            onMouseMove={(event) =>
                                handleMove(event, project)
                            }
                            onMouseLeave={handleLeave}
                        >
                            <span className="project-no">
                                {project.number}
                            </span>

                            <div className="project-main">
                                <h3>
                                    {project.href ? (
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {content.title}
                                        </a>
                                    ) : (
                                        content.title
                                    )}
                                </h3>

                                <p>{content.description}</p>

                                {project.links?.length ? (
                                    <div className="project-links">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target={
                                                    link.external
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    link.external
                                                        ? "noreferrer"
                                                        : undefined
                                                }
                                            >
                                                {link.label}
                                                <span aria-hidden="true">
                                                    {" "}
                                                    ↗
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <ul className="project-tags">
                                {content.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>

                            <a
                                className="arrow"
                                href={mainLink}
                                target={
                                    isExternalMainLink
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    isExternalMainLink
                                        ? "noreferrer"
                                        : undefined
                                }
                                aria-label={
                                    project.muted
                                        ? ("story" in content ? content.story : "")
                                        : content.title
                                }
                            >
                                {project.muted ? ("story" in content ? content.story : "") : "↗"}
                            </a>
                        </div>
                    );
                })}
            </div>

            {activeProject ? (
                <img
                    className="project-preview show"
                    src={activeProject.image}
                    alt=""
                    style={{
                        left: `${previewPosition.x}px`,
                        top: `${previewPosition.y}px`,
                    }}
                />
            ) : null}
        </section>
    );
}
