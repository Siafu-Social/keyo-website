"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        background: "linear-gradient(to bottom, #5A8DEE 0%, #F8FBFF 100%)",
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-on-scroll opacity-0">
            Build. Launch. Scale. Faster with Keyo.
          </h1>

          <p className="text-xl md:text-2xl text-[#F0F4FA] mb-12 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-200">
            We support innovators by helping them build and deploy applications faster — first to the market. Whether
            through co-ownership or full contracting, we bring your ideas to life with precision and speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0 animation-delay-400">
            <Button className="bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full px-8 py-6 text-lg" asChild>
              <Link href="#contact">Start Your Project</Link>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-[#4A8DFB] text-[#4A8DFB] bg-transparent hover:bg-[#4A8DFB] hover:text-white rounded-full px-8 py-6 text-lg"
              asChild
            >
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>

          <div className="mt-16 animate-on-scroll opacity-0 animation-delay-600">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#4A8DFB] mb-2">50+</div>
                  <div className="text-[#A0AEC0]">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#4A8DFB] mb-2">8+</div>
                  <div className="text-[#A0AEC0]">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#4A8DFB] mb-2">100%</div>
                  <div className="text-[#A0AEC0]">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
