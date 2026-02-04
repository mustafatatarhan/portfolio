"use client";

import ContactCard from "@/components/ContactCard";
import { SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("contact");

    return (
        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        {t("section.title")}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        {t("section.description")}
                    </p>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm font-semibold text-white/85">
                            {t("section.fastestWayTitle")}
                        </p>

                        <p className="mt-2 text-sm text-white/65">
                            {t("section.fastestWayLead")}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                            {(t.raw("section.fastestWayItems") as string[]).map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span className="accent mt-[2px]">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-wrap items-center gap-4">
                    <a className="btn-primary" href="mailto:contact@mustafatarthan.me">
                        {t("actions.emailMe")}
                    </a>

                    <a className="nav-link inline-flex items-center gap-2" href="#services">
                        {t("actions.seeServices")}{" "}
                        <span className="text-white/50">→</span>
                    </a>
                </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ContactCard
                    icon={<HiMail className="h-5 w-5" />}
                    title={t("cards.email.title")}
                    description={t("cards.email.description")}
                    href="mailto:contact@mustafatarthan.me?subject=Project%20Inquiry"
                    cta={t("cards.email.cta")}
                />

                <ContactCard
                    icon={<SiLinkedin className="h-5 w-5" />}
                    title={t("cards.linkedin.title")}
                    description={t("cards.linkedin.description")}
                    href="https://www.linkedin.com/in/mustafatatarhan"
                    cta={t("cards.linkedin.cta")}
                />
            </div>

            {/* Footer note */}
            <p className="mt-8 text-sm text-white/55">
                {t("footerNote")}
            </p>
        </section>
    );
}
