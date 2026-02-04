import type { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    title: string;
    description: string;
    href: string;
    cta: string;
};

export default function ContactCard({
    icon,
    title,
    description,
    href,
    cta,
}: Props) {
    return (
        <a
            href={href}
            className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition
                 hover:bg-white/[0.05] hover:border-white/15"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                        {icon}
                    </div>

                    <div>
                        <p className="text-sm font-extrabold tracking-tight text-white">
                            {title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
                    </div>
                </div>

                <span className="text-white/50 transition group-hover:text-white/75">
                    →
                </span>
            </div>

            <div className="mt-5 text-sm font-semibold text-white/80">
                {cta}{" "}
                <span className="text-white/50 group-hover:text-white/70">→</span>
            </div>
        </a>
    );
}