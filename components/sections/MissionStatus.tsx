"use client";

import Image from "next/image";

export default function MissionStatus() {
    return (
        <section
            id="mission"
            className="
                mx-auto
                w-full
                max-w-md
                scroll-mt-24
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/70
                shadow-2xl
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-violet-500/40
                lg:sticky
                lg:top-28
                lg:max-w-none
            "
        >
            <div className="relative aspect-[4/5] w-full">
                <Image
                    src="/images/tomasz-zdebiak.webp"
                    alt="Tomasz Zdebiak"
                    fill
                    priority
                    className="
                        object-cover
                        object-center
                        grayscale-[10%]
                        transition-transform
                        duration-700
                        hover:scale-[1.02]
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
        </section>
    );
}