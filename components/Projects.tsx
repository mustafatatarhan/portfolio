import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        Projects & Professional Work
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        A selection of products I’ve delivered across Flutter, backend integrations,
                        and native iOS/Android work — optimized for production quality, performance,
                        and store-ready execution.
                    </p>
                </div>

                <a
                    href="#contact"
                    className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80
                     hover:bg-white/[0.06] md:inline-block"
                >
                    Start a project
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