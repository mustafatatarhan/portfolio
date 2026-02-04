"use client";

import { SiLinkedin, SiInstagram, SiFlutter } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import {
    HiOutlineCpuChip,
    HiOutlineServerStack,
    HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { useTranslations } from "next-intl";
import HeroCodePreview from "@/components/HeroCodePreview";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

export default function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="mx-auto mt-16 grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
                <p className="text-sm font-semibold text-white/70">
                    {t("locationLine")}
                </p>

                <h1 className="mt-4 text-6xl font-extrabold leading-[1.0] tracking-tight">
                    {t("title.prefix")}{" "}
                    <span className="accent">{t("title.accent")}</span>{" "}
                    <span className="whitespace-nowrap">{t("title.platform")}</span>{" "}
                    {t("title.suffix")}
                </h1>

                <p className="mt-5 max-w-xl text-white/70">
                    {t("description")}
                </p>

                {/* Trust strip */}
                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/65">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <SiFlutter className="accent" size={16} />
                        {t("trustBadges.flutterFirst")}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineCpuChip className="accent" size={16} />
                        {t("trustBadges.native")}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineServerStack className="accent" size={16} />
                        {t("trustBadges.backend")}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineRocketLaunch className="accent" size={16} />
                        {t("trustBadges.storeReady")}
                    </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a className="btn-primary" href="#contact">
                        {t("actions.startProject")}
                    </a>

                    <a
                        href="/MUSTAFA_TATARHAN_CV.pdf"
                        download
                        className="
    group inline-flex items-center gap-2
    rounded-full
    border border-white/10
    bg-white/[0.04]
    px-5 py-2.5
    text-sm font-semibold text-white/85
    backdrop-blur
    transition-all duration-200
    hover:border-white/20 hover:bg-white/[0.08]
    hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40
  "
                        aria-label="Download CV (PDF)"
                    >
                        <HiOutlineArrowDownTray
                            className="
      h-4 w-4
      text-white/60
      transition-transform duration-200
      group-hover:translate-y-[1px] group-hover:text-white/90
    "
                        />
                        <span>{t("cta.downloadCV")}</span>
                    </a>
                    <a href="#projects" className="nav-link inline-flex items-center gap-2">
                        {t("actions.viewProjects")}{" "}
                        <span className="text-white/50">→</span>
                    </a>



                    <span className="text-sm text-white/60">
                        {t("cta.availability")}
                    </span>
                </div>

                {/* Social row */}
                <div className="mt-8 flex items-center gap-3">
                    <a
                        className="social-pill"
                        href="https://www.linkedin.com/in/mustafatatarhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("social.linkedIn")}
                    >
                        <SiLinkedin size={18} />
                    </a>

                    <a
                        className="social-pill"
                        href="mailto:contact@mustafatarthan.me"
                        aria-label={t("social.email")}
                    >
                        <HiMail size={18} />
                    </a>

                    <a
                        className="social-pill"
                        href="https://www.instagram.com/mustafa5tatarhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("social.instagram")}
                    >
                        <SiInstagram size={18} />
                    </a>
                </div>

                {/* What you get */}
                <div className="mt-9 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm font-semibold text-white/85">
                        {t("whatYouGet.title")}
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                        {(t.raw("whatYouGet.items") as string[]).map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="accent">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right side */}
            <HeroCodePreview />
        </section>
    );
}
