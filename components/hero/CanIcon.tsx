import type { SVGProps } from "react";

export default function CanIcon(
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            viewBox="0 0 120 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            {...props}
        >
            {/* Body */}
            <path
                d="M30 24C30 16 43 10 60 10C77 10 90 16 90 24V186C90 194 77 200 60 200C43 200 30 194 30 186V24Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
            />

            {/* Top */}
            <ellipse
                cx="60"
                cy="24"
                rx="30"
                ry="14"
                stroke="currentColor"
                strokeWidth="3"
            />

            {/* Bottom */}
            <ellipse
                cx="60"
                cy="186"
                rx="30"
                ry="14"
                stroke="currentColor"
                strokeWidth="3"
            />

            {/* Top opening */}
            <path
                d="M48 22C51 18 69 18 72 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Label */}
            <rect
                x="39"
                y="73"
                width="42"
                height="58"
                rx="4"
                stroke="currentColor"
                strokeWidth="2.5"
            />

            {/* Label details */}
            <path
                d="M47 89H73"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            <path
                d="M47 101H68"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            <path
                d="M47 112H62"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}