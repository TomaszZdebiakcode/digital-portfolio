const de = {
    navbar: {
        about: "ÜBER MICH",
        inventory: "ARSENAL",
        projects: "PROJEKTE",
        contact: "KONTAKT",
    },

    hero: {
        eyebrow: "SUCHST DU EINEN",
        titleLine1: "Product",
        titleLine2: "Engineer",

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
            "Hier dokumentiere ich diesen Prozess. Jedes Projekt, jede Herausforderung und jede Quest bringt mich dem Ingenieur näher, der ich sein möchte.",
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

                imageHeight: "h-[500px]",

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

                name: "Slimter",

                description:
                    "Eine auf WordPress basierende Website zum Thema Adipositas und zur verständlichen Gegenüberstellung verschiedener Behandlungsmethoden, mit Fokus auf Barrierefreiheit und responsives Design.",

                difficulty: 5,

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

            {
                boss: "Boss #03",
                status: "Abgeschlossen",

                name: "Engineer Portfolio",

                description:
                    "Mein digitales Portfolio, das meine Projekte, technischen Fähigkeiten und meine Entwicklung zum Softwareentwickler präsentiert.",

                difficulty: 5,

                image: "/images/portfolio-home.webp",

                imagePosition: "object-[30%_center]",

                rewardsTitle: "Freigeschaltete Fähigkeiten",

                battleButton: "Projekt ansehen",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/engineer-portfolio",

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
                boss: "Boss #04",
                status: "In Entwicklung",

                name: "Bottle Project",

                description:
                    "Ein zukünftiges Projekt rund um ein reales Produkt, das Technologie, Produktentwicklung und Investmentdenken miteinander verbindet.",

                difficulty: 5,

                image: "/images/bottle_project.webp",

                imagePosition: "object-center",

                rewardsTitle: "Freigeschaltete Belohnungen",

                battleButton: "Demnächst",

                hoverButton: "Entdecken?",

                href: "/boss/bottle-project",

                skills: [
                    {
                        icon: "product",
                        label: "Produktentwicklung",
                    },
                    {
                        icon: "investment",
                        label: "Investments",
                    },
                    {
                        icon: "technology",
                        label: "Technologie",
                    },
                    {
                        icon: "entrepreneurship",
                        label: "Unternehmertum",
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

    slimterStory: {
        back: "Zurück zu den Projekten",

        eyebrow: "Projektgeschichte",
        status: "Abgeschlossen",

        title: "Slimter",
        intro:
            "Eine WordPress-Website, die Informationen über Adipositas und Behandlungsmethoden übersichtlich, verständlich und einfach zugänglich macht.",

        visitWebsite: "Website besuchen",

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

        challenge: {
            eyebrow: "Die Herausforderung",
            title: "Komplexe Informationen in eine klare Nutzererfahrung verwandeln.",
            description:
                "Slimter wurde entwickelt, um Bildungsinhalte über Adipositas und Behandlungsmethoden strukturiert und verständlich darzustellen. Das Projekt verbindet umfangreiche Inhalte mit interaktiven Werkzeugen, die Nutzern helfen, Informationen zu erkunden und verschiedene Möglichkeiten zu vergleichen.",
            points: [
                "Klare Informationsarchitektur und Navigation",
                "Responsive Darstellung auf Desktop, Tablet und Mobilgeräten",
                "Interaktive Vergleichs- und Berechnungstools",
                "Barrierearme Benutzeroberfläche und gut lesbare Inhalte",
            ],
        },

        gallery: {
            eyebrow: "Die Website",
            title: "Von Information zu Interaktion.",
            description:
                "Das Projekt verbindet informative Inhalte, strukturierte Navigation und interaktive Funktionen zu einer konsistenten Benutzererfahrung.",

            items: [
                {
                    title: "Startseite",
                    description:
                        "Die Startseite stellt das Projekt vor und führt Nutzer zu Bildungsinhalten und dem Vergleich verschiedener Behandlungsmethoden.",
                },
                {
                    title: "Vergleich der Behandlungsmethoden",
                    description:
                        "Ein interaktiver Bereich, der den Vergleich verschiedener Methoden zur Gewichtsreduktion erleichtert.",
                },
                {
                    title: "Kostenrechner",
                    description:
                        "Ein Rechner, mit dem Nutzer geschätzte Kosten untersuchen und verschiedene Szenarien vergleichen können.",
                },
                {
                    title: "Auswirkungen auf die Gesundheit",
                    description:
                        "Ein eigener Inhaltsbereich mit Informationen über die gesundheitlichen Auswirkungen von Adipositas.",
                },
            ],
        },

        work: {
            eyebrow: "Mein Beitrag",
            title: "Woran ich gearbeitet habe.",
            description:
                "Das Projekt kombinierte Frontend-Implementierung, Inhaltsstruktur und interaktive Funktionen zu einer responsiven WordPress-Erfahrung.",
            items: [
                "Website-Struktur und Seitenlayouts",
                "Responsive Implementierung",
                "Interaktive Vergleichstools",
                "Kostenrechner",
                "Navigation und User Experience",
                "Verbesserung der Barrierefreiheit",
                "JavaScript-Interaktionen",
                "WordPress-Entwicklung",
            ],
        },

        next: {
            eyebrow: "Projekt abgeschlossen",
            title: "Das Live-Projekt ansehen.",
            description:
                "Besuche Slimter, um die vollständige Website in ihrer ursprünglichen Umgebung zu erleben.",
        },

    },
    developerCard: {
        availability: "Verfügbar",
    },

    engineerPortfolioStory: {
        back: "Zurück zu den Projekten",

        eyebrow: "BOSS #03",
        status: "✓ Besiegt",

        title: "Engineer Portfolio",

        intro:
            "Mein digitales Portfolio, das meine Projekte, technischen Fähigkeiten und meine Entwicklung als Softwareentwickler präsentiert.",

        visitPortfolio: "Portfolio besuchen",

        skills: [
            {
                label: "React",
                icon: "react",
            },
            {
                label: "Next.js",
                icon: "nextjs",
            },
            {
                label: "TypeScript",
                icon: "typescript",
            },
            {
                label: "Responsives UI",
                icon: "responsive",
            },
        ],

        about: {
            eyebrow: "ÜBER MICH",
            title: "Wer bin ich?",

            paragraphs: [
                "Ich bin Software-Engineering-Student im dritten Studienjahr mit Schwerpunkt auf Spieleentwicklung. Meine Programmierkenntnisse entwickle ich sowohl im Studium als auch durch eigene Projekte weiter. Dabei konzentriere ich mich darauf, praktische und gut durchdachte Produkte zu entwickeln.",

                "Neben meinem Studium führe ich auch mein eigenes Gartenbauunternehmen. Dadurch habe ich gelernt, Verantwortung zu übernehmen, mich zu organisieren und Entscheidungen in realen geschäftlichen Situationen zu treffen.",

                "Derzeit arbeite ich an zwei Projekten, die in naher Zukunft das Licht der Welt erblicken werden. Das Engineer Portfolio ist der Ort, an dem ich diesen Prozess dokumentiere — vom ersten Konzept bis zum fertigen Produkt.",
            ],

            points: [
                "Software-Engineering-Student im dritten Studienjahr",
                "Eigenes Gartenbauunternehmen",
                "Zwei Projekte derzeit in Entwicklung",
                "Lernen durch praktische Umsetzung",
            ],
        },

        gallery: {
            eyebrow: "PORTFOLIO",
            title: "Vom Konzept zum Produkt.",

            description:
                "Das Portfolio wurde als Ort gestaltet, an dem ich meine Erfahrungen, Projekte und meine Entwicklung als Softwareentwickler präsentieren kann.",

            items: [
                {
                    title: "Startseite",
                    description:
                        "Der erste Kontaktpunkt mit dem Portfolio — eine minimalistische Benutzeroberfläche mit Fokus auf mich, meine Projekte und das, was ich entwickle.",
                },
                {
                    title: "Über mich",
                    description:
                        "Ein Bereich, der meine Herangehensweise an die Softwareentwicklung und den Weg, den ich derzeit gehe, vorstellt.",
                },
                {
                    title: "Projekte",
                    description:
                        "Ein Ort, an dem ich die Projekte präsentiere, an denen ich arbeite, sowie die Technologien, die ich für deren Entwicklung einsetze.",
                },
                {
                    title: "Arsenal",
                    description:
                        "Ein Bereich, der die Tools, Technologien und Workflows zeigt, die ich nutze, um Ideen in praktische Lösungen zu verwandeln.",
                },
                {
                    title: "Kontakt",
                    description:
                        "Eine einfache Möglichkeit, Kontakt aufzunehmen und ein Gespräch zu beginnen.",
                },
            ],
        },

        work: {
            eyebrow: "WAS ICH ENTWICKLE",
            title: "Mehr als nur Code.",

            description:
                "Mich interessiert der gesamte Prozess der Produktentwicklung — von der ersten Idee und dem Design über die Implementierung bis hin zur fertigen Lösung.",

            items: [
                "Moderne Webanwendungen",
                "Benutzeroberflächen",
                "Anwendungssysteme und Logik",
                "Responsive Benutzererlebnisse",
                "Projekte von Grund auf",
                "Experimentieren mit neuen Technologien",
            ],
        },

        next: {
            eyebrow: "WIE GEHT ES WEITER?",
            title: "Das ist erst der Anfang.",

            description:
                "Das Portfolio wird gemeinsam mit mir wachsen — neue Projekte, Erfahrungen und nächste Schritte werden hier erscheinen, während ich mich weiterentwickle.",
        },
    },

    footer: {
        eyebrow: "BUILD CREATE DEFEAT",
        lineOne: "Ich entwickle. Ich lerne. Ich wachse",
        lineTwo: "Das nächste Level liegt immer vor mir",
        backToTop: "Nach oben",
        copyright: "Alle Rechte vorbehalten",
        designedBy: "Designed & Developed by",
    },
};

export default de;