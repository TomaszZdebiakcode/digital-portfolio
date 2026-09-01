import BottleIcon from "./BottleIcon";
import CanIcon from "./CanIcon";

export default function MobileBottleField() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                absolute
                inset-0
                z-[1]
                overflow-hidden
                sm:hidden
            "
        >
            {/* Subtle blue atmosphere */}
            <div
                className="
                    absolute
                    right-[-80px]
                    top-[12%]
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-blue-500/[0.025]
                    blur-[70px]
                "
            />

            {/* Main bottle */}
            <BottleIcon
                className="
                    absolute
                    right-[5%]
                    top-[9%]
                    h-28
                    w-14
                    text-blue-400
                    opacity-25
                "
                style={{
                    animation:
                        "mobileBottleFloat 16s ease-in-out infinite",
                }}
            />

            {/* Blue can */}
            <CanIcon
                className="
                    absolute
                    right-[-2%]
                    top-[45%]
                    h-24
                    w-14
                    text-blue-400
                    opacity-20
                "
                style={{
                    animation:
                        "mobileCanFloat 19s ease-in-out infinite",
                    animationDelay: "-6s",
                }}
            />

            {/* Lower bottle */}
            <BottleIcon
                className="
                    absolute
                    right-[14%]
                    bottom-[12%]
                    h-24
                    w-12
                    text-white
                    opacity-15
                "
                style={{
                    animation:
                        "mobileBottleFloat 21s ease-in-out infinite",
                    animationDelay: "-11s",
                }}
            />
        </div>
    );
}