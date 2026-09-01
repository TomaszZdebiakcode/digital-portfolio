"use client";

import Image from "next/image";

export default function MissionStatus() {
    return (
        <section
            id="mission"
            className="
                group
                relative
                mx-auto
                w-full
                max-w-md
                scroll-mt-24
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-950
                shadow-2xl
                shadow-black/40
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-white/20
                hover:shadow-white/[0.03]
                lg:sticky
                lg:top-28
                lg:max-w-none
            "
        >
            {/* Subtle white highlight */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    z-10
                    h-64
                    w-64
                    rounded-full
                    bg-white/[0.025]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-white/[0.05]
                "
            />

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
                        group-hover:scale-[1.02]
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-transparent
                    "
                />
            </div>
        </section>
    );
}