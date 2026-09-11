"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Capabilities() {
    const { t } = useLanguage();

    const items = t.capabilities.items;

    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);
    const firstSetRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const speed = 80;

        const animate = (time: number) => {
            if (lastTimeRef.current === null) {
                lastTimeRef.current = time;
            }

            const delta = Math.min(time - lastTimeRef.current, 32);
            lastTimeRef.current = time;

            const track = trackRef.current;
            const firstSet = firstSetRef.current;

            if (track && firstSet) {
                const loopWidth = firstSet.offsetWidth;

                offsetRef.current -= (speed * delta) / 1000;

                if (Math.abs(offsetRef.current) >= loopWidth) {
                    offsetRef.current += loopWidth;
                }

                track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const renderItems = (prefix: string) =>
        items.map((item) => (
            <span className="ticker-item" key={`${prefix}-${item}`}>
                {item}
                <i>✳</i>
            </span>
        ));

    return (
        <section
            className="capabilities"
            aria-label={t.capabilities.eyebrow}
        >
            <p className="eyebrow">{t.capabilities.eyebrow}</p>

            <div className="ticker" aria-hidden="true">
                <div className="ticker-track" ref={trackRef}>
                    <div className="ticker-set" ref={firstSetRef}>
                        {renderItems("first")}
                    </div>

                    <div className="ticker-set">
                        {renderItems("second")}
                    </div>
                </div>
            </div>
        </section>
    );
}
