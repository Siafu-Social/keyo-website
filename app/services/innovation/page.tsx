import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, Rocket, Target, Repeat } from "lucide-react"

const title = "Innovation & Product Acceleration"
const description =
  "Rapid prototyping and MVP development from Keyo Limited to validate ideas fast and take new products from concept to market."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/innovation" },
  openGraph: { title, description },
  twitter: { title, description },
}

export default function InnovationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Innovation & Product Acceleration</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Got a brilliant idea? Let's turn it into reality—fast. We help you validate concepts, build MVPs, and
              launch products that people actually want to use.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Launch Your Idea</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">From Idea to Market in Record Time</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The best time to launch your product was yesterday. The second best time is now. We specialize in rapid
              product development that gets your idea in front of real users quickly. No endless planning meetings or
              feature bloat—just focused execution that delivers results.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Prototyping</h3>
                  <p className="text-gray-700 leading-relaxed">
                    See your idea come to life in days, not months. We create interactive prototypes that let you test
                    and refine your concept before investing in full development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">MVP Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Build a minimum viable product that focuses on core features. Get to market fast, learn from real
                    users, and iterate based on actual feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Market Validation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Don't guess what users want—find out. We help you test your assumptions and validate your
                    product-market fit before scaling up.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Repeat className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Iterative Improvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Launch, learn, improve, repeat. We help you continuously refine your product based on user feedback
                    and data.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Speed Matters</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In today's fast-moving market, speed is everything. The longer you wait to launch, the more opportunities
              you miss. But speed doesn't mean cutting corners. It means being smart about what you build and when you
              build it.
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lean Methodology</h3>
                <p className="text-gray-700 leading-relaxed">
                  We follow lean startup principles to help you build only what matters. Start with the essentials, test
                  with real users, and add features based on actual demand. This approach saves time, money, and
                  headaches.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work in short sprints, delivering working software every couple of weeks. You'll see progress
                  constantly and can adjust direction as you learn more about what your users need.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fast doesn't mean sloppy. We use modern tools and best practices to build products that are quick to
                  market but built to last. Your MVP can grow into a full-featured product without needing a complete
                  rewrite.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Guidance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're not just developers—we're your partners in innovation. We'll help you make smart decisions about
                  features, technology, and go-to-market strategy based on our experience launching dozens of successful
                  products.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Your MVP</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Have an idea you're excited about? Let's talk. We'll help you figure out the fastest path from concept
                to launch.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/#contact">Start Building</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
