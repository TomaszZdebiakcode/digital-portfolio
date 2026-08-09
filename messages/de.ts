const de = {
    navbar: {
        about: "ÜBER MICH",
        inventory: "ARSENAL",
        projects: "PROJEKTE",
        contact: "KONTAKT",
    },

    hero: {
        eyebrow: "SUCHST DU EINEN",
        titleLine1: "Digital",
        titleLine2: "Creator",

        description1: "Ich entwickle",
        descriptionHighlight1: "Produkte",
        description2: "an die sich Menschen",
        descriptionHighlight2: "erinnern.",

        button: "Kontakt auf LinkedIn",

        story: "Meine Geschichte",
    },

    about: {
        section: "Über mich",

        title: "Warum ich entwickle.",

        paragraph1:
            "Ich möchte meine Karriere nicht darauf aufbauen, nur das Minimum zu leisten.",

        paragraph2:
            "Ich möchte mehr als einen traditionellen Job. Ich möchte Produkte entwickeln, Systeme schaffen und Probleme lösen, die das Leben der Menschen verbessern.",

        paragraph3:
            "Developer Journey ist der Ort, an dem ich diesen Prozess dokumentiere. Jedes Projekt, jede Herausforderung und jede Quest bringt mich meinem Ziel näher, der Entwickler zu werden, der ich sein möchte.",
    },

    missionStatus: {
        title: "Missionsstatus",

        currentObjective: "Aktuelles Ziel",
        currentObjectiveValue: "Software Engineer werden.",

        sideQuest: "Nebenquest",
        sideQuestValue: "Menschen dabei helfen, schöne Gärten zu gestalten.",

        nextExpansion: "Nächste Erweiterung",
        nextExpansionValue: "Produkte entwickeln, die das Leben einfacher machen.",
    },

    skillTree: {
        section: "Werte",

        title: "Wie ich denke.",

        cards: [
            {
                title: "Produkte entwickeln",

                description:
                    "Ich verwandle Ideen gerne in Produkte, die echte Probleme lösen und Mehrwert schaffen.",
            },

            {
                title: "In Systemen denken",

                description:
                    "Ich bevorzuge skalierbare Systeme, anstatt immer wieder dieselben Probleme zu lösen.",
            },

            {
                title: "Ständig wachsen",

                description:
                    "Jedes Projekt ist eine neue Gelegenheit zu lernen, mich weiterzuentwickeln und ein besserer Entwickler zu werden.",
            },
        ],
    },

    bossBattles: {
        section: "Projekte",

        title: "Jedes Projekt abgeschlossen.",

        description:
            "Jedes Projekt hat mich aus meiner Komfortzone herausgefordert. Jede Herausforderung hat mir neue Fähigkeiten vermittelt und mich zu einem besseren Softwareentwickler gemacht.",

        projects: [
            {
                boss: "Boss #01",
                status: "Abgeschlossen",

                name: "TomekGardens",

                description:
                    "Mein eigenes Gartenbauunternehmen und die dazugehörige Website, entwickelt mit React, um meine Dienstleistungen und Projekte zu präsentieren und Kunden die Kontaktaufnahme zu erleichtern.",

                difficulty: 5,

                image: "/images/tomekgardens.webp",

                imagePosition: "object-[center_70%] lg:object-[center_50%]",

                rewardsTitle: "Freigeschaltete Fähigkeiten",

                battleButton: "Website besuchen",

                hoverButton: "Entdecken?",

                sourceButton: "TomekGardens",

                href: "https://tomekgardens.com",

                socialLinks: [
                    {
                        label: "Instagram",
                        href: "https://www.instagram.com/tomekgardens/",
                        icon: "instagram",
                    },
                    {
                        label: "Facebook",
                        href: "https://www.facebook.com/tomekgardens",
                        icon: "facebook",
                    },
                    {
                        label: "TikTok",
                        href: "https://www.tiktok.com/@tomekgardens",
                        icon: "tiktok",
                    },
                ],

                skills: [
                    {
                        icon: "entrepreneurship",
                        label: "Unternehmertum",
                    },
                    {
                        icon: "advertising",
                        label: "Marketing",
                    },
                    {
                        icon: "gardening",
                        label: "Gartenbau",
                    },
                    {
                        icon: "product",
                        label: "Produktentwicklung",
                    },
                ],
            },

            {
                boss: "Boss #02",
                status: "Abgeschlossen",

                name: "Digital Portfolio",

                description:
                    "Mein digitales Portfolio, das meine Projekte, technischen Fähigkeiten und meine Entwicklung als Softwareentwickler präsentiert.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Freigeschaltete Fähigkeiten",

                battleButton: "Projekt ansehen",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/developer-journey",

                github: "https://github.com/TomaszZdebiakcode/digital-portfolio",

                skills: [
                    {
                        icon: "react",
                        label: "React",
                    },
                    {
                        icon: "next",
                        label: "Next.js",
                    },
                    {
                        icon: "tailwind",
                        label: "Tailwind CSS",
                    },
                    {
                        icon: "responsive",
                        label: "Responsives UI",
                    },
                ],
            },

            {
                boss: "Boss #03",
                status: "Abgeschlossen",

                name: "Slimter",

                description:
                    "Eine auf WordPress basierende Website zum Thema Adipositas und zur verständlichen Gegenüberstellung verschiedener Behandlungsmethoden, mit Fokus auf Barrierefreiheit und responsives Design.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Freigeschaltete Fähigkeiten",

                battleButton: "Website besuchen",
                hoverButton: "Entdecken?",

                historyButton: "Geschichte lesen",
                historyHref: "/boss/slimter",

                href: "https://slimter.com",
                github: "#",

                skills: [
                    {
                        icon: "wordpress",
                        label: "WordPress",
                    },
                    {
                        icon: "javascript",
                        label: "JavaScript",
                    },
                    {
                        icon: "css",
                        label: "CSS",
                    },
                    {
                        icon: "accessibility",
                        label: "Barrierefreiheit",
                    },
                ],
            },
        ],
    },

    inventory: {
        section: "ARSENAL",
        title: "Werkzeuge, die ich in einen Vorteil verwandle.",
        description:
            "Ich kombiniere KI, Automatisierung und saubere Implementierung, um Produkte schneller zu entwickeln und wiederkehrende Arbeit zu reduzieren.",

        ai: {
            title: "AI",
            description:
                "Ich nutze KI als Teil meines täglichen Workflows — von Problemanalyse und Prototyping bis hin zur Produktentwicklung und Dokumentation.",
            tags: [
                "AI-assisted development",
                "Prompting",
                "Prototyping",
            ],
        },

        automation: {
            title: "Automation",
            description:
                "Ich automatisiere wiederkehrende Aufgaben, Integrationen und Workflows, um manuelle Arbeit zu reduzieren und Zeit zu sparen.",
            tags: [
                "Workflows",
                "APIs",
                "Integrationen",
            ],
        },

        implementation: {
            title: "Implementation",
            description:
                "Ich verwandle Ideen in funktionierende Produkte — vom ersten Prototyp über Integrationen bis zum Deployment.",
            tags: [
                "Next.js",
                "React",
                "TypeScript",
                "WordPress",
            ],
        },

        optimization: {
            title: "Optimization",
            description:
                "Ich suche nach Möglichkeiten, Prozesse zu vereinfachen, Ausführungszeit zu reduzieren und Arbeitsabläufe zu verbessern.",
            tags: [
                "Performance",
                "UX",
                "Prozessoptimierung",
            ],
        },
    },


    contact: {
        section: "Endgegner",

        titleStart: "Lass uns",

        titleMiddle: "etwas",

        titleEnd: "Großartiges erschaffen.",

        description:
            "Ich suche derzeit nach Möglichkeiten als Software Engineer, nach Freelance-Projekten und spannenden Kooperationen. Wenn du eine Idee, eine Herausforderung oder einfach Lust auf einen Austausch hast, lass uns die nächste Quest gemeinsam beginnen.",

        emailButton: "E-Mail senden",
    },
};

export default de;