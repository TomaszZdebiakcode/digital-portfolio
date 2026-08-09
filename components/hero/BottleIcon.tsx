import type { SVGProps } from "react";

export default function BottleIcon(
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            viewBox="0 0 80 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Bottle body */}
            <path
                d="
                    M29 8
                    H51
                    V25
                    C51 31 58 36 61 44
                    C65 55 64 70 64 88
                    V145
                    C64 163 55 172 40 172
                    C25 172 16 163 16 145
                    V88
                    C16 70 15 55 19 44
                    C22 36 29 31 29 25
                    Z
                "
                stroke="currentColor"
                strokeWidth="2"
            />

            {/* Neck */}
            <path
                d="M29 8H51"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Cap */}
            <path
                d="M31 4H49"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Label */}
            <rect
                x="21"
                y="78"
                width="38"
                height="42"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
            />

            {/* Label detail */}
            <path
                d="M29 92H51"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
            />

            <path
                d="M32 101H48"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.35"
            />

            {/* Reflection */}
            <path
                d="M28 52V144"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.25"
            />
        </svg>
    );
}