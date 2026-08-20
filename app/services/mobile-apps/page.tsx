import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, Tablet, Watch, Zap } from "lucide-react"

const title = "Mobile App Development"
const description =
  "Native and cross-platform mobile applications for iOS and Android, designed to be beautiful, intuitive, and built by Keyo Limited."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/mobile-apps" },
  openGraph: { title, description },
  twitter: { title, description },
}

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Mobile App Development</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your customers are on their phones. Let's meet them there with beautiful, intuitive mobile apps that
              they'll want to use every day.
            </p>
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="/#contact">Start Your App</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Mobile Apps That People Love</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We create mobile experiences that feel natural and effortless. Whether you need an iOS app, an Android
              app, or both, we've got you covered. Our team knows how to make apps that not only look great but also
              perform flawlessly and keep users coming back.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Native iOS & Android</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We build truly native apps that take full advantage of each platform's unique features and
                    capabilities. Your app will feel right at home on any device.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Tablet className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Platform Solutions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Need to reach both iOS and Android users quickly? We use React Native and Flutter to build apps that
                    work beautifully on both platforms from a single codebase.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <Watch className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wearable Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Extend your app's reach to smartwatches and other wearable devices. We create seamless experiences
                    across all the devices your users love.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Offline Functionality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your app shouldn't stop working when the internet does. We build smart offline features that keep
                    users productive no matter where they are.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us for Mobile Development?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Building a successful mobile app takes more than just technical skills. It requires understanding what
              makes users tick, what keeps them engaged, and what makes them recommend your app to their friends. That's
              where we shine.
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">User Experience First</h3>
                <p className="text-gray-700 leading-relaxed">
                  We obsess over every tap, swipe, and interaction. Your app will feel smooth, responsive, and
                  delightful to use. We follow platform-specific design guidelines while adding our own creative touch
                  to make your app stand out.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nobody likes a slow app. We optimize everything from load times to battery usage to ensure your app
                  runs smoothly even on older devices. Your users will notice the difference.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Store Success</h3>
                <p className="text-gray-700 leading-relaxed">
                  Getting your app approved and discovered in the App Store and Google Play can be tricky. We've been
                  through the process hundreds of times and know exactly what it takes to succeed. We'll help you
                  navigate the submission process and optimize your app store presence.
                </p>
              </div>

              <div className="bg-[#F8FBFF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Updates & Maintenance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mobile platforms are constantly evolving. New devices, new OS versions, new features. We stay on top
                  of all these changes and keep your app updated so it always works perfectly for your users.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Your Mobile App</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Have an idea for a mobile app? We'd love to hear about it. Let's chat about how we can turn your vision
                into reality.
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
