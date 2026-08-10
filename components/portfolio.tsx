"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    name: "Riseller",
    clients: ["MySelect", "Maxim", "Likizo", "Marsyetu"],
    category: "ERP & CRM System",
    description:
      "An integrated business management system that combines ERP functionality (invoicing, POS, orders) with CRM capabilities (customer relationship tracking and engagement).",
    image: "/logos/Riseller.png",
  },
  {
    name: "Odda",
    clients: ["MaxCare", "Brush Manufacturers"],
    category: "Order Aggregation Platform",
    description:
      "An order aggregation platform that streamlines order processing and management across multiple channels.",
    image: "/logos/Odda.png",
  },
  {
    name: "Traveda Visa Booking",
    clients: ["Traveda"],
    category: "Booking Platform",
    description:
      "A provisional itinerary booking platform specifically designed for visa applications, making the travel documentation process seamless and efficient.",
    image: "/logos/Traveda.jpeg",
  },
  {
    name: "Traco Logistics Platform",
    clients: ["Traco"],
    category: "Transport Management System",
    description:
      "A comprehensive transport management system designed to streamline the movement of steel coils from port stations to customer destinations. The platform centralizes vessel arrivals, coil inventory, dispatch planning, and delivery tracking, ensuring full visibility across every stage of transport operations. It enables Traco to efficiently assign drivers, manage customer orders, generate invoices, and monitor real-time delivery status — all within a unified digital environment.",
    image: "/logos/TracoLogo2.png",
  },
]

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-[#A0AEC0] max-w-2xl mx-auto">
            Explore some of our recent projects and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#F8FBFF] to-white overflow-hidden flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#4A8DFB] font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-[#A0AEC0] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.clients.map((client, idx) => (
                    <span key={idx} className="text-xs bg-[#F8FBFF] text-[#4A8DFB] px-3 py-1 rounded-full font-medium">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
