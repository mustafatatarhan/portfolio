import ProcessStep from "@/components/ProcessStep";
import { useTranslations } from "next-intl";

export default function Process() {
    const t = useTranslations("process");

    return (
        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                    className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80
                     hover:bg-white/[0.06] md:inline-block"
                >
                    {t("actions.discussProject")}
                </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ProcessStep
                    index={1}
                    title={t("steps.discoveryScope.title")}
                    description={t("steps.discoveryScope.description")}
                    deliverables={t.raw("steps.discoveryScope.deliverables") as string[]}
                />

                <ProcessStep
                    index={2}
                    title={t("steps.architectureUxPlan.title")}
                    description={t("steps.architectureUxPlan.description")}
                    deliverables={t.raw("steps.architectureUxPlan.deliverables") as string[]}
                />

                <ProcessStep
                    index={3}
                    title={t("steps.buildIterate.title")}
                    description={t("steps.buildIterate.description")}
                    deliverables={t.raw("steps.buildIterate.deliverables") as string[]}
                />

                <ProcessStep
                    index={4}
                    title={t("steps.qaReleaseHandover.title")}
                    description={t("steps.qaReleaseHandover.description")}
                    deliverables={t.raw("steps.qaReleaseHandover.deliverables") as string[]}
                />
            </div>

            {/* Bottom strip */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-white/85">
                            {t("bottomCta.title")}
                        </p>
                        <p className="mt-2 text-sm text-white/65">
                            {t("bottomCta.description")}
                        </p>
                    </div>

                    <a className="btn-primary" href="#contact">
                        {t("actions.startProject")}
                    </a>
                </div>
            </div>
        </section>
    );
}
