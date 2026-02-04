// data/projects.ts

export type ProjectStatus = "in_review" | "published";
export type OwnershipType = "owner" | "contributor";

export type ProjectOwnership = {
    type: OwnershipType;
    label: string; // UI'daki pill text
};

export type ProjectLinks = {
    appStore?: string;
    playStore?: string;
    website?: string;
};

export type Project = {
    slug: string;
    title: string;
    category: string; // küçük üst başlık (card)

    status: {
        label: string; // "In review", "Live" gibi
        tone: "success" | "warning" | "neutral";
    };

    ownership: ProjectOwnership;

    shortDescription: string; // card summary
    description: string; // detail page intro

    highlights: string[]; // card içi maddeler
    tech: string[]; // chipler
    icon: string; // public/images/...

    links: ProjectLinks;

    // Detail page sections
    problem: string;
    solution: string;
    outcome: string;

    // ✅ NEW
    challenges: string[];
    architecture: string[];
};

export const projects: Project[] = [
    // 1) BabyFoods (owner)
    {
        slug: "babyfoods",
        title: "BabyFoods",
        category: "Baby nutrition & meal planning",
        status: { label: "In review", tone: "warning" },
        ownership: { type: "owner", label: "Owned & built end-to-end" },

        shortDescription:
            "A baby nutrition and meal-planning app with personalized recommendations and a subscription model — designed for fast daily use.",
        description:
            "BabyFoods helps parents plan meals and snacks with age-appropriate guidance, personalized suggestions, and a subscription-driven experience.",

        highlights: [
            "Subscription-ready flows (RevenueCat) with paywall + entitlements",
            "Performance-first UX for quick daily logging and browsing",
            "Scalable backend-ready structure for personalized content",
        ],
        tech: ["Flutter", "Firebase", "RevenueCat"],
        icon: "/images/babyfoods_app_icon.png",

        links: {
            // appStore: "",
            // playStore: "",
        },

        problem:
            "Parents need a simple, reliable way to plan baby meals and snacks without digging through scattered sources — especially on busy days.",
        solution:
            "A clean, mobile-first product with a subscription model, structured content, and an architecture designed for scalable personalization.",
        outcome:
            "Store-ready product prepared for review with a strong foundation for future growth: richer recommendations, analytics, and iterative releases.",

        challenges: [
            "Designing for busy, real-life usage: fast flows, minimal friction, clear information hierarchy.",
            "Keeping guidance trustworthy while staying simple and not overwhelming new parents.",
            "Building subscription flows that feel premium (paywall, entitlements, restore) without hurting conversion.",
            "Preparing an architecture that can scale to personalization, analytics, and content iteration over time.",
        ],
        architecture: [
            "Feature-first structure with clear boundaries for content, tracking, and subscription modules.",
            "Typed models + predictable state handling to keep UX stable under frequent iteration.",
            "RevenueCat integration with clean entitlement checks and restore flows for production readiness.",
            "Analytics-ready event points and release-friendly structure for fast iterations after launch.",
        ],
    },

    // 2) Cleanly (owner)
    {
        slug: "cleanly",
        title: "Cleanly",
        category: "Storage cleaner & duplicate detection",
        status: { label: "In review", tone: "warning" },
        ownership: { type: "owner", label: "Owned & built end-to-end" },

        shortDescription:
            "A storage cleaner that detects duplicate photos/videos with native iOS/Android integrations and performance-first processing.",
        description:
            "Cleanly focuses on real-world device libraries: fast scanning, reliable grouping, and safe cleanup flows supported by native capabilities.",

        highlights: [
            "Native media pipeline (iOS/Android) for scanning & grouping",
            "Performance-first processing for large libraries (isolates/native)",
            "Export / cleanup flows designed for everyday usage",
        ],
        tech: ["Flutter", "Firebase", "Swift", "Kotlin"],
        icon: "/images/cleanly_app_icon.png",

        links: {
            // appStore: "",
            // playStore: "",
        },

        problem:
            "Users run out of storage because duplicate or low-value media silently accumulates — but deleting must be safe and fast.",
        solution:
            "A performance-focused scanning and grouping pipeline with native integrations and user-friendly cleanup flows.",
        outcome:
            "Production-ready build prepared for store review, built to handle large libraries with a scalable architecture for future features.",

        challenges: [
            "Handling very large media libraries without freezing the UI or draining battery.",
            "Grouping duplicates reliably while supporting edge cases (bursts, edits, similar videos).",
            "Designing safe deletion/cleanup flows that users can trust (undo, confirmations, preview).",
            "Bridging native media APIs with Flutter while keeping performance and maintainability high.",
        ],
        architecture: [
            "Native iOS/Android media access layer + Flutter orchestration for predictable performance.",
            "Background/isolate processing for hashing/grouping and progress-driven UI updates.",
            "Safe operations pipeline (preview → select → confirm → execute) with guardrails and telemetry points.",
            "Modular code structure designed for adding new scanners (screenshots, large files, duplicates) without rewrites.",
        ],
    },

    // 3) HomeGPT (contributor)
    {
        slug: "homegpt",
        title: "AI Interior Design: HomeGPT",
        category: "AI home design & room inspiration",
        status: { label: "Live", tone: "success" },
        ownership: { type: "contributor", label: "Built with company team" },

        shortDescription:
            "AI-powered room design concepts from a photo — focused on fast generation, clean UX, and production reliability.",
        description:
            "HomeGPT enables users to explore interior design directions quickly by generating room concepts from a single photo.",

        highlights: [
            "Mobile feature development with product-grade UX",
            "Backend-ready integration points for scalable generation flows",
            "Production-quality architecture and iteration-friendly structure",
        ],
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/homegpt_app_icon.png",

        links: {
            appStore:
                "https://apps.apple.com/hr/app/ai-interior-design-homegpt/id6740871473",
        },

        problem:
            "People want quick, visual interior inspiration but traditional design tools are slow and complex for casual users.",
        solution:
            "A photo-first flow that generates design directions quickly with a clean mobile experience and scalable integration points.",
        outcome:
            "Live on the App Store, optimized for fast exploration and future expansion of styles, categories, and personalization.",

        challenges: [
            "Keeping generation flows fast and reliable under variable backend latency.",
            "Designing a photo-first UX that feels simple while still guiding users to better results.",
            "Handling edge cases (large images, slow networks, retries) without breaking the user journey.",
            "Building a structure that supports rapid iteration of prompts, styles, and UI experiments.",
        ],
        architecture: [
            "Feature-based modular structure (generation, history, paywall, settings) for clean ownership and iteration.",
            "Typed API layer with request/response models and predictable error handling (timeouts, retries, fallbacks).",
            "Caching + optimistic UI for smoother perceived performance across browse/regenerate flows.",
            "Analytics-ready event naming and funnel points to support product decisions without UI clutter.",
        ],
    },

    // 4) Inked (contributor)
    {
        slug: "inked",
        title: "Tattoo AI Design: Inked",
        category: "AI tattoo ideas & design generation",
        status: { label: "Live", tone: "success" },
        ownership: { type: "contributor", label: "Built with company team" },

        shortDescription:
            "AI tattoo design generator focused on rapid iteration, style exploration, and a smooth mobile purchase journey.",
        description:
            "Inked helps users generate and explore tattoo concepts across styles with a fast, mobile-first workflow.",

        highlights: [
            "Mobile flow development for high-frequency generation use cases",
            "Backend integration support when needed for scalable generation",
            "Quality-first UI details and stable release behavior",
        ],
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/inked_app_icon.png",

        links: {
            appStore:
                "https://apps.apple.com/hr/app/tattoo-ai-design-inked/id6739467683",
        },

        problem:
            "Users struggle to translate an idea into a clean tattoo concept and want quick variations across styles.",
        solution:
            "A guided generation flow with fast iteration and a mobile UX optimized for browsing, saving, and refining designs.",
        outcome:
            "Live on the App Store with a foundation designed for scalable content generation and future feature growth.",

        challenges: [
            "Supporting high-frequency creation loops (generate → refine → save) without UI fatigue.",
            "Balancing quality controls (style, constraints) with a workflow that stays ‘one-tap simple’.",
            "Preventing drop-offs by making credits/subscription moments feel natural and non-blocking.",
            "Keeping the app stable while experimenting with new styles, prompts, and flows.",
        ],
        architecture: [
            "State-driven UI for generation pipelines (idle → generating → result → refine) with clear transitions.",
            "Reusable UI components for style selectors, prompt helpers, and results grid to keep consistency at speed.",
            "Network abstraction for generation endpoints + consistent error surfaces (empty states, retry patterns).",
            "Scalable assets pipeline for storing favorites/history while remaining backend-ready for expansion.",
        ],
    },

    // 5) Vido (contributor)
    {
        slug: "vido",
        title: "Video AI: Vido",
        category: "AI video generation",
        status: { label: "Live", tone: "success" },
        ownership: { type: "contributor", label: "Built with company team" },

        shortDescription:
            "AI video generation from text/images with a mobile UX focused on speed, clarity, and reliable outputs.",
        description:
            "Vido focuses on making AI video generation approachable on mobile: simple prompts, quick results, and share-ready exports.",

        highlights: [
            "Mobile UX for creation → preview → export/share pipeline",
            "Backend-ready integration approach for scalable processing",
            "Production stability and iteration-friendly structure",
        ],
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/vido_app_icon.png",

        links: {
            appStore: "https://apps.apple.com/hr/app/video-ai-vido/id6739467611",
        },

        problem:
            "Creating short-form video content is time-consuming; users want a fast way to generate clips for social media.",
        solution:
            "A streamlined mobile experience that turns prompts into videos quickly, designed for reliability and future scalability.",
        outcome:
            "Live on the App Store with a structure ready for growth in templates, styles, and export options.",

        challenges: [
            "Communicating progress and expectations in long-running generation tasks (without feeling stuck).",
            "Designing a creation → preview → export pipeline that remains clear on mobile.",
            "Handling partial failures (generation succeeded but export failed) with graceful recovery.",
            "Keeping perceived performance high despite heavy backend workloads.",
        ],
        architecture: [
            "Async job-style flow modeled as states (queued → processing → preview → export) with deterministic UI.",
            "Resilient polling / status refresh strategy with cancel + retry handling.",
            "Clean separation of concerns: creation inputs, job tracking, preview player, export/share utilities.",
            "Guardrails for reliability: timeouts, backoff, and user-friendly error copy for each pipeline step.",
        ],
    },

    // 6) LogoHub (contributor)
    {
        slug: "logohub",
        title: "AI Logo Maker: LogoHub",
        category: "AI logo generation & brand assets",
        status: { label: "Live", tone: "success" },
        ownership: { type: "contributor", label: "Built with company team" },

        shortDescription:
            "An AI logo maker that generates brand-ready logos quickly with a clean mobile experience and scalable architecture.",
        description:
            "LogoHub helps users create professional-looking logos in seconds with a simple, mobile-first workflow.",

        highlights: [
            "Mobile feature development and UX polish for creation flows",
            "Backend support when needed for generation + asset delivery",
            "Architecture designed for fast iteration and stable releases",
        ],
        tech: ["Flutter", "Mobile", "Backend (as needed)"],
        icon: "/images/logohub_app_icon.png",

        links: {
            appStore:
                "https://apps.apple.com/hr/app/ai-logo-maker-logohub/id6740811905",
        },

        problem:
            "Founders and small teams need fast brand identity assets without the cost and time of a full design process.",
        solution:
            "A lightweight mobile experience that generates logo options quickly, with a foundation built for scale and iteration.",
        outcome:
            "Live on the App Store and positioned for expanding templates, exports, and brand asset generation.",

        challenges: [
            "Helping users get ‘good enough’ results quickly while still enabling meaningful refinement.",
            "Making export and asset selection feel premium (formats, variants) without overwhelming the UI.",
            "Keeping generation + browsing snappy across many iterations and logo variations.",
            "Supporting future growth: templates, brand kits, and multi-asset delivery.",
        ],
        architecture: [
            "Step-based flow (brief → generate → shortlist → refine → export) that stays intuitive on mobile.",
            "Componentized preview system for variants (grid, detail, compare) to keep UI consistent and fast.",
            "Backend-ready data shapes for assets (logo variants, palettes, exports) and future brand-kit expansion.",
            "Analytics + experimentation-friendly structure (A/B-ready screens and measured funnel checkpoints).",
        ],
    },
];