// data/projects.ts

export type ProjectStatusTone = "success" | "warning" | "neutral";
export type OwnershipType = "owner" | "contributor";

export type ProjectLinks = {
    appStore?: string;
    playStore?: string;
    website?: string;
};

export type Project = {
    slug: string;

    // translation root key for this project
    i18nKey: string;

    status: {
        labelKey: string; // e.g. "status.live"
        tone: ProjectStatusTone;
    };

    ownership: {
        type: OwnershipType;
        labelKey: string; // e.g. "ownership.owner"
    };

    tech: string[];
    icon: string;
    links: ProjectLinks;

    // keep these arrays as keys (resolved in UI)
    highlightsKey: string;   // e.g. "projects.items.cleanly.highlights"
    challengesKey: string;   // e.g. "projects.items.cleanly.challenges"
    architectureKey: string; // e.g. "projects.items.cleanly.architecture"
};

export const projects: Project[] = [
    {
        slug: "babyfoods",
        i18nKey: "projects.items.babyfoods",
        status: { labelKey: "status.inReview", tone: "warning" },
        ownership: { type: "owner", labelKey: "ownership.owner" },
        tech: ["Flutter", "Firebase", "RevenueCat"],
        icon: "/images/babyfoods_app_icon.png",
        links: {},
        highlightsKey: "projects.items.babyfoods.highlights",
        challengesKey: "projects.items.babyfoods.challenges",
        architectureKey: "projects.items.babyfoods.architecture",
    },
    {
        slug: "cleanly",
        i18nKey: "projects.items.cleanly",
        status: { labelKey: "status.inReview", tone: "warning" },
        ownership: { type: "owner", labelKey: "ownership.owner" },
        tech: ["Flutter", "Firebase", "Swift", "Kotlin"],
        icon: "/images/cleanly_app_icon.png",
        links: {},
        highlightsKey: "projects.items.cleanly.highlights",
        challengesKey: "projects.items.cleanly.challenges",
        architectureKey: "projects.items.cleanly.architecture",
    },
    {
        slug: "homegpt",
        i18nKey: "projects.items.homegpt",
        status: { labelKey: "status.live", tone: "success" },
        ownership: { type: "contributor", labelKey: "ownership.contributor" },
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/homegpt_app_icon.png",
        links: { appStore: "https://apps.apple.com/hr/app/ai-interior-design-homegpt/id6740871473" },
        highlightsKey: "projects.items.homegpt.highlights",
        challengesKey: "projects.items.homegpt.challenges",
        architectureKey: "projects.items.homegpt.architecture",
    },
    {
        slug: "inked",
        i18nKey: "projects.items.inked",
        status: { labelKey: "status.live", tone: "success" },
        ownership: { type: "contributor", labelKey: "ownership.contributor" },
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/inked_app_icon.png",
        links: { appStore: "https://apps.apple.com/hr/app/tattoo-ai-design-inked/id6739467683" },
        highlightsKey: "projects.items.inked.highlights",
        challengesKey: "projects.items.inked.challenges",
        architectureKey: "projects.items.inked.architecture",
    },
    {
        slug: "vido",
        i18nKey: "projects.items.vido",
        status: { labelKey: "status.live", tone: "success" },
        ownership: { type: "contributor", labelKey: "ownership.contributor" },
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/vido_app_icon.png",
        links: { appStore: "https://apps.apple.com/hr/app/video-ai-vido/id6739467611" },
        highlightsKey: "projects.items.vido.highlights",
        challengesKey: "projects.items.vido.challenges",
        architectureKey: "projects.items.vido.architecture",
    },
    {
        slug: "logohub",
        i18nKey: "projects.items.logohub",
        status: { labelKey: "status.live", tone: "success" },
        ownership: { type: "contributor", labelKey: "ownership.contributor" },
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/logohub_app_icon.png",
        links: { appStore: "https://apps.apple.com/hr/app/ai-logo-maker-logohub/id6740811905" },
        highlightsKey: "projects.items.logohub.highlights",
        challengesKey: "projects.items.logohub.challenges",
        architectureKey: "projects.items.logohub.architecture",
    },
];