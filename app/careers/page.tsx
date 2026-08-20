import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Store,
  Bike,
  Wallet,
  Users,
  TrendingUp,
  GraduationCap,
  MapPin,
  Clock,
  ShieldAlert,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react"

const jobs = [
  {
    slug: "store-manager",
    title: "Store Manager",
    subtitle: "Store Owner / Franchisee",
    icon: Store,
    pay: "Ksh 25,000",
    payLabel: "Guaranteed Responsibility Allowance / month",
    duties: [
      "Identify and secure suitable store premises.",
      "Hire, train and manage sales agents attached to your store.",
      "Manage the entire sales life cycle and ensure smooth operations.",
      "Receive stock from the company and assign to agents as per orders.",
      "Ensure delivery to customers and payment collection.",
      "Ensure all sales are properly posted in the system and daily reconciliations are done.",
      "Coach and assign routes to sales agents for optimal sales and delivery.",
      "Ensure all agents comply with their KPIs and company policies.",
      "Manage and safeguard all company assets assigned to your store.",
    ],
    requirements: [
      "Business acumen and leadership skills",
      "Experience in retail/distribution is an added advantage",
      "Good communication, integrity and accountability",
      "Ability to manage a team and meet targets",
      "Basic computer and smartphone skills",
    ],
  },
  {
    slug: "sales-agent",
    title: "Sales Agent",
    subtitle: "Field Sales Representative",
    icon: Bike,
    pay: "Ksh 15,000",
    payLabel: "Guaranteed Earning / month",
    duties: [
      "Solicit orders from customers using the company platform.",
      "Pick stock from store and deliver to customers.",
      "Ensure payment is collected upon delivery.",
      "Record sales and payments accurately in the system.",
      "Build and maintain strong customer relationships.",
      "Achieve individual sales and KPI targets.",
    ],
    requirements: [
      "Minimum KCSE or equivalent",
      "Smartphone (Android) required",
      "Good communication and customer service skills",
      "Self-motivated and target driven",
      "Willingness to travel within assigned routes",
      "Experience in sales is an added advantage",
    ],
  },
]

const perks = [
  { icon: TrendingUp, label: "Grow Your Career" },
  { icon: Wallet, label: "Attractive Earnings" },
  { icon: GraduationCap, label: "Ongoing Training" },
  { icon: Users, label: "Be Part of a Winning Team" },
]

const title = "Careers"
const description = "Keyo Ltd is hiring: Store Manager and Sales Agent roles now open in Nairobi. Apply online today."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title, description },
  twitter: { title, description },
}

const jobPostingsJsonLd = jobs.map((job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: `${job.title} (${job.subtitle})`,
  description: `<p>${[...job.duties].join(" ")}</p><p>Requirements: ${job.requirements.join(", ")}.</p>`,
  identifier: {
    "@type": "PropertyValue",
    name: "Keyo Ltd",
    value: job.slug,
  },
  datePosted: "2026-08-20",
  employmentType: "OTHER",
  hiringOrganization: {
    "@type": "Organization",
    name: "Keyo Ltd",
    sameAs: "https://www.keyo.co.ke",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "KES",
    value: {
      "@type": "QuantitativeValue",
      value: Number(job.pay.replace(/[^0-9]/g, "")),
      unitText: "MONTH",
    },
  },
}))

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {jobPostingsJsonLd.map((jobPosting) => (
        <script
          key={jobPosting.identifier.value}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
        />
      ))}
      <Navbar />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/90 text-[#4A8DFB] font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
              We're Hiring
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow With Us. Build Your Future.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join our team and be part of a dynamic retail network delivering great products and excellent service
              to our customers.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-[#F8FBFF]">
                  <div className="w-12 h-12 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
                    <perk.icon className="w-6 h-6 text-[#4A8DFB]" />
                  </div>
                  <span className="font-semibold text-gray-900">{perk.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Open Positions</h2>
            <p className="text-lg text-[#A0AEC0] text-center mb-12 max-w-2xl mx-auto">
              Two roles are open right now, both based in Nairobi.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {jobs.map((job) => (
                <div
                  key={job.slug}
                  className="bg-white border border-[#E7F1FF] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#66A9FF]/10 flex items-center justify-center flex-shrink-0">
                        <job.icon className="w-7 h-7 text-[#4A8DFB]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-[#A0AEC0]">{job.subtitle}</p>
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-3">What You'll Do</h4>
                    <ul className="space-y-2 mb-6">
                      {job.duties.map((duty, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#4A8DFB] flex-shrink-0 mt-0.5" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A8DFB] flex-shrink-0 mt-2" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <div className="bg-[#F8FBFF] rounded-xl p-4 flex items-center gap-3 mb-6">
                        <Wallet className="w-5 h-5 text-[#4A8DFB] flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-gray-900">{job.pay}</div>
                          <div className="text-xs text-[#A0AEC0]">{job.payLabel} (subject to terms in the contract)</div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full py-6 text-lg"
                        asChild
                      >
                        <Link href={`/careers/apply?role=${job.slug}`}>Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="flex items-center gap-3 bg-[#F8FBFF] rounded-xl p-5">
                <MapPin className="w-5 h-5 text-[#4A8DFB] flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Project Area</div>
                  <div className="text-[#A0AEC0] text-sm">Nairobi Only</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#F8FBFF] rounded-xl p-5">
                <Clock className="w-5 h-5 text-[#4A8DFB] flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Application Deadline</div>
                  <div className="text-[#A0AEC0] text-sm">Open until filled</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#F8FBFF] rounded-xl p-5">
                <Mail className="w-5 h-5 text-[#4A8DFB] flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Only Shortlisted Candidates</div>
                  <div className="text-[#A0AEC0] text-sm">Will be contacted</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-amber-50 border border-amber-200 rounded-xl p-6 mb-16">
              <ShieldAlert className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <p className="text-amber-900 text-sm leading-relaxed">
                <span className="font-bold">We do not charge for recruitment.</span> Do not pay anyone claiming to
                offer you a job at Keyo Ltd. Report any such requests to{" "}
                <a href="mailto:info@keyo.co.ke" className="underline">
                  info@keyo.co.ke
                </a>
                .
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#5A8DEE] to-[#F8FBFF] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Apply online below, or reach out directly — we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
                  <Link href="/careers/apply">Apply Now</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-700 text-sm">
                <a href="mailto:info@keyo.co.ke" className="flex items-center gap-2 hover:text-[#4A8DFB]">
                  <Mail className="w-4 h-4" />
                  info@keyo.co.ke
                </a>
                <a href="tel:+254720204403" className="flex items-center gap-2 hover:text-[#4A8DFB]">
                  <Phone className="w-4 h-4" />
                  +254 720 204403
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
