const en = {
    navbar: {
        about: "ABOUT",
        inventory: "ARSENAL",
        projects: "PROJECTS",
        contact: "LET'S TALK",
    },

    hero: {
        eyebrow: "ARE YOU LOOKING FOR",
        titleLine1: "Digital",
        titleLine2: "Creator",

        description1: "Crafting",
        descriptionHighlight1: "products",
        description2: "that people",
        descriptionHighlight2: "remember.",

        button: "Contact me on LinkedIn",

        story: "Read My Story",
    },

    about: {
        section: "About",

        title: "Why I Create.",

        paragraph1:
            "I don't want to build a career around doing the minimum.",

        paragraph2:
            "I want something bigger than a traditional job. I want to build products, create systems and solve problems that improve people's lives.",

        paragraph3:
            "Developer Journey is where I document that process. Every project, every challenge and every quest moves me one step closer to becoming the engineer I want to be.",
    },

    missionStatus: {
        title: "Mission Status",

        currentObjective: "Current Objective",
        currentObjectiveValue: "Become a Software Engineer.",

        sideQuest: "Side Quest",
        sideQuestValue: "Help people create beautiful gardens.",

        nextExpansion: "Next Expansion",
        nextExpansionValue: "Build products that make life easier.",
    },

    skillTree: {
        section: "Values",

        title: "How I Think.",

        cards: [
            {
                title: "Build Products",

                description:
                    "I enjoy turning ideas into products that solve real problems and create value.",
            },

            {
                title: "Think in Systems",

                description:
                    "I prefer building scalable systems instead of repeatedly solving the same problems.",
            },

            {
                title: "Keep Growing",

                description:
                    "Every project is another opportunity to learn, improve and become a better engineer.",
            },
        ],
    },

    bossBattles: {
        section: "Boss Battles",

        title: "Every Boss Defeated.",

        description:
            "Every project pushed me beyond my comfort zone. Every boss battle unlocked new skills that made me a better engineer.",

        projects: [
            {
                boss: "Boss #01",
                status: "Defeated",

                name: "TomekGardens",

                description:
                    "My own gardening business and website, built with React to showcase my services, present my work and make it easy for customers to get in touch.",

                difficulty: 5,

                image: "/images/tomekgardens.webp",

                imagePosition: "object-[center_70%] lg:object-[center_50%]",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Visit Website",

                hoverButton: "Explore?",

                sourceButton: "Visit TomekGardens",

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
                        label: "Entrepreneurship",
                    },
                    {
                        icon: "advertising",
                        label: "Advertising",
                    },
                    {
                        icon: "gardening",
                        label: "Gardening",
                    },
                    {
                        icon: "product",
                        label: "Product Creation",
                    },
                ],
            },

            {
                boss: "Boss #02",
                status: "Defeated",

                name: "Digital Portfolio",

                description:
                    "My personal digital portfolio showcasing my projects, technical skills and journey as a software engineer.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Enter Battle",

                hoverButton: "Ready?",

                sourceButton: "Source Code",

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
                        label: "Responsive UI",
                    },
                ],
            },

            {
                boss: "Boss #03",
                status: "Defeated",

                name: "Slimter",

                description:
                    "A WordPress website focused on obesity education, helping users compare treatment methods through an accessible and responsive experience.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Visit Website",
                hoverButton: "Explore?",

                historyButton: "Read Story",
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
                        label: "Accessibility",
                    },
                ],
            },
        ],
    },

    inventory: {
        section: "ARSENAL",
        title: "Tools I turn into an advantage.",
        description:
            "I combine AI, automation and solid implementation to build products faster and eliminate repetitive work.",

        ai: {
            title: "AI",
            description:
                "I use AI as part of my everyday workflow — from problem analysis and prototyping to product development and documentation.",
            tags: [
                "AI-assisted development",
                "Prompting",
                "Prototyping",
            ],
        },

        automation: {
            title: "Automation",
            description:
                "I automate repetitive tasks, integrations and workflows to reduce manual work and save time.",
            tags: [
                "Workflows",
                "APIs",
                "Integrations",
            ],
        },

        implementation: {
            title: "Implementation",
            description:
                "I turn ideas into working products — from the first prototype through integration and deployment.",
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
                "I look for ways to simplify processes, reduce execution time and improve how work gets done.",
            tags: [
                "Performance",
                "UX",
                "Process optimization",
            ],
        },
    },



    contact: {
        section: "Final Boss",

        titleStart: "Let's Build",

        titleMiddle: "Something",

        titleEnd: "Great.",

        description:
            "I'm currently looking for Software Engineering opportunities, freelance projects and collaborations. If you have an idea, a challenge or just want to connect, let's start the next quest together.",

        emailButton: "Send Email",
    },
};

export default en;