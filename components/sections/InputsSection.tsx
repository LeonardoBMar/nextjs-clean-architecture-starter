import { Input } from "@/components/ui/input";
import { Section } from "@/components/layout/Section";

export function InputsSection() {
    return (
        <Section title="Inputs">
            <div className="grid max-w-sm gap-4">
                <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-900 dark:text-slate-50">
                        Email
                    </label>
                    <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-red-500">
                        Error State
                    </label>
                    <Input error placeholder="Invalid input" defaultValue="wrong value" />
                    <p className="text-xs text-red-500">
                        Mensagem de erro explicativa.
                    </p>
                </div>
            </div>
        </Section>
    );
}
