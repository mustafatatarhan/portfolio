import { SiLinkedin, SiInstagram, SiFlutter } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { HiOutlineServerStack } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import HeroCodePreview from "@/components/HeroCodePreview";

export default function Hero() {
    return (
        <section className="mx-auto mt-16 grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
                <p className="text-sm font-semibold text-white/70">
                    Sakarya, TR · Flutter · Mobile Product Development
                </p>

                <h1 className="mt-4 text-6xl font-extrabold leading-[1.0] tracking-tight">
                    I build{" "}
                    <span className="accent">end-to-end</span>{" "}
                    <span className="whitespace-nowrap">Flutter</span>{" "}
                    products that ship.
                </h1>

                <p className="mt-5 max-w-xl text-white/70">
                    MVP → production-ready apps with clean architecture, performance
                    (isolates), and native iOS/Android when it matters — plus scalable
                    backends and subscription workflows (RevenueCat).
                </p>

                {/* Trust strip */}
                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/65">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <SiFlutter className="accent" size={16} />
                        Flutter-first
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineCpuChip className="accent" size={16} />
                        iOS & Android native
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineServerStack className="accent" size={16} />
                        Backend + subscriptions
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        <HiOutlineRocketLaunch className="accent" size={16} />
                        Store-ready releases
                    </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a className="btn-primary" href="#contact" aria-label="Book a call">
                        Start a project
                    </a>

                    <a href="#projects" className="nav-link inline-flex items-center gap-2">
                        View projects <span className="text-white/50">→</span>
                    </a>

                    <span className="text-sm text-white/60">
                        Available for freelance · Remote / Hybrid
                    </span>
                </div>

                {/* Social row */}
                <div className="mt-8 flex items-center gap-3">
                    <a
                        className="social-pill"
                        href="https://www.linkedin.com/in/mustafatatarhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin size={18} />
                    </a>

                    <a
                        className="social-pill"
                        href="mailto:mtworkce@gmail.com"
                        aria-label="Email"
                    >
                        <HiMail size={18} />
                    </a>

                    <a
                        className="social-pill"
                        href="https://www.instagram.com/mustafa5tatarhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <SiInstagram size={18} />
                    </a>
                </div>

                {/* What you get */}
                <div className="mt-9 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm font-semibold text-white/85">What you get</p>

                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                        <li className="flex gap-2">
                            <span className="accent">✓</span>
                            Clear scope, milestones, and weekly progress updates
                        </li>
                        <li className="flex gap-2">
                            <span className="accent">✓</span>
                            Performance-first Flutter (isolates) + native iOS/Android when needed
                        </li>
                        <li className="flex gap-2">
                            <span className="accent">✓</span>
                            Backend, auth, payments/subscriptions, analytics, and store release support
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right side (empty for now) */}
            <HeroCodePreview />
        </section>
    );
}