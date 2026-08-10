"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const clients = [
  { name: "My Select", logo: "/logos/My-Select.png", hasLogo: true },
  { name: "MaxCare Products Ltd", logo: "/logos/MaxCare.png", hasLogo: true },
  { name: "Likizo Essentials Ltd", logo: "/logos/Likizo-Essentials.png", hasLogo: true },
  { name: "Brush Manufacturers Ltd", logo: "/logos/TeepeeLogo.png", hasLogo: true },
  { name: "Traveda Ltd", logo: "/logos/Traveda.jpeg", hasLogo: true },
  { name: "Traco Hauliers Ltd", logo: "/logos/TracoLogo2.png", hasLogo: true },
  { name: "Sparkle Brands Limited", logo: "/logos/SparkleBrandsLimited.png", hasLogo: true },
  { name: "Maxim Distributors", logo: "", hasLogo: false },
  { name: "Marsyetu Ltd", logo: "/logos/Marsyetu.png", hasLogo: true },
]

export function Clients() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isPausedRef = useRef(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = scrollContainer.scrollLeft
    const scrollSpeed = 1

    const scroll = () => {
      if (isPausedRef.current) return
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="clients" ref={sectionRef} className="py-24 bg-[#F9FBFF] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-xl text-[#A0AEC0]">We're trusted by leading brands and innovators</p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
                title={client.name}
              >
                {client.hasLogo ? (
                  <div className="relative w-full h-24 flex items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="text-lg font-bold text-center text-gray-400 group-hover:text-[#4A8DFB] transition-colors duration-300">
                    {client.name}
                  </div>
                )}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
