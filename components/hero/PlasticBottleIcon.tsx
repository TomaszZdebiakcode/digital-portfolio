import type { SVGProps } from "react";

export default function PlasticBottleIcon(
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            viewBox="0 0 120 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            {...props}
        >
            {/* Cap */}
            <path
                d="M47 8H73V24H47V8Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
            />

            {/* Neck */}
            <path
                d="M48 24V39C48 45 43 49 38 54C31 61 28 70 29 82"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M72 24V39C72 45 77 49 82 54C89 61 92 70 91 82"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Crushed body */}
            <path
                d="
                    M29 82
                    C39 88 48 80 60 88
                    C72 96 81 87 91 82
                    V202
                    C82 213 72 207 60 216
                    C48 224 38 215 29 202
                    V82
                "
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
            />

            {/* Creases */}
            <path
                d="M32 104C43 111 51 102 60 109C69 116 78 106 88 103"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.65"
            />

            <path
                d="M32 143C43 150 51 140 60 148C69 155 78 145 88 142"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
            />

            <path
                d="M33 179C44 187 52 177 60 184C69 191 78 182 87 178"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.45"
            />

            {/* Label */}
            <path
                d="M39 116C47 119 53 116 60 120C67 124 74 120 81 117V154C73 157 67 154 60 151C53 148 47 151 39 148V116Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
            />

            <path
                d="M47 130H73"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            <path
                d="M50 139H68"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}