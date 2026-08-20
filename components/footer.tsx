import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer
      className="py-16 text-white"
      style={{
        background: "linear-gradient(to bottom, #1A2E55 0%, #0D1B3E 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4 inline-block bg-white rounded-xl p-3">
              <Image
                src="/logos/NewLogo.png"
                alt="Keyo Limited"
                width={180}
                height={120}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-[#DDE7F6] leading-relaxed">Building the future, one application at a time.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-[#DDE7F6] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#DDE7F6] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-[#DDE7F6] hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-[#DDE7F6] hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#DDE7F6] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#DDE7F6] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-[#DDE7F6]">
          <p>© 2025 Keyo Limited. All rights reserved.</p>
          <span className="hidden sm:inline">·</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
