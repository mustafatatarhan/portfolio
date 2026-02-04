"use client";

import Link from "next/link";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="mt-24 border-t border-white/10">
            <div className="mx-auto w-full max-w-6xl px-6 py-12">
                {/* Top */}
                <div className="grid gap-10 md:grid-cols-3 md:items-start">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-lg font-extrabold tracking-tight text-white"
                        >
                            {t("brandName")}
                            <span className="accent">.</span>
                        </Link>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                            {t("tagline")}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            {t("availability")}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:justify-self-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            {t("navigationTitle")}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                            <a className="nav-link w-fit" href="#projects">
                                {t("links.projects")}
                            </a>
                            <a className="nav-link w-fit" href="#services">
                                {t("links.services")}
                            </a>
                            <a className="nav-link w-fit" href="#process">
                                {t("links.process")}
                            </a>
                            <a className="nav-link w-fit" href="#contact">
                                {t("links.contact")}
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="md:justify-self-end">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            {t("socialTitle")}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                            <a
                                className="social-pill"
                                href="https://www.linkedin.com/in/mustafatatarhan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t("socialAria.linkedIn")}
                            >
                                <SiLinkedin size={18} />
                            </a>

                            <a
                                className="social-pill"
                                href="mailto:contact@mustafatatarhan.me"
                                aria-label={t("socialAria.email")}
                            >
                                <HiMail size={18} />
                            </a>

                            <a
                                className="social-pill"
                                href="https://www.instagram.com/mustafa5tatarhan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t("socialAria.instagram")}
                            >
                                <SiInstagram size={18} />
                            </a>
                        </div>

                        <p className="mt-4 max-w-xs text-sm text-white/60">
                            {t("inquiryNote")}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>{t("copyright", { year: new Date().getFullYear() })}</p>
                    <p className="text-white/40">{t("builtWith")}</p>
                </div>
            </div>
        </footer>
    );
}
