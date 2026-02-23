"use client"

import { ShieldCheck, CreditCard, Cpu, Link } from "lucide-react"

export function PricingSection() {
    const features = [
        {
            icon: <Cpu className="h-5 w-5 text-primary" />,
            title: "Pay-Per-Frame",
            description: "0x402 protocol enforcement. Settle micro-transactions in real-time as your agent consumes compute."
        },
        {
            icon: <CreditCard className="h-5 w-5 text-primary" />,
            title: "USDC Native",
            description: "Settlement on Base Mainnet. No custom tokens or bridging required for industrial access."
        },
        {
            icon: <ShieldCheck className="h-5 w-5 text-primary" />,
            title: "Sovereign Auth",
            description: "Cryptographic authorization via EIP-7702. Your agent owns its own economic bandwidth."
        },
        {
            icon: <Link className="h-5 w-5 text-primary" />,
            title: "MCP Standard",
            description: "Fully compatible with the Model Context Protocol. Connect any agentic framework in minutes."
        }
    ]

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Economic Sovereignty</h2>
                    <p className="text-xl text-muted-foreground">
                        Machine-to-machine commerce for the agentic era. High-density vision utility with transparent, on-chain settlement.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="glass-panel rounded-2xl p-8 transition-all hover:border-primary/30">
                            <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 glass-panel px-6 py-4 rounded-full border-primary/20">
                        <span className="text-primary font-mono font-bold">RATE: $0.001 / VISION-FRAME</span>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-foreground font-medium uppercase tracking-tighter text-xs">Base Mainnet Active</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
