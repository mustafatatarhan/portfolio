// data/projectDetails.ts
import { projects } from "./projects";

export type ProjectDetail = {
    whatIDidKey: string; // "projectDetails.owner.whatIDid" gibi
    impact: {
        roleKey: string;
        statusKey: string; // live/inReview
        focusKey: string;  // project category -> project i18nKey üzerinden
        platformKey: string; // computed but key-based
    };
};

export function getProjectDetail(slug: string): ProjectDetail {
    const p = projects.find((x) => x.slug === slug);

    const isOwner = p?.ownership.type === "owner";
    const platformKey =
        p?.tech.includes("iOS")
            ? "platform.ios"
            : p?.tech.includes("Android")
                ? "platform.android"
                : "platform.iosAndroid";

    return {
        whatIDidKey: isOwner ? "projectDetails.owner.whatIDid" : "projectDetails.contributor.whatIDid",
        impact: {
            roleKey: isOwner ? "projectDetails.owner.role" : "projectDetails.contributor.role",
            statusKey: p?.status.labelKey ?? "status.inReview",
            focusKey: p?.i18nKey ? `${p.i18nKey}.category` : "projects.fallbackFocus",
            platformKey,
        },
    };
}