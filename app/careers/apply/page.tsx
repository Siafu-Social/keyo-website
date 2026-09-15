import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CareersApplyForm } from "@/components/careers-apply-form"
import { HIRING_OPEN } from "@/lib/hiring-status"

const title = "Apply Now"
const description = HIRING_OPEN
  ? "Submit your application for a role at Keyo Ltd. Upload your CV and we'll be in touch if you're shortlisted."
  : "Applications are currently closed at Keyo Ltd."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers/apply" },
  openGraph: { title, description },
  twitter: { title, description },
}

export default function CareersApplyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {HIRING_OPEN ? "Apply Now" : "Applications Closed"}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {HIRING_OPEN
                ? "Fill in your details below and attach your CV. Only shortlisted candidates will be contacted."
                : "We're not accepting applications right now. Check the Careers page for updates."}
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          {HIRING_OPEN ? (
            <Suspense fallback={null}>
              <CareersApplyForm />
            </Suspense>
          ) : (
            <div className="bg-[#F8FBFF] rounded-2xl p-12 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                There are no open positions at Keyo Ltd right now, so this form isn't accepting submissions.
              </p>
              <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link href="/careers">Back to Careers</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
