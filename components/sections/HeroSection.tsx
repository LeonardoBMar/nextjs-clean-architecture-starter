import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Design System & UI Components
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
                Template de boas práticas com componentes reutilizáveis.
            </p>
            <div className="pt-4">
                <Link href="/users">
                    <Button variant="link">
                        Simular Fetch de Dados (Users) <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
