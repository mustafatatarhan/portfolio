type Props = {
    title: string;
    subtitle: string;
    idealFor: string;
    includes: string[];
    emphasis?: boolean;
};

export default function ServiceCard({
    title,
    subtitle,
    idealFor,
    includes,
    emphasis,
}: Props) {
    return (
        <div
            className={[
                "rounded-3xl border p-6",
                emphasis
                    ? "border-white/15 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.03]",
            ].join(" ")}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{subtitle}</p>
                </div>

                {emphasis ? (
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-white/80">
                        Most requested
                    </span>
                ) : null}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold text-white/60">Ideal for</p>
                <p className="mt-2 text-sm text-white/75">{idealFor}</p>
            </div>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-white/70">
                {includes.map((x) => (
                    <li key={x} className="flex gap-2">
                        <span className="accent mt-[2px]">✓</span>
                        <span>{x}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a className="btn-primary" href="#contact">
                    Start a project
                </a>
                <a className="nav-link inline-flex items-center gap-2" href="#process">
                    See how I work <span className="text-white/50">→</span>
                </a>
            </div>
        </div>
    );
}