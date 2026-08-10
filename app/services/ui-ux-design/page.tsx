import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Eye, Heart, Sparkles } from "lucide-react"

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">UI/UX & Product Design</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Beautiful design isn't just about looking good—it's about creating experiences that feel effortless and
              keep users coming back for more.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Design With Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Design That Delights</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Great design is invisible. When users interact with a well-designed product, they don't think about the
              interface—they just get things done. That's what we create: intuitive, beautiful experiences that feel
              natural and make complex tasks simple.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User Research</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We start by understanding your users—their needs, frustrations, and goals. Good design is based on
                    real insights, not assumptions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create stunning interfaces that reflect your brand and captivate your users. Every color, font, and
                    spacing choice is intentional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interaction Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Craft smooth, delightful interactions that make your product feel alive. From micro-animations to
                    gesture controls, every detail matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prototyping</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Test and refine ideas quickly with interactive prototypes. See how your product will feel before
                    writing a single line of code.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Design Philosophy</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We believe design is about solving problems, not just making things pretty. Every design decision we make
              is driven by user needs and business goals. Here's how we approach design:
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centered Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your users are at the heart of everything we design. We conduct user interviews, create personas, map
                  user journeys, and test designs with real people. This ensures we're building something people
                  actually want to use, not just something that looks cool in a portfolio.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Matters</h3>
                <p className="text-gray-700 leading-relaxed">
                  Great design works for everyone. We follow accessibility best practices to ensure your product is
                  usable by people with disabilities. This isn't just the right thing to do—it also makes your product
                  better for all users.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't rely on gut feelings. We use analytics, A/B testing, and user feedback to continuously
                  improve designs. If something isn't working, we change it. If something is working great, we double
                  down on it.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  We create comprehensive design systems that ensure consistency across your entire product. This makes
                  development faster, maintenance easier, and the user experience more cohesive. Plus, it makes it
                  simple to add new features that feel like they belong.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Create Something Beautiful</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Ready to elevate your product's design? Let's chat about how we can create experiences your users will
                love.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
