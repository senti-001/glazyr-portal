import { Header } from "@/components/header"
import { NetworkDisclaimer } from "@/components/network-disclaimer"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { PhoenixProtocol } from "@/components/phoenix-protocol"
import { SecurityArchitecture } from "@/components/security-architecture"
import { StatusSection } from "@/components/status-section"
import { NeuralTokenomics } from "@/components/neural-tokenomics"
import { DeveloperResources } from "@/components/developer-resources"
import { GatewaySection } from "@/components/gateway-section"
import { ModuleBountyBoard } from "@/components/module-bounty-board"
import { SentiSection } from "@/components/senti-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <NetworkDisclaimer />
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <PhoenixProtocol />
        <SecurityArchitecture />
        <StatusSection />
        <NeuralTokenomics />
        <DeveloperResources />
        <ModuleBountyBoard />
        <GatewaySection />
        <SentiSection />
      </main>
      <Footer />
    </div>
  )
}
