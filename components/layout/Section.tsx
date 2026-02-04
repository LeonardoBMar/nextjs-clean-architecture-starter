import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
    return (
        <section className="space-y-6">
            <h2 className="text-xl font-semibold border-b pb-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-50">
                {title}
            </h2>
            {children}
        </section>
    );
}
