// components/ProjectDetailPage.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { ProjectDetail } from "@/data/projectDetails";
import { HiArrowLeft, HiCheck, HiExternalLink, HiOfficeBuilding, HiUser } from "react-icons/hi";

function toneDot(tone: Project["status"]["tone"]) {
    if (tone === "success") return "bg-emerald-400";
    if (tone === "warning") return "bg-amber-400";
    return "bg-white/40";
}

function StatusPill({ status }: { status: Project["status"] }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white">
            <span className={`h-2 w-2 rounded-full ${toneDot(status.tone)}`} />
            {status.label}
        </span>
    );
}

function OwnershipPill({ ownership }: { ownership: Project["ownership"] }) {
    const Icon = ownership.type === "owner" ? HiUser : HiOfficeBuilding;
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/80">
            <Icon className="h-3.5 w-3.5 opacity-80" />
            {ownership.label}
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
            {items.map((t) => (
                <li key={t} className="flex gap-2">
                    <HiCheck className="accent mt-[2px] h-4 w-4 shrink-0" />
                    <span>{t}</span>
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
    const { appStore, playStore, website } = project.links || {};

    if (!appStore && !playStore && !website) return null;

    const btn =
        "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.06]";

    return (
        <div className="flex flex-wrap items-center gap-3">
            {appStore && (
                <a className={btn} href={appStore} target="_blank" rel="noopener noreferrer">
                    App Store <HiExternalLink className="h-4 w-4 opacity-70" />
                </a>
            )}
            {playStore && (
                <a className={btn} href={playStore} target="_blank" rel="noopener noreferrer">
                    Google Play <HiExternalLink className="h-4 w-4 opacity-70" />
                </a>
            )}
            {website && (
                <a className={btn} href={website} target="_blank" rel="noopener noreferrer">
                    Website <HiExternalLink className="h-4 w-4 opacity-70" />
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
    return (
        <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {/* Back */}
            <div className="mb-6">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
                >
                    <HiArrowLeft className="h-4 w-4" />
                    Back to projects
                </Link>
            </div>

            {/* Header */}
            <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                        <img
                            src={project.icon}
                            alt={`${project.title} app icon`}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-white/55">{project.category}</p>
                        <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white">
                            {project.title}
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <StatusPill status={project.status} />
                            <OwnershipPill ownership={project.ownership} />
                        </div>
                    </div>
                </div>

                {/* Right actions */}
                <div className="flex flex-col items-start gap-6 md:items-end">
                    <PrimaryButton href="/#contact">Start a project</PrimaryButton>
                    <div className="pt-1">
                        <SecondaryLink href="/#services">View services</SecondaryLink>
                    </div>
                </div>
            </header>

            {/* Store Links */}
            <div className="mt-7">
                <StoreLinks project={project} />
            </div>

            {/* Impact grid */}
            <section className="mt-10">
                <h2 className="text-sm font-semibold text-white/80">Impact</h2>
                <div className="mt-3 grid gap-4 md:grid-cols-4">
                    <ImpactCard label="Role" value={detail.impact.role} />
                    <ImpactCard label="Status" value={detail.impact.status} />
                    <ImpactCard label="Focus" value={detail.impact.focus} />
                    <ImpactCard label="Platform" value={detail.impact.platform} />
                </div>
            </section>

            {/* What I did */}
            <Section title="What I did">
                <Bullets items={detail.whatIDid} />
            </Section>

            {/* Highlights */}
            <Section title="Highlights">
                <Bullets items={project.highlights} />
            </Section>

            {/* Challenges */}
            <Section title="Challenges">
                <Bullets items={project.challenges} />
            </Section>

            {/* Architecture */}
            <Section title="Architecture & delivery">
                <Bullets items={project.architecture} />
            </Section>

            {/* Tech stack */}
            <Section title="Tech stack">
                <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((t) => (
                        <Chip key={t}>{t}</Chip>
                    ))}
                </div>
            </Section>

            {/* Problem / Solution / Outcome */}
            <Section title="Problem">
                <p className="text-sm leading-6 text-white/70">{project.problem}</p>
            </Section>

            <Section title="Solution">
                <p className="text-sm leading-6 text-white/70">{project.solution}</p>
            </Section>

            <Section title="Outcome">
                <p className="text-sm leading-6 text-white/70">{project.outcome}</p>
            </Section>
        </main>
    );
}