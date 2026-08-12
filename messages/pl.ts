const pl = {
    navbar: {
        about: "O MNIE",
        inventory: "ARSENAŁ",
        projects: "PROJEKTY",
        contact: "POROZMAWIAJMY",
    },

    hero: {
        eyebrow: "CZEGO SZUKASZ?",
        titleLine1: "Product",
        titleLine2: "Engineer",

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
            "Tutaj dokumentuję ten proces. Każdy projekt, każde wyzwanie i każda misja przybliżają mnie do inżyniera, którym chcę być.",
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

                name: "Slimter",

                description:
                    "Strona internetowa oparta na WordPressie, poświęcona edukacji na temat otyłości i porównywaniu metod leczenia, z naciskiem na dostępność i responsywność.",

                difficulty: 5,

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
            {
                boss: "Boss #03",
                status: "Ukończony",

                name: "Engineer Portfolio",

                description:
                    "Moje cyfrowe portfolio prezentujące projekty, umiejętności techniczne oraz rozwój jako inżyniera oprogramowania.",

                difficulty: 5,

                image: "/images/portfolio-home.webp",

                imagePosition: "object-[30%_center]",

                rewardsTitle: "Zdobyte umiejętności",

                battleButton: "Zobacz projekt",

                hoverButton: "Gotowy?",

                sourceButton: "Kod źródłowy",

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
                        label: "Responsywny UI",
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

    slimterStory: {
        back: "Wróć do projektów",

        eyebrow: "Historia projektu",
        status: "Ukończony",

        title: "Slimter",
        intro:
            "Strona WordPress skupiona na przedstawianiu informacji o otyłości i metodach leczenia w sposób przejrzysty, uporządkowany i łatwy do zrozumienia.",

        visitWebsite: "Odwiedź stronę",

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

        challenge: {
            eyebrow: "Wyzwanie",
            title: "Przekształcenie złożonych informacji w przejrzyste doświadczenie.",
            description:
                "Slimter został zaprojektowany jako platforma prezentująca informacje edukacyjne dotyczące otyłości i metod leczenia w uporządkowany i przystępny sposób. Projekt łączy rozbudowane treści z interaktywnymi narzędziami pozwalającymi użytkownikom analizować informacje i porównywać różne możliwości.",
            points: [
                "Przejrzysta struktura informacji i nawigacja",
                "Responsywny interfejs na desktopie, tablecie i mobile",
                "Interaktywne narzędzia do porównywania i obliczeń",
                "Dostępny interfejs i czytelna prezentacja treści",
            ],
        },

        gallery: {
            eyebrow: "Strona internetowa",
            title: "Od informacji do interakcji.",
            description:
                "Projekt łączy treści edukacyjne, uporządkowaną nawigację i funkcjonalności interaktywne w spójne doświadczenie użytkownika.",

            items: [
                {
                    title: "Strona główna",
                    description:
                        "Strona główna przedstawia projekt i prowadzi użytkownika do treści edukacyjnych oraz porównania metod leczenia.",
                },
                {
                    title: "Porównanie metod leczenia",
                    description:
                        "Interaktywna sekcja pozwalająca łatwiej analizować i porównywać różne metody redukcji masy ciała.",
                },
                {
                    title: "Kalkulator kosztów",
                    description:
                        "Kalkulator umożliwiający analizowanie szacunkowych kosztów i porównywanie różnych scenariuszy.",
                },
                {
                    title: "Wpływ na zdrowie",
                    description:
                        "Dedykowana sekcja prezentująca informacje dotyczące wpływu otyłości na zdrowie.",
                },
            ],
        },

        work: {
            eyebrow: "Mój wkład",
            title: "Nad czym pracowałem.",
            description:
                "Projekt łączył implementację frontendu, strukturę treści oraz funkcjonalności interaktywne w responsywną stronę WordPress.",
            items: [
                "Struktura strony i układ poszczególnych podstron",
                "Implementacja responsywnego interfejsu",
                "Interaktywne narzędzia do porównywania",
                "Kalkulator kosztów",
                "Nawigacja i doświadczenie użytkownika",
                "Poprawa dostępności",
                "Interakcje JavaScript",
                "Rozwój strony w WordPress",
            ],
        },

        next: {
            eyebrow: "Projekt ukończony",
            title: "Zobacz projekt na żywo.",
            description:
                "Odwiedź Slimter i zobacz kompletną wersję projektu w jego oryginalnym środowisku.",
        },

    },

    developerCard: {
        availability: "Dostępny",
    },

    engineerPortfolioStory: {
        back: "Wróć do projektów",

        eyebrow: "BOSS #03",
        status: "✓ Pokonany",

        title: "Engineer Portfolio",

        intro:
            "Moje cyfrowe portfolio prezentujące projekty, umiejętności techniczne oraz rozwój jako inżyniera oprogramowania.",

        visitPortfolio: "Odwiedź portfolio",

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
                label: "Responsive UI",
                icon: "responsive",
            },
        ],

        about: {
            eyebrow: "O MNIE",
            title: "Kim jestem?",

            paragraphs: [
                "Jestem studentem trzeciego roku inżynierii oprogramowania gier. Rozwijam swoje umiejętności programistyczne zarówno poprzez studia, jak i projekty, skupiając się na tworzeniu praktycznych i dopracowanych produktów.",

                "Na co dzień prowadzę również własny biznes ogrodniczy, który nauczył mnie odpowiedzialności, organizacji pracy i podejmowania decyzji w realnych warunkach biznesowych.",

                "Obecnie pracuję nad dwoma projektami, które w najbliższym czasie ujrzą światło dzienne. Engineer Portfolio jest miejscem, w którym dokumentuję ten proces — od pierwszej koncepcji aż po gotowy produkt.",
            ],

            points: [
                "3. rok inżynierii oprogramowania gier",
                "Własny biznes ogrodniczy",
                "Dwa projekty w trakcie rozwoju",
                "Nauka poprzez praktyczne tworzenie",
            ],
        },

        gallery: {
            eyebrow: "PORTFOLIO",
            title: "Od koncepcji do produktu.",

            description:
                "Portfolio zostało zaprojektowane jako miejsce prezentujące moje doświadczenie, projekty oraz rozwój jako inżyniera oprogramowania.",

            items: [
                {
                    title: "Strona główna",
                    description:
                        "Pierwszy kontakt z portfolio — minimalistyczny interfejs skupiony na mnie, moich projektach i tym, co tworzę.",
                },
                {
                    title: "O mnie",
                    description:
                        "Sekcja przedstawiająca moje podejście do tworzenia oprogramowania oraz drogę, którą obecnie podążam.",
                },
                {
                    title: "Projekty",
                    description:
                        "Miejsce, w którym prezentuję projekty, nad którymi pracuję oraz technologie wykorzystywane podczas ich tworzenia.",
                },
                {
                    title: "Kontakt",
                    description:
                        "Prosty sposób na nawiązanie kontaktu i rozpoczęcie rozmowy.",
                },
            ],
        },

        work: {
            eyebrow: "CO TWORZĘ",
            title: "Więcej niż kod.",

            description:
                "Interesuje mnie cały proces tworzenia produktu — od pomysłu i projektu, przez implementację, aż po gotowe rozwiązanie.",

            items: [
                "Nowoczesne aplikacje webowe",
                "Interfejsy użytkownika",
                "Systemy i logika aplikacji",
                "Responsywne doświadczenia",
                "Projekty rozwijane od podstaw",
                "Eksperymentowanie z nowymi technologiami",
            ],
        },

        next: {
            eyebrow: "CO DALEJ?",
            title: "To dopiero początek.",

            description:
                "Portfolio będzie rozwijane razem ze mną — kolejne projekty, nowe doświadczenia i następne kroki pojawią się tutaj wraz z moim rozwojem.",
        },
    },

    footer: {
        eyebrow: "BUILD CREATE DEFEAT",
        lineOne: "Wciąż tworzę. Wciąż się uczę. Wciąż się rozwijam",
        lineTwo: "Kolejny poziom zawsze jest przede mną",
        backToTop: "Wróć na górę",
        copyright: "Wszystkie prawa zastrzeżone",
        designedBy: "Designed & Developed by",
    },
};



export default pl;