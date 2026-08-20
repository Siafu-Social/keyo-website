import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Clock, DollarSign, Award } from "lucide-react"

const title = "Outsourced Development"
const description =
  "Dedicated development teams from Keyo Limited that integrate with your in-house team to extend your capacity without the overhead of hiring."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/outsourced-development" },
  openGraph: { title, description },
  twitter: { title, description },
}

export default function OutsourcedDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Outsourced Development</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Need extra hands on deck? We provide dedicated development teams that integrate seamlessly with your
              existing team and work like they're part of your company.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Expand Your Team</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Your Extended Development Team</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Hiring great developers is hard. Training them takes time. Managing them takes effort. What if you could
              skip all that and get experienced developers who are ready to contribute from day one? That's exactly what
              we offer with our outsourced development services.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Teams</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Get a team of developers who work exclusively on your projects. They learn your codebase, understand
                    your business, and become true extensions of your team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scaling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Need more developers for a big project? Want to scale down after launch? We adjust team size based
                    on your needs without the hassle of hiring and firing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Get senior-level talent at a fraction of the cost of hiring in-house. No recruitment fees, no
                    benefits overhead, no office space needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our developers have years of experience across various technologies and industries. They've seen it
                    all and know how to solve complex problems.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">How It Works</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We make outsourcing simple and stress-free. No complicated contracts, no communication barriers, no
              surprises. Just great developers who get stuff done.
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our developers work in your timezone, use your tools, and follow your processes. They join your daily
                  standups, use your project management software, and communicate through your preferred channels. It's
                  like having in-house developers, but without the overhead.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just throw developers at your project and hope for the best. We have rigorous code review
                  processes, testing standards, and quality checks to ensure everything we deliver meets the highest
                  standards.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Communication</h3>
                <p className="text-gray-700 leading-relaxed">
                  All our developers speak fluent English and are experienced in remote collaboration. You'll never
                  struggle to explain requirements or understand progress updates. We believe good communication is just
                  as important as good code.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Partnership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're not interested in quick projects and moving on. We want to build long-term relationships where
                  our team becomes an integral part of your success. Many of our clients have been working with the same
                  developers for years.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Scale Your Team?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss your development needs and how we can help. We'll find the perfect team to support your
                goals.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/#contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
