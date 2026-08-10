import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
