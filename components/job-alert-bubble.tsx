"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Briefcase, X } from "lucide-react"

const DISMISS_KEY = "keyo-job-alert-dismissed"
const SHOW_DELAY_MS = 2500

export function JobAlertBubble() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pathname?.startsWith("/careers")) return
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(DISMISS_KEY)) return

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [pathname])

  if (pathname?.startsWith("/careers") || !visible) return null

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(DISMISS_KEY, "1")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm animate-scale-in">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-[#E7F1FF] p-5">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#66A9FF]/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#4A8DFB]" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A8DFB] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4A8DFB]" />
            </span>
          </div>

          <div className="pr-4">
            <h3 className="font-bold text-gray-900 mb-1">We're Hiring!</h3>
            <p className="text-sm text-[#A0AEC0] leading-relaxed mb-3">
              Store Manager & Sales Agent roles open now in Nairobi.
            </p>
            <Link
              href="/careers"
              onClick={dismiss}
              className="inline-block text-sm font-semibold text-[#4A8DFB] hover:text-[#3A7DEB] transition-colors"
            >
              View Openings →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
