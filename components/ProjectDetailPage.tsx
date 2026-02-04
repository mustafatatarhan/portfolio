// components/ProjectDetailPage.tsx
"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import type { ProjectDetail } from "@/data/projectDetails";
import {
    HiArrowLeft,
    HiCheck,
    HiExternalLink,
    HiOfficeBuilding,
    HiUser,
} from "react-icons/hi";
import { useTranslations } from "next-intl";

function toneDot(tone: Project["status"]["tone"]) {
    if (tone === "success") return "bg-emerald-400";
    if (tone === "warning") return "bg-amber-400";
    return "bg-white/40";
}

function StatusPill({
    status,
    label,
}: {
    status: Project["status"];
    label: string;
}) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white">
            <span className={`h-2 w-2 rounded-full ${toneDot(status.tone)}`} />
            {label}
        </span>
    );
}

function OwnershipPill({
    ownership,
    label,
}: {
    ownership: Project["ownership"];
    label: string;
}) {
    const Icon = ownership.type === "owner" ? HiUser : HiOfficeBuilding;
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/80">
            <Icon className="h-3.5 w-3.5 opacity-80" />
            {label}
        </span>
    );
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
            {children}
        </span>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-10">
            <h2 className="text-sm font-semibold text-white/80">{title}</h2>
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                {children}
            </div>
        </section>
    );
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 text-sm leading-6 text-white/70">
            {items.map((x) => (
                <li key={x} className="flex gap-2">
                    <HiCheck className="accent mt-[2px] h-4 w-4 shrink-0" />
                    <span>{x}</span>
                </li>
            ))}
        </ul>
    );
}

function ImpactCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold text-white/55">{label}</p>
            <p className="mt-2 text-sm font-semibold text-white/85">{value}</p>
        </div>
    );
}

function PrimaryButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a className="btn-primary inline-flex items-center justify-center" href={href}>
            {children}
        </a>
    );
}

function SecondaryLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a href={href} className="nav-link inline-flex items-center gap-2">
            {children} <span className="text-white/50">→</span>
        </a>
    );
}

function StoreLinks({ project }: { project: Project }) {
    const t = useTranslations("projectDetail");
    const { appStore, playStore, website } = project.links || {};

    if (!appStore && !playStore && !website) return null;

    const btn =
        "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.06]";

    return (
        <div className="flex flex-wrap items-center gap-3">
            {appStore && (
                <a className={btn} href={appStore} target="_blank" rel="noopener noreferrer">
                    {t("storeLinks.appStore")} <HiExternalLink className="h-4 w-4 opacity-70" />
                </a>
            )}
            {playStore && (
                <a className={btn} href={playStore} target="_blank" rel="noopener noreferrer">
                    {t("storeLinks.googlePlay")} <HiExternalLink className="h-4 w-4 opacity-70" />
                </a>
            )}
            {website && (
                <a className={btn} href={website} target="_blank" rel="noopener noreferrer">
                    {t("storeLinks.website")} <HiExternalLink className="h-4 w-4 opacity-70" />
                </a>
            )}
        </div>
    );
}

export default function ProjectDetailPage({
    project,
    detail,
}: {
    project: Project;
    detail: ProjectDetail;
}) {
    const t = useTranslations("projectDetail");
    const tGlobal = useTranslations();

    const title = tGlobal(`${project.i18nKey}.title`);
    const category = tGlobal(`${project.i18nKey}.category`);
    const description = tGlobal(`${project.i18nKey}.description`);
    const problem = tGlobal(`${project.i18nKey}.problem`);
    const solution = tGlobal(`${project.i18nKey}.solution`);
    const outcome = tGlobal(`${project.i18nKey}.outcome`);

    const highlights = tGlobal.raw(project.highlightsKey) as string[];
    const challenges = tGlobal.raw(project.challengesKey) as string[];
    const architecture = tGlobal.raw(project.architectureKey) as string[];

    const whatIDid = tGlobal.raw(detail.whatIDidKey) as string[];
    const impactRole = tGlobal(detail.impact.roleKey);
    const impactStatus = tGlobal(detail.impact.statusKey);
    const impactFocus = tGlobal(detail.impact.focusKey);
    const impactPlatform = tGlobal(detail.impact.platformKey);

    const statusLabel = tGlobal(project.status.labelKey);
    const ownershipLabel = tGlobal(project.ownership.labelKey);

    return (
        <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {/* Back */}
            <div className="mb-6">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
                >
                    <HiArrowLeft className="h-4 w-4" />
                    {t("actions.backToProjects")}
                </Link>
            </div>

            {/* Header */}
            <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        <img
                            src={project.icon}
                            alt={t("imageAlt", { title })}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-white/55">{category}</p>

                        <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white">
                            {title}
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                            {description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <StatusPill status={project.status} label={statusLabel} />
                            <OwnershipPill ownership={project.ownership} label={ownershipLabel} />
                        </div>
                    </div>
                </div>

                {/* Right actions */}
                <div className="flex flex-col items-start gap-6 md:items-end">
                    <PrimaryButton href="/#contact">{t("actions.startProject")}</PrimaryButton>
                    <div className="pt-1">
                        <SecondaryLink href="/#services">{t("actions.viewServices")}</SecondaryLink>
                    </div>
                </div>
            </header>

            {/* Store Links */}
            <div className="mt-7">
                <StoreLinks project={project} />
            </div>

            {/* Impact grid */}
            <section className="mt-10">
                <h2 className="text-sm font-semibold text-white/80">{t("sections.impact")}</h2>
                <div className="mt-3 grid gap-4 md:grid-cols-4">
                    <ImpactCard label={t("impactLabels.role")} value={impactRole} />
                    <ImpactCard label={t("impactLabels.status")} value={impactStatus} />
                    <ImpactCard label={t("impactLabels.focus")} value={impactFocus} />
                    <ImpactCard label={t("impactLabels.platform")} value={impactPlatform} />
                </div>
            </section>

            {/* What I did */}
            <Section title={t("sections.whatIDid")}>
                <Bullets items={whatIDid} />
            </Section>

            {/* Highlights */}
            <Section title={t("sections.highlights")}>
                <Bullets items={highlights} />
            </Section>

            {/* Challenges */}
            <Section title={t("sections.challenges")}>
                <Bullets items={challenges} />
            </Section>

            {/* Architecture */}
            <Section title={t("sections.architectureDelivery")}>
                <Bullets items={architecture} />
            </Section>

            {/* Tech stack */}
            <Section title={t("sections.techStack")}>
                <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((x) => (
                        <Chip key={x}>{x}</Chip>
                    ))}
                </div>
            </Section>

            {/* Problem / Solution / Outcome */}
            <Section title={t("sections.problem")}>
                <p className="text-sm leading-6 text-white/70">{problem}</p>
            </Section>

            <Section title={t("sections.solution")}>
                <p className="text-sm leading-6 text-white/70">{solution}</p>
            </Section>

            <Section title={t("sections.outcome")}>
                <p className="text-sm leading-6 text-white/70">{outcome}</p>
            </Section>
        </main>
    );
}
