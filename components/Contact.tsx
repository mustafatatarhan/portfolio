import ContactCard from "@/components/ContactCard";
import { SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        Contact
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                        Tell me what you’re building and what constraints you have (timeline,
                        platform, budget). I’ll reply with a realistic plan and next steps.
                    </p>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm font-semibold text-white/85">Fastest way</p>
                        <p className="mt-2 text-sm text-white/65">
                            Send a short message with:
                        </p>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                            <li className="flex gap-2">
                                <span className="accent mt-[2px]">✓</span>
                                <span>What the app does (1–2 sentences)</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="accent mt-[2px]">✓</span>
                                <span>Target platforms (iOS / Android / Web)</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="accent mt-[2px]">✓</span>
                                <span>Timeline and any must-have features</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-wrap items-center gap-4">
                    <a className="btn-primary" href="mailto:hello@yourmail.com">
                        Email me
                    </a>
                    <a className="nav-link inline-flex items-center gap-2" href="#services">
                        See services <span className="text-white/50">→</span>
                    </a>
                </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ContactCard
                    icon={<HiMail className="h-5 w-5" />}
                    title="Email"
                    description="Best for project details, timelines, and requirements."
                    href="mailto:hello@yourmail.com?subject=Project%20Inquiry"
                    cta="Send an email"
                />

                <ContactCard
                    icon={<SiLinkedin className="h-5 w-5" />}
                    title="LinkedIn"
                    description="Great for a quick intro and context about your product."
                    href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                    cta="Message on LinkedIn"
                />
            </div>

            {/* Footer note */}
            <p className="mt-8 text-sm text-white/55">
                Prefer async? Email works best — I typically reply within 24 hours.
            </p>
        </section>
    );
}