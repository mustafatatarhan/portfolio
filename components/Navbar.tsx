"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations("navbar");

    const nav = useMemo(
        () => [
            { label: t("links.projects"), href: "#projects" },
            { label: t("links.services"), href: "#services" },
            { label: t("links.process"), href: "#process" },
            { label: t("links.contact"), href: "#contact" },
        ],
        [t]
    );

    const ids = useMemo(() => nav.map((n) => n.href.replace("#", "")), [nav]);
    const [active, setActive] = useState<string>(""); // default: none

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

                if (visible[0]?.target?.id) setActive(visible[0].target.id);
                else setActive("");
            },
            {
                root: null,
                // navbar fixed olduğu için üstten "görünürlük" hesabını ayarlıyoruz
                rootMargin: "-20% 0px -65% 0px",
                threshold: [0.05, 0.15, 0.3, 0.5, 0.7],
            }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Full-width blurred bar */}
            <div className="border-b border-white/10 bg-bg/70 backdrop-blur-md">
                {/* Your max width container */}
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="flex h-16 items-center justify-between">
                        <button
                            type="button"
                            onClick={goTop}
                            className="text-left text-xl font-extrabold tracking-tight text-white"
                            aria-label={t("aria.goToTop")}
                        >
                            {t("brandName")}
                            <span className="text-white/60">.</span>
                        </button>

                        <nav className="hidden items-center gap-7 md:flex">
                            {nav.map((item) => {
                                const id = item.href.replace("#", "");
                                const isActive = active === id;

                                return (
                                    <a
                                        key={item.href}
                                        className={isActive ? "nav-link-active" : "nav-link"}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Right side: availability + quick contact */}
                        <div className="hidden items-center gap-3 md:flex">
                            <span className="text-xs font-medium text-white/60">
                                {t("availability")}
                            </span>

                            <a
                                className="social-pill"
                                href="#contact"
                                aria-label={t("aria.contact")}
                            >
                                ✉
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
