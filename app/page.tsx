import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ButtonsSection } from "@/components/sections/ButtonsSection";
import { InputsSection } from "@/components/sections/InputsSection";
import { CardsSection } from "@/components/sections/CardsSection";
import { SkeletonSection } from "@/components/sections/SkeletonSection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ButtonsSection />
      <InputsSection />
      <CardsSection />
      <SkeletonSection />
    </PageLayout>
  );
}
