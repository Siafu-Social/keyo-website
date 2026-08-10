import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersApplyForm } from "@/components/careers-apply-form"

export default function CareersApplyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Apply Now</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fill in your details below and attach your CV. Only shortlisted candidates will be contacted.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <Suspense fallback={null}>
            <CareersApplyForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  )
}
