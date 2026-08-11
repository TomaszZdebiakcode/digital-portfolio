"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";

type DeveloperCardProps = {
    started: boolean;
};

export default function DeveloperCard({
    started,
}: DeveloperCardProps) {
    const { t } = useLanguage();
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.getElementById("site-footer");

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting);
            },
            {
                threshold: 0.05,
            }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    const visible = started && !footerVisible;

    return (
        <div
            className={`
                fixed
                z-50
                bottom-4
                left-4
                right-4

                md:left-auto
                md:right-8
                md:bottom-8
                md:w-[360px]

                transition-all
                duration-700
                ease-out

                ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-40 opacity-0 pointer-events-none"
                }
            `}
        >
            <div className="rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur">
                <div className="flex gap-4">
                    <Image
                        src="/images/profile.webp"
                        alt="Tomasz Zdebiak"
                        width={56}
                        height={56}
                        className="mt-1 h-14 w-14 flex-shrink-0 rounded-xl object-cover object-[center_5%]"
                    />

                    <div className="flex flex-1 flex-col">
                        <h3 className="font-bold leading-none text-white">
                            Tomasz Zdebiak
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                            Product Engineer
                            <br />

                            <span className="mt-2 inline-flex items-center gap-6 text-green-400">
                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-400" />

                                    <span className="text-xs font-medium">
                                        {t.developerCard.availability}
                                    </span>
                                </span>

                                <span className="text-sm font-bold">
                                    ✚ 100 HP
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}