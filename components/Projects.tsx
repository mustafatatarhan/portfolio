// components/Projects.tsx
"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("projects");

    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        {t("section.title")}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        {t("section.description")}
                    </p>
                </div>

                <a
                    href="#contact"
                    className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.06] md:inline-block"
                >
                    {t("section.cta")}
                </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </section>
    );
}