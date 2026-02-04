import ProcessStep from "@/components/ProcessStep";

export default function Process() {
    return (
        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        Process
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        A simple, predictable workflow — designed to reduce risk and ship
                        production-ready mobile apps. You’ll always know what’s happening,
                        what’s next, and what you’re getting.
                    </p>
                </div>

                <a
                    href="#contact"
                    className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80
                     hover:bg-white/[0.06] md:inline-block"
                >
                    Discuss your project
                </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ProcessStep
                    index={1}
                    title="Discovery & Scope"
                    description="We align on the goal, constraints, and what “done” looks like. I turn it into a clear scope and realistic milestones."
                    deliverables={[
                        "Brief + requirements clarification",
                        "Milestones, timeline, and risk notes",
                        "Project plan with weekly checkpoints",
                    ]}
                />

                <ProcessStep
                    index={2}
                    title="Architecture & UX Plan"
                    description="I define the technical foundation and UX flows before deep implementation, so the build scales cleanly."
                    deliverables={[
                        "High-level architecture (Flutter + backend)",
                        "Core UX flows & navigation plan",
                        "Data model + integration plan (APIs/Firestore/etc.)",
                    ]}
                />

                <ProcessStep
                    index={3}
                    title="Build & Iterate"
                    description="Fast iteration with production discipline: clean structure, performance-first choices, and frequent demos."
                    deliverables={[
                        "Feature development in milestones",
                        "Performance baseline (isolates when needed)",
                        "Weekly demos + progress updates",
                    ]}
                />

                <ProcessStep
                    index={4}
                    title="QA, Release & Handover"
                    description="Stability and store-readiness: test pass, release checklist, and a smooth handover with documentation."
                    deliverables={[
                        "Release checklist for App Store / Google Play",
                        "Bug fixes, polish, and production hardening",
                        "Handover notes + next steps plan",
                    ]}
                />
            </div>

            {/* Bottom strip */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-white/85">
                            Working style
                        </p>
                        <p className="mt-2 text-sm text-white/65">
                            Clear communication, measurable milestones, and production-quality
                            delivery. If native iOS/Android or backend work is needed, I handle
                            it end-to-end.
                        </p>
                    </div>

                    <a className="btn-primary" href="#contact">
                        Start a project
                    </a>
                </div>
            </div>
        </section>
    );
}