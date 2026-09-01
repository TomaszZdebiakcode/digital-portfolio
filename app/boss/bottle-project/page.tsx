"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BottleProjectPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white">
            <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">

                {/* Back */}
                <div className="pt-28 sm:pt-32">
                    <Link
                        href="/#projects"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-900/60
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            text-zinc-300
                            transition-all
                            duration-300
                            hover:border-white/20
                            hover:bg-zinc-900
                            hover:text-white
                        "
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to projects
                    </Link>
                </div>

                {/* Coming Soon */}
                <div className="flex flex-1 items-center justify-center pb-20">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                        COMING SOON
                    </h1>
                </div>

            </div>
        </main>
    );
}