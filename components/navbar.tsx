"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const services = [
  { name: "Web Applications Development", href: "/services/web-applications" },
  { name: "Mobile App Development", href: "/services/mobile-apps" },
  { name: "CRM & ERP Solutions", href: "/services/crm-erp" },
  { name: "Innovation & Product Acceleration", href: "/services/innovation" },
  { name: "Outsourced Development", href: "/services/outsourced-development" },
  { name: "UI/UX & Product Design", href: "/services/ui-ux-design" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/logos/logo2.jpeg"
              alt="Keyo Limited"
              width={120}
              height={120}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#home" className="text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium">
              Home
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium">
              About Keyo
            </Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#clients" className="text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium">
              Clients
            </Link>
            <Link href="/#portfolio" className="text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#4A8DFB] transition-colors font-medium">
              Contact Keyo
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="hidden lg:block bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-6 transition-all hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href="/#contact">Get in Touch</Link>
            </Button>

            <button
              className="lg:hidden text-gray-700 hover:text-[#4A8DFB] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
            <Link
              href="/#home"
              className="px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
            >
              About Keyo
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block pl-12 pr-6 py-2 text-sm text-gray-600 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#clients"
              className="px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
            >
              Clients
            </Link>
            <Link
              href="/#portfolio"
              className="px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 text-gray-700 hover:bg-[#F8FBFF] hover:text-[#4A8DFB] transition-colors rounded-lg"
            >
              Contact Keyo
            </Link>

            <div className="px-6 pt-2">
              <Button className="w-full bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
