const de = {
    navbar: {
        about: "ÜBER MICH",
        inventory: "ARSENAL",
        projects: "PROJEKTE",
        contact: "KONTAKT AUFNEHMEN",
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
        section: "Bosskämpfe",

        title: "Jeder Boss besiegt.",

        description:
            "Jedes Projekt hat mich aus meiner Komfortzone herausgeführt. Jeder Bosskampf hat neue Fähigkeiten freigeschaltet und mich zu einem besseren Entwickler gemacht.",

        projects: [
            {
                boss: "Boss #01",
                status: "Besiegt",

                name: "Developer Journey",

                description:
                    "Ein Portfolio, das meinen Weg vom Game Software Engineering Studenten zum Software Engineer dokumentiert.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/developer-journey",

                github: "#",

                skills: [
                    { icon: "react", label: "React" },
                    { icon: "next", label: "Next.js" },
                    { icon: "tailwind", label: "Tailwind CSS" },
                    { icon: "responsive", label: "Responsive UI" },
                ],
            },

            {
                boss: "Boss #02",
                status: "Besiegt",

                name: "Slimter",

                description:
                    "Eine WordPress-Webseite zum Thema Adipositas, die verschiedene Behandlungsmethoden in einer barrierefreien und responsiven Oberfläche vergleicht.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/slimter",

                github: "#",

                skills: [
                    { icon: "wordpress", label: "WordPress" },
                    { icon: "javascript", label: "JavaScript" },
                    { icon: "css", label: "CSS" },
                    { icon: "accessibility", label: "Accessibility" },
                ],
            },

            {
                boss: "Boss #03",
                status: "Besiegt",

                name: "Warehouse Pathfinder",

                description:
                    "Ein Python-Projekt mit A*- und BFS-Algorithmen zur Visualisierung intelligenter Lagerroboter-Navigation.",

                difficulty: 3,

                image: "/images/warehouse.webp",

                imagePosition: "object-[33%_center]",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/warehouse-pathfinder",

                github: "#",

                skills: [
                    { icon: "python", label: "Python" },
                    { icon: "astar", label: "A* Algorithmus" },
                    { icon: "bfs", label: "BFS" },
                    { icon: "testing", label: "Unit Tests" },
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

    achievements: {
        section: "Erfolge",

        title: "Quest-Fortschritt.",

        description:
            "Jedes Projekt, jede Herausforderung und jede Erfahrung bringt mich meinem endgültigen Ziel einen Schritt näher.",

        unlocked: "Freigeschaltet",

        progress: "Aktuelle Quest",

        locked: "Gesperrt",

        items: [
            {
                title: "Erste React-Anwendung",

                description:
                    "Meine erste echte React-Anwendung entwickelt.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Erste WordPress-Website",

                description:
                    "Slimter entworfen und veröffentlicht.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Next.js Portfolio",

                description:
                    "Mein Developer Journey Portfolio erstellt.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Erste Kundenwebsite",

                description:
                    "Meine erste Website für einen zahlenden Kunden entwickelt und ausgeliefert.",

                status: "unlocked",

                icon: "Briefcase",
            },

            {
                title: "Erste Stelle als Software Engineer",

                description:
                    "Meine erste Position als Software Engineer erhalten.",

                status: "progress",

                icon: "Briefcase",
            },

            {
                title: "Erstes SaaS veröffentlichen",

                description:
                    "Mein eigenes Softwareprodukt entwickeln und veröffentlichen.",

                status: "locked",

                icon: "Rocket",
            },

            {
                title: "Eigenes Unternehmen gründen",

                description:
                    "Ein Softwareunternehmen gründen und Unternehmen beim Wachstum unterstützen.",

                status: "locked",

                icon: "Building2",
            },

            {
                title: "100 zufriedene Kunden",

                description:
                    "Mehr als 100 zufriedenen Kunden einen Mehrwert bieten.",

                status: "locked",

                icon: "Users",
            },
        ],
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