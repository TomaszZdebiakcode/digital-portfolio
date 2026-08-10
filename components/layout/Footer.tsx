"use client";
import BottleIcon from "@/components/hero/BottleIcon";
import CanIcon from "@/components/hero/CanIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer
            id="site-footer"
            className="
                relative
                mx-auto
                w-full
                max-w-7xl
                overflow-hidden
                px-6
                pb-24
                pt-16
            "
        >
            <div className="relative z-10 border-t border-white/10 pt-10">
                <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
                    {/* Message */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                            {t.footer.eyebrow}
                        </p>

                        <div className="mt-4">
                            <p className="text-sm leading-7 text-zinc-400">
                                {t.footer.lineOne}
                            </p>

                            <p className="text-sm leading-7 text-zinc-500">
                                {t.footer.lineTwo}
                            </p>
                        </div>
                    </div>

                    {/* Back to top */}
                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="
                            group
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            uppercase
                            tracking-widest
                            text-zinc-500
                            transition-colors
                            hover:text-white
                        "
                    >
                        <span>{t.footer.backToTop}</span>

                        <span className="text-base transition-transform duration-300 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </button>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {t.footer.copyright}.
                    </p>

                    <p>
                        {t.footer.designedBy}{" "}
                        <span className="font-medium text-zinc-500">
                            Tomasz Zdebiak
                        </span>
                    </p>
                </div>
            </div>

            {/* Floating bottle */}
            <div className="pointer-events-none absolute bottom-[-55px] left-[12%] opacity-20">
                <BottleIcon
                    className="h-36 w-16 text-violet-400"
                    style={
                        {
                            animationName: "bottleFloat",
                            animationDuration: "11s",
                            animationDelay: "0s",
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationFillMode: "both",
                            willChange: "transform",
                        } as React.CSSProperties
                    }
                />
            </div>

            {/* Floating can */}
            <div className="pointer-events-none absolute bottom-[-50px] left-1/2 -translate-x-1/2 opacity-15">
                <CanIcon
                    className="h-28 w-12 text-cyan-400"
                    style={
                        {
                            animationName: "canFloat",
                            animationDuration: "13s",
                            animationDelay: "-4s",
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationFillMode: "both",
                            willChange: "transform",
                        } as React.CSSProperties
                    }
                />
            </div>

            {/* Floating bottle */}
            <div className="pointer-events-none absolute bottom-[-60px] right-[15%] opacity-20">
                <BottleIcon
                    className="h-36 w-16 text-emerald-400"
                    style={
                        {
                            animationName: "bottleFloat",
                            animationDuration: "12s",
                            animationDelay: "-6s",
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationFillMode: "both",
                            willChange: "transform",
                        } as React.CSSProperties
                    }
                />
            </div>
        </footer>
    );
}