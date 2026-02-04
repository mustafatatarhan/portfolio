"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations("services");

    return (
        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                    {t("actions.getQuote")}
                </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ServiceCard
                    title={t("cards.mvpSprint.title")}
                    subtitle={t("cards.mvpSprint.subtitle")}
                    idealFor={t("cards.mvpSprint.idealFor")}
                    includes={t.raw("cards.mvpSprint.includes") as string[]}
                />

                <ServiceCard
                    title={t("cards.productBuild.title")}
                    subtitle={t("cards.productBuild.subtitle")}
                    idealFor={t("cards.productBuild.idealFor")}
                    includes={t.raw("cards.productBuild.includes") as string[]}
                    emphasis
                />

                <ServiceCard
                    title={t("cards.performanceNative.title")}
                    subtitle={t("cards.performanceNative.subtitle")}
                    idealFor={t("cards.performanceNative.idealFor")}
                    includes={t.raw("cards.performanceNative.includes") as string[]}
                />
            </div>

            {/* Bottom CTA strip */}
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
                        {t("actions.discussProduct")}
                    </a>
                </div>
            </div>
        </section>
    );
}
