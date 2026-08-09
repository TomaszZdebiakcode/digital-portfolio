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
        section: "Boss Battles",

        title: "Każdy boss pokonany.",

        description:
            "Każdy projekt wyprowadził mnie poza strefę komfortu. Każda walka z bossem odblokowała nowe umiejętności, które uczyniły mnie lepszym inżynierem.",

        projects: [
            {
                boss: "Boss #01",
                status: "Pokonany",

                name: "Developer Journey",

                description:
                    "Portfolio dokumentujące moją drogę od studenta Game Software Engineering do Software Engineera poprzez tworzenie prawdziwych projektów.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Zdobyte Umiejętności",

                battleButton: "Wejdź do walki",

                hoverButton: "Gotowy?",

                sourceButton: "Kod źródłowy",

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
                status: "Pokonany",

                name: "Slimter",

                description:
                    "Strona WordPress poświęcona edukacji na temat otyłości, pomagająca użytkownikom porównywać metody leczenia w dostępny i responsywny sposób.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Zdobyte Umiejętności",

                battleButton: "Wejdź do walki",

                hoverButton: "Gotowy?",

                sourceButton: "Kod źródłowy",

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
                status: "Pokonany",

                name: "Warehouse Pathfinder",

                description:
                    "Projekt w Pythonie implementujący algorytmy A* oraz BFS do wizualizacji inteligentnej nawigacji robota magazynowego.",

                difficulty: 3,

                image: "/images/warehouse.webp",

                imagePosition: "object-[33%_center]",

                rewardsTitle: "Zdobyte Umiejętności",

                battleButton: "Wejdź do walki",

                hoverButton: "Gotowy?",

                sourceButton: "Kod źródłowy",

                href: "/boss/warehouse-pathfinder",

                github: "#",

                skills: [
                    { icon: "python", label: "Python" },
                    { icon: "astar", label: "Algorytm A*" },
                    { icon: "bfs", label: "BFS" },
                    { icon: "testing", label: "Testy jednostkowe" },
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

    achievements: {
        section: "Osiągnięcia",

        title: "Postęp Misji.",

        description:
            "Każdy projekt, każde wyzwanie i każda zdobyta lekcja przybliżają mnie do osiągnięcia mojego celu.",

        unlocked: "Odblokowane",

        progress: "Aktualna Misja",

        locked: "Zablokowane",

        items: [
            {
                title: "Pierwsza aplikacja React",

                description:
                    "Stworzyłem swój pierwszy prawdziwy projekt w React.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Pierwsza strona WordPress",

                description:
                    "Zaprojektowałem i uruchomiłem stronę Slimter.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Portfolio w Next.js",

                description:
                    "Stworzyłem portfolio Developer Journey.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Pierwsza strona dla klienta",

                description:
                    "Stworzyć i dostarczyć pierwszą stronę internetową dla płacącego klienta.",

                status: "unlocked",

                icon: "Briefcase",
            },

            {
                title: "Pierwsza praca jako Software Engineer",

                description:
                    "Zdobyć pierwszą pracę jako Software Engineer.",

                status: "progress",

                icon: "Briefcase",
            },

            {
                title: "Uruchomienie pierwszego SaaS",

                description:
                    "Stworzyć i opublikować własny produkt software'owy.",

                status: "locked",

                icon: "Rocket",
            },

            {
                title: "Założenie własnej firmy",

                description:
                    "Stworzyć firmę software'ową i pomagać przedsiębiorstwom się rozwijać.",

                status: "locked",

                icon: "Building2",
            },

            {
                title: "100 zadowolonych klientów",

                description:
                    "Dostarczyć wartość ponad 100 zadowolonym klientom.",

                status: "locked",

                icon: "Users",
            },
        ],
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