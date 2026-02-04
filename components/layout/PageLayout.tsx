import { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">
            <main className="mx-auto max-w-4xl space-y-10">{children}</main>
        </div>
    );
}
