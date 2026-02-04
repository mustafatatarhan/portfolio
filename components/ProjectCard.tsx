// components/ProjectCard.tsx
"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { HiUser, HiOfficeBuilding } from "react-icons/hi";
import { useTranslations } from "next-intl";

function StatusPill({
    status,
    label,
}: {
    status: Project["status"];
    label: string;
}) {
    const base =
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold";

    const dot =
        status.tone === "success"
            ? "bg-emerald-400"
            : status.tone === "warning"
                ? "bg-amber-400"
                : "bg-white/40";

    return (
        <span className={`${base} border-white/10 bg-white/[0.06] text-white`}>
            <span className={`h-2 w-2 rounded-full ${dot}`} />
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
    const base =
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold";

    const Icon = ownership.type === "owner" ? HiUser : HiOfficeBuilding;

    return (
        <span className={`${base} border-white/10 bg-white/[0.04] text-white/80`}>
            <Icon className="h-3.5 w-3.5 opacity-80" />
            {label}
        </span>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const t = useTranslations("projectCard");
    const tGlobal = useTranslations();

    const title = tGlobal(`${project.i18nKey}.title`);
    const category = tGlobal(`${project.i18nKey}.category`);
    const shortDescription = tGlobal(`${project.i18nKey}.shortDescription`);
    const highlights = tGlobal.raw(project.highlightsKey) as string[];

    const statusLabel = tGlobal(project.status.labelKey);
    const ownershipLabel = tGlobal(project.ownership.labelKey);

    return (
        <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/15 hover:bg-white/[0.05]">
            {/* FULL CARD LINK */}
            <Link
                href={`/projects/${project.slug}`}
                aria-label={t("aria.viewDetails", { title })}
                className="absolute inset-0 z-20 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
            />

            {/* CONTENT */}
            <div className="relative z-10 pointer-events-none">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                        {/* Icon */}
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                            <img
                                src={project.icon}
                                alt={t("imageAlt", { title })}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-white/55">
                                {category}
                            </p>

                            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white">
                                {title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/70">
                                {shortDescription}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                                <OwnershipPill ownership={project.ownership} label={ownershipLabel} />
                            </div>
                        </div>
                    </div>

                    <StatusPill status={project.status} label={statusLabel} />
                </div>

                {/* Highlights */}
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                    {highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2">
                            <span className="accent mt-[2px]">✓</span>
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.tech.map((x) => (
                        <span
                            key={x}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                        >
                            {x}
                        </span>
                    ))}

                    <span className="ml-auto inline-flex items-center gap-2 text-sm text-white/70 transition group-hover:text-white">
                        {t("viewDetails")}{" "}
                        <span className="text-white/40 group-hover:text-white/70">→</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
