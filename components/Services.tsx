import ServiceCard from "@/components/ServiceCard";

export default function Services() {
    return (
        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        Services
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        I deliver end-to-end mobile products — Flutter-first, with backend,
                        subscriptions, and native iOS/Android when needed. Clear scope,
                        predictable milestones, and production-quality execution.
                    </p>
                </div>

                <a
                    href="#contact"
                    className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80
                     hover:bg-white/[0.06] md:inline-block"
                >
                    Get a quote
                </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ServiceCard
                    title="MVP Sprint"
                    subtitle="Validate the product quickly — without cutting quality."
                    idealFor="Founders who want a usable MVP shipped fast with a clean base for iteration."
                    includes={[
                        "Scope + milestones + weekly progress updates",
                        "Flutter app implementation with clean architecture",
                        "Release-ready build + store checklist guidance",
                    ]}
                />

                <ServiceCard
                    title="Product Build"
                    subtitle="End-to-end delivery: app + backend + subscriptions."
                    idealFor="Teams who want a senior dev owning full execution from MVP to production."
                    includes={[
                        "Flutter app + scalable backend integration",
                        "Auth, payments/subscriptions (RevenueCat), analytics events",
                        "Performance tuning (isolates) + production hardening",
                    ]}
                    emphasis
                />

                <ServiceCard
                    title="Performance & Native"
                    subtitle="When Flutter needs native power."
                    idealFor="Apps that require media processing, platform APIs, or advanced performance work."
                    includes={[
                        "Native iOS/Android modules (Swift/Kotlin) when needed",
                        "Media pipelines, background tasks, large-data optimization",
                        "Stability, profiling, and release-quality improvements",
                    ]}
                />
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-white/85">
                            Not sure which service fits?
                        </p>
                        <p className="mt-2 text-sm text-white/65">
                            Tell me your idea and constraints — I’ll propose the best path and
                            a realistic delivery plan.
                        </p>
                    </div>
                    <a className="btn-primary" href="#contact">
                        Discuss your product
                    </a>
                </div>
            </div>
        </section>
    );
}