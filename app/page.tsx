import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CoreMessage } from "@/components/sections/CoreMessage";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Science } from "@/components/sections/Science";
import { WhiteLabel } from "@/components/sections/WhiteLabel";
import { Quality } from "@/components/sections/Quality";
import { Longevity } from "@/components/sections/Longevity";
import { SocialProof } from "@/components/sections/SocialProof";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { ExampleFormulas } from "@/components/sections/ExampleFormulas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteShell>
        <Hero />
        <TrustBar />
        <CoreMessage />
        <HowItWorks />
        <Science />
        <WhiteLabel />
        <Quality />
        <Longevity />
        <SocialProof />
        <BusinessModel />
        <ExampleFormulas />
        <FinalCTA />
      </SiteShell>
      <Footer />
    </>
  );
}
