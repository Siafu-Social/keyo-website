import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Zap, Shield, Users } from "lucide-react"

export default function WebApplicationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Web Applications Development</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We build powerful, scalable web applications that transform how your business operates. From concept to
              deployment, we're with you every step of the way.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Offer</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Our web development team specializes in creating custom solutions that fit your unique business needs. We
              don't believe in one-size-fits-all approaches. Instead, we take the time to understand your goals, your
              users, and your challenges before writing a single line of code.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use cutting-edge technologies like React, Next.js, and Node.js to build fast, responsive
                    applications that your users will love.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Performance matters. We optimize every aspect of your application to ensure it loads quickly and
                    runs smoothly, even under heavy traffic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your data and your users' data are precious. We implement industry-standard security practices to
                    keep everything safe and sound.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User-Centered Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beautiful interfaces that people actually enjoy using. We design with your users in mind, making
                    complex tasks feel simple and intuitive.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Process</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Building great software isn't just about writing code. It's about understanding your vision and bringing
              it to life in a way that exceeds expectations. Here's how we make it happen:
            </p>

            <div className="space-y-6 mb-16">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A8DFB] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We start by getting to know your business inside and out. What problems are you trying to solve? Who
                    are your users? What does success look like? We ask the tough questions upfront so we can build
                    something that truly works for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A8DFB] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Prototyping</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before we write any code, we create interactive prototypes that let you see and feel how your
                    application will work. This helps us catch potential issues early and ensures we're all on the same
                    page.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A8DFB] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Development & Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is where the magic happens. Our developers build your application using best practices and
                    clean code. We test everything thoroughly to make sure it works perfectly across all devices and
                    browsers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A8DFB] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't just hand over the keys and disappear. We help you launch successfully and stick around to
                    provide ongoing support, updates, and improvements as your business grows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's talk about your project. We'd love to hear your ideas and show you how we can help bring them to
                life.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
