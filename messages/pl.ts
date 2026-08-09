const pl = {
    navbar: {
        about: "O MNIE",
        inventory: "ARSENAŁ",
        projects: "PROJEKTY",
        contact: "POROZMAWIAJMY",
    },

    hero: {
        eyebrow: "CZEGO SZUKASZ?",
        titleLine1: "Digital",
        titleLine2: "Creator",

        description1: "Tworzę",
        descriptionHighlight1: "produkty",
        description2: "które ludzie",
        descriptionHighlight2: "zapamiętują.",

        button: "Kontakt do LinkedIn",

        story: "Poznaj moją historię",
    },

    about: {
        section: "O mnie",

        title: "Dlaczego tworzę.",

        paragraph1:
            "Nie chcę budować swojej kariery na robieniu minimum.",

        paragraph2:
            "Chcę czegoś więcej niż tradycyjnej pracy. Chcę tworzyć produkty, budować systemy i rozwiązywać problemy, które realnie poprawiają życie ludzi.",

        paragraph3:
            "Developer Journey to miejsce, w którym dokumentuję ten proces. Każdy projekt, każde wyzwanie i każda misja przybliża mnie do zostania inżynierem, którym chcę być.",
    },

    missionStatus: {
        title: "Status Misji",

        currentObjective: "Aktualny Cel",
        currentObjectiveValue: "Zostać Software Engineerem.",

        sideQuest: "Misja Poboczna",
        sideQuestValue: "Pomagać ludziom tworzyć piękne ogrody.",

        nextExpansion: "Kolejny Etap",
        nextExpansionValue: "Tworzyć produkty, które ułatwiają życie.",
    },

    skillTree: {
        section: "Wartości",

        title: "Jak myślę.",

        cards: [
            {
                title: "Tworzę Produkty",

                description:
                    "Lubię zamieniać pomysły w produkty rozwiązujące prawdziwe problemy i tworzące wartość.",
            },

            {
                title: "Myślę Systemowo",

                description:
                    "Wolę budować skalowalne systemy niż wielokrotnie rozwiązywać ten sam problem.",
            },

            {
                title: "Nieustannie się Rozwijam",

                description:
                    "Każdy projekt jest kolejną okazją do nauki, rozwoju i stawania się lepszym inżynierem.",
            },
        ],
    },

    bossBattles: {
        section: "Projekty",

        title: "Każdy projekt ukończony.",

        description:
            "Każdy projekt wykraczał poza moją strefę komfortu. Każde wyzwanie pozwoliło mi zdobyć nowe umiejętności i stać się lepszym inżynierem oprogramowania.",

        projects: [
            {
                boss: "Boss #01",
                status: "Ukończony",

                name: "TomekGardens",

                description:
                    "Mój własny biznes ogrodniczy i strona internetowa stworzona w React, która prezentuje moje usługi, realizacje i ułatwia klientom kontakt.",

                difficulty: 5,

                image: "/images/tomekgardens.webp",

                imagePosition: "object-[center_70%] lg:object-[center_50%]",

                rewardsTitle: "Zdobyte umiejętności",

                battleButton: "Odwiedź stronę",

                hoverButton: "Odkryj?",

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
                        label: "Przedsiębiorczość",
                    },
                    {
                        icon: "advertising",
                        label: "Marketing",
                    },
                    {
                        icon: "gardening",
                        label: "Ogrodnictwo",
                    },
                    {
                        icon: "product",
                        label: "Tworzenie produktów",
                    },
                ],
            },

            {
                boss: "Boss #02",
                status: "Ukończony",

                name: "Digital Portfolio",

                description:
                    "Moje cyfrowe portfolio prezentujące projekty, umiejętności techniczne oraz rozwój jako inżyniera oprogramowania.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Zdobyte umiejętności",

                battleButton: "Zobacz projekt",

                hoverButton: "Gotowy?",

                sourceButton: "Kod źródłowy",

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
                        label: "Responsywny UI",
                    },
                ],
            },

            {
                boss: "Boss #03",
                status: "Ukończony",

                name: "Slimter",

                description:
                    "Strona internetowa oparta na WordPressie, poświęcona edukacji na temat otyłości i porównywaniu metod leczenia, z naciskiem na dostępność i responsywność.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Zdobyte umiejętności",

                battleButton: "Odwiedź stronę",
                hoverButton: "Odkryj?",

                historyButton: "Przeczytaj historię",
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
                        label: "Dostępność",
                    },
                ],
            },
        ],
    },

    inventory: {
        section: "ARSENAŁ",
        title: "Narzędzia, które zamieniam w przewagę.",
        description:
            "Łączę AI, automatyzację i dobre wdrożenia, żeby szybciej budować produkty i eliminować powtarzalną pracę.",

        ai: {
            title: "AI",
            description:
                "Wykorzystuję AI jako część codziennego workflow — od analizy problemów i prototypowania po rozwój produktu i pracę z dokumentacją.",
            tags: [
                "AI-assisted development",
                "Prompting",
                "Prototyping",
            ],
        },

        automation: {
            title: "Automation",
            description:
                "Automatyzuję powtarzalne zadania, integracje i przepływy pracy, żeby ograniczyć ręczną pracę i odzyskać czas.",
            tags: [
                "Workflows",
                "APIs",
                "Integrations",
            ],
        },

        implementation: {
            title: "Implementation",
            description:
                "Przekładam pomysły na działające produkty — od pierwszego prototypu przez integrację aż po wdrożenie.",
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
                "Szukam miejsc, w których można uprościć proces, skrócić czas wykonania zadania i poprawić sposób pracy.",
            tags: [
                "Performance",
                "UX",
                "Process optimization",
            ],
        },
    },


    contact: {
        section: "Ostatni Boss",

        titleStart: "Stwórzmy",

        titleMiddle: "Coś",

        titleEnd: "Wyjątkowego.",

        description:
            "Obecnie szukam możliwości rozwoju jako Software Engineer, projektów freelance oraz współpracy. Jeśli masz pomysł, wyzwanie lub po prostu chcesz się skontaktować, rozpocznijmy kolejną misję razem.",

        emailButton: "Wyślij Email",
    },
};

export default pl;