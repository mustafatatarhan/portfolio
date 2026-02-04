type Props = {
    index: number;
    title: string;
    description: string;
    deliverables: string[];
};

export default function ProcessStep({
    index,
    title,
    description,
    deliverables,
}: Props) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-extrabold text-white/85">
                    {index}
                </div>

                <div className="min-w-0">
                    <h3 className="text-lg font-extrabold tracking-tight text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                        {deliverables.map((x) => (
                            <li key={x} className="flex gap-2">
                                <span className="accent mt-[2px]">✓</span>
                                <span>{x}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}