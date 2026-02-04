import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/layout/Section";

export function CardsSection() {
    return (
        <Section title="Cards">
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Notificações</CardTitle>
                        <CardDescription>
                            Gerencie suas preferências de e-mail.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Selecione os tipos de notificação que deseja receber.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-between">
                        <Button variant="ghost">Cancelar</Button>
                        <Button>Salvar</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Plano Pro</CardTitle>
                        <CardDescription>Desbloqueie todos os recursos.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Analytics avançado
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Suporte prioritário
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Sem limites de uso
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Upgrade agora</Button>
                    </CardFooter>
                </Card>
            </div>
        </Section>
    );
}
