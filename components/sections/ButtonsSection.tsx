import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Trash2 } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function ButtonsSection() {
    return (
        <Section title="Buttons">
            <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                    <Mail className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button isLoading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button>
                    With Icon <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
            </div>
        </Section>
    );
}
