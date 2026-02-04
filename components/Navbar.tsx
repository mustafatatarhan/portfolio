// components/Navbar.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type Locale = "en" | "tr";

function getLocaleFromPath(pathname: string): Locale {
    const seg = pathname.split("/").filter(Boolean)[0];
    return seg === "tr" ? "tr" : "en";
}

function switchLocaleInPath(pathname: string, nextLocale: Locale) {
    const parts = pathname.split("/").filter(Boolean);
    const rest = parts.slice(1); // locale sonrası path
    return "/" + [nextLocale, ...rest].join("/");
}

export default function Navbar() {
    const t = useTranslations("navbar");
    const pathname = usePathname();
    const router = useRouter();

    const locale = getLocaleFromPath(pathname);

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
    const [active, setActive] = useState<string>("");

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onChangeLocale = (nextLocale: Locale) => {
        if (nextLocale === locale) return;
        const nextPath = switchLocaleInPath(pathname, nextLocale);
        router.push(nextPath);
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
                rootMargin: "-20% 0px -65% 0px",
                threshold: [0.05, 0.15, 0.3, 0.5, 0.7],
            }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="border-b border-white/10 bg-bg/70 backdrop-blur-md">
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

                        <div className="hidden items-center gap-3 md:flex">
                            <span className="text-xs font-medium text-white/60">
                                {t("availability")}
                            </span>

                            {/* Language switch */}
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1">
                                <button
                                    type="button"
                                    onClick={() => onChangeLocale("en")}
                                    className={[
                                        "rounded-full px-2.5 py-1 text-xs font-semibold transition",
                                        locale === "en"
                                            ? "bg-white/10 text-white"
                                            : "text-white/60 hover:text-white",
                                    ].join(" ")}
                                    aria-label={t("aria.switchToEnglish")}
                                >
                                    {t("lang.en")}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onChangeLocale("tr")}
                                    className={[
                                        "rounded-full px-2.5 py-1 text-xs font-semibold transition",
                                        locale === "tr"
                                            ? "bg-white/10 text-white"
                                            : "text-white/60 hover:text-white",
                                    ].join(" ")}
                                    aria-label={t("aria.switchToTurkish")}
                                >
                                    {t("lang.tr")}
                                </button>
                            </div>

                            <a className="social-pill" href="#contact" aria-label={t("aria.contact")}>
                                ✉
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}