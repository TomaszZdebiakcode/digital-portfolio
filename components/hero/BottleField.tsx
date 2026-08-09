import type { CSSProperties } from "react";
import BottleIcon from "./BottleIcon";
import CanIcon from "./CanIcon";
import PlasticBottleIcon from "./PlasticBottleIcon";

type ItemType = "bottle" | "can" | "plastic";

type BottleItem = {
    type: ItemType;
    className: string;
    duration: string;
    delay: string;
};

const items: BottleItem[] = [
    // 1 — main bottle
    {
        type: "bottle",
        className:
            "right-[8%] top-[10%] h-32 w-14 text-emerald-400 opacity-45 sm:right-[12%] sm:top-[10%] sm:h-36 sm:w-16 sm:opacity-60",
        duration: "11s",
        delay: "0s",
    },

    // 2 — violet can
    {
        type: "can",
        className:
            "right-[20%] top-[57%] h-28 w-16 text-violet-400 opacity-30 blur-[1px] sm:right-[24%] sm:top-[56%] sm:h-32 sm:w-18 sm:opacity-40",
        duration: "16s",
        delay: "-8s",
    },



    // 3 — plastic bottle
    {
        type: "plastic",
        className:
            "hidden sm:block right-[6%] top-[48%] h-44 w-20 text-white-400 opacity-55",
        duration: "13s",
        delay: "-6s",
    },

    // 4 — cyan can
    {
        type: "can",
        className:
            "hidden sm:block right-[29%] top-[24%] h-28 w-16 text-cyan-400 opacity-50",
        duration: "14s",
        delay: "-4s",
    },
    // 5 — bottom bottle
    {
        type: "bottle",
        className:
            "right-[38%] bottom-[10%] h-28 w-14 text-sky-400 opacity-30 blur-[1px] sm:right-[42%] sm:bottom-[8%] sm:h-32 sm:w-16 sm:opacity-40",
        duration: "12s",
        delay: "-2s",
    },

    // 6 — distant plastic bottle
    {
        type: "plastic",
        className:
            "right-[45%] top-[13%] h-24 w-12 text-green-300 opacity-25 blur-[2px] sm:right-[48%] sm:top-[16%] sm:h-28 sm:w-14 sm:opacity-35",
        duration: "15s",
        delay: "-10s",
    },

    // 7 — lower emerald bottle
    {
        type: "bottle",
        className:
            "right-[13%] bottom-[16%] h-32 w-14 text-emerald-300 opacity-35 sm:right-[17%] sm:bottom-[17%] sm:h-36 sm:w-16 sm:opacity-45",
        duration: "10s",
        delay: "-5s",
    },

    // 8 — distant can
    {
        type: "can",
        className:
            "right-[34%] top-[66%] h-24 w-12 text-cyan-300 opacity-25 blur-[2px] sm:right-[38%] sm:top-[68%] sm:h-26 sm:w-14 sm:opacity-30",
        duration: "17s",
        delay: "-12s",
    },

    // 9 — behind hero text
    {
        type: "bottle",
        className:
            "right-[52%] top-[34%] h-20 w-10 text-emerald-500 opacity-20 blur-[2px] sm:right-[54%] sm:top-[34%] sm:h-24 sm:w-12 sm:opacity-25",
        duration: "18s",
        delay: "-7s",
    },

    // 10 — right lower can
    {
        type: "can",
        className:
            "right-[10%] top-[67%] h-20 w-12 text-cyan-400 opacity-25 blur-[1px] sm:right-[14%] sm:top-[68%] sm:h-24 sm:w-14 sm:opacity-35",
        duration: "15s",
        delay: "-9s",
    },

    // 11 — top distant plastic
    {
        type: "plastic",
        className:
            "right-[29%] top-[7%] h-28 w-14 text-lime-400 opacity-20 blur-[2px] sm:right-[32%] sm:top-[8%] sm:h-32 sm:w-16 sm:opacity-25",
        duration: "20s",
        delay: "-13s",
    },

    // 12 — far right bottle
    {
        type: "bottle",
        className:
            "right-[2%] top-[27%] h-24 w-12 text-teal-300 opacity-25 blur-[1px] sm:right-[4%] sm:top-[28%] sm:h-28 sm:w-14 sm:opacity-30",
        duration: "14s",
        delay: "-3s",

    },
];


export default function BottleField() {
    return (
        <div className="pointer-events-none absolute inset-0 z-[1] hidden sm:block overflow-hidden">
            {/* Green atmosphere */}
            <div
                className="
                    absolute
                    right-[5%]
                    top-[20%]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-emerald-500/5
                    blur-[120px]
                    sm:h-[550px]
                    sm:w-[550px]
                    sm:bg-emerald-500/7
                "
            />

            {/* Recyclable objects */}
            {items.map((item, index) => {
                const Component =
                    item.type === "bottle"
                        ? BottleIcon
                        : item.type === "can"
                            ? CanIcon
                            : PlasticBottleIcon;

                const animationName =
                    item.type === "can"
                        ? "canFloat"
                        : "bottleFloat";

                const isCyan =
                    item.className.includes("text-cyan");

                return (
                    <Component
                        key={`${item.type}-${index}`}
                        className={`
    absolute
    ${item.className}
    ${index >= 4 ? "hidden sm:block" : ""}
`}
                        style={
                            {
                                animationName,
                                animationDuration: item.duration,
                                animationDelay: item.delay,
                                animationTimingFunction: "ease-in-out",
                                animationIterationCount: "infinite",
                                animationFillMode: "both",
                                willChange: "transform",
                            } as CSSProperties
                        }
                    />
                );
            })}

            {/* Small particles */}
            <span
                className="
                    absolute
                    right-[34%]
                    top-[31%]
                    h-1
                    w-1
                    rounded-full
                    bg-emerald-300/30
                    blur-[1px]
                    sm:h-1.5
                    sm:w-1.5
                    sm:bg-emerald-300/40
                "
            />

            <span
                className="
                    absolute
                    right-[15%]
                    top-[37%]
                    h-1
                    w-1
                    rounded-full
                    bg-cyan-300/30
                    blur-[1px]
                    sm:bg-cyan-300/40
                "
            />

            <span
                className="
                    absolute
                    right-[27%]
                    bottom-[22%]
                    h-1
                    w-1
                    rounded-full
                    bg-lime-300/25
                    blur-[2px]
                    sm:h-1.5
                    sm:w-1.5
                    sm:bg-lime-300/30
                "
            />

            <span
                className="
                    absolute
                    left-[42%]
                    top-[42%]
                    h-1
                    w-1
                    rounded-full
                    bg-emerald-300/20
                    blur-[2px]
                    sm:hidden
                "
            />
        </div>
    );
}