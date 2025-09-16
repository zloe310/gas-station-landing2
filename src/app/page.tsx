import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBlock } from "@/components/trust-block"
import { ProductsSection } from "@/components/products-section"
import { Configurator } from "@/components/configurator"
import { ConsultationForm } from "@/components/consultation-form"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="advantages">
        <TrustBlock />
      </section>
      <section id="product">
        <ProductsSection />
      </section>
      <section id="configurator">
        <Configurator />
      </section>
      <section id="contacts">
        <ConsultationForm />
      </section>
      <SiteFooter />
    </main>
  )
}
