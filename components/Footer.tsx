import Link from "next/link";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { HiMail } from "react-icons/hi";

export default function Footer() {
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
                            Mustafa Tatarhan<span className="accent">.</span>
                        </Link>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                            End-to-end Flutter product development — performance-first apps,
                            scalable backends, and store-ready releases.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Available for freelance
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:justify-self-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Navigation
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                            <a className="nav-link w-fit" href="#projects">
                                Projects
                            </a>
                            <a className="nav-link w-fit" href="#services">
                                Services
                            </a>
                            <a className="nav-link w-fit" href="#process">
                                Process
                            </a>
                            <a className="nav-link w-fit" href="#contact">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="md:justify-self-end">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Say hello
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                            <a
                                className="social-pill"
                                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <SiLinkedin size={18} />
                            </a>

                            <a
                                className="social-pill"
                                href="mailto:hello@yourmail.com"
                                aria-label="Email"
                            >
                                <HiMail size={18} />
                            </a>

                            <a
                                className="social-pill"
                                href="https://www.instagram.com/YOUR_INSTAGRAM"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <SiInstagram size={18} />
                            </a>
                        </div>

                        <p className="mt-4 max-w-xs text-sm text-white/60">
                            For project inquiries, email works best. Include timeline + scope,
                            I’ll reply with next steps.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Mustafa Tatarhan. All rights reserved.</p>
                    <p className="text-white/40">Built with Next.js + Tailwind.</p>
                </div>
            </div>
        </footer>
    );
}