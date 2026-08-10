import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, TrendingUp, Users, Settings } from "lucide-react"

export default function CrmErpPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">CRM & ERP Solutions</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Streamline your business operations with custom CRM and ERP systems that grow with you. Say goodbye to
              scattered spreadsheets and hello to organized efficiency.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Transform Your Business</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Business Systems That Actually Work</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Running a business is complicated enough without fighting with your software. We build CRM and ERP systems
              that make your life easier, not harder. Whether you're managing customer relationships, tracking
              inventory, handling finances, or coordinating teams, we create solutions that fit your exact needs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Relationship Management</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Keep track of every customer interaction, sales opportunity, and support ticket in one place. Build
                    stronger relationships and close more deals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Resource Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Connect all your business processes in one unified system. From inventory to accounting to HR,
                    everything works together seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Make data-driven decisions with powerful analytics and customizable reports. See exactly what's
                    working and what needs attention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Workflows</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every business is unique. We build workflows that match how you actually work, not force you to
                    adapt to rigid software.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">Built for Your Business</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Off-the-shelf software tries to be everything to everyone, which means it's perfect for no one. We take a
              different approach. We start by understanding your specific challenges, your team's workflow, and your
              growth plans. Then we build a system that fits like a glove.
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored to Your Processes</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't believe in forcing square pegs into round holes. Your CRM or ERP system should adapt to your
                  business processes, not the other way around. We build exactly what you need, nothing more, nothing
                  less.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Already using other tools? No problem. We integrate with your existing software so everything works
                  together smoothly. Email, accounting software, marketing tools—we connect it all.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your business is growing, and your software should grow with you. We build systems that can handle
                  increasing data, more users, and new features without breaking a sweat.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  The best software in the world is useless if your team doesn't know how to use it. We provide
                  comprehensive training and ongoing support to ensure everyone gets the most out of your new system.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Streamline Your Operations?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss how a custom CRM or ERP system can transform your business. We'll show you what's
                possible.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/#contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
