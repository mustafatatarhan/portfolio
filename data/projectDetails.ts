// data/projectDetails.ts
import { projects } from "./projects";

export type ProjectDetail = {
    whatIDid: string[];
    impact: {
        role: string;
        status: string;
        focus: string;
        platform: string;
    };
};

export function getProjectDetail(slug: string): ProjectDetail {
    const p = projects.find((x) => x.slug === slug);

    // Reasonable defaults (never break rendering)
    const isOwner = p?.ownership.type === "owner";
    const role = isOwner ? "End-to-end ownership" : "Mobile + backend support";
    const platform =
        p?.tech.includes("iOS") ? "iOS" : p?.tech.includes("Android") ? "Android" : "iOS / Android";

    return {
        whatIDid: isOwner
            ? [
                "Owned delivery end-to-end: product direction, Flutter implementation, backend integrations, and store-ready execution.",
                "Designed production-grade architecture for speed, scalability, and clean iteration cycles.",
                "Built subscription + analytics/release workflows to support ongoing growth post-launch.",
            ]
            : [
                "Built and refined key mobile flows with production-grade UX and reliability.",
                "Supported backend integration points where needed to scale generation/processing workflows.",
                "Helped maintain stable releases with iteration-friendly structure and clean UI patterns.",
            ],

        impact: {
            role,
            status:
                p?.status.label === "Live"
                    ? "Live on App Store"
                    : p?.status.label || "In review",
            focus:
                p?.category ||
                "Production-ready mobile UX with scalable integration points",
            platform,
        },
    };
}