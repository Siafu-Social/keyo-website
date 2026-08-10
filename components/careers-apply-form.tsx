"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Paperclip, AlertCircle } from "lucide-react"

const ROLE_OPTIONS = [
  { value: "store-manager", label: "Store Manager (Store Owner / Franchisee)" },
  { value: "sales-agent", label: "Sales Agent (Field Sales Representative)" },
  { value: "general", label: "General Application" },
]

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@keyo.co.ke"

export function CareersApplyForm() {
  const searchParams = useSearchParams()
  const initialRole = ROLE_OPTIONS.some((r) => r.value === searchParams.get("role"))
    ? (searchParams.get("role") as string)
    : "general"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: initialRole,
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) {
      setFile(null)
      return
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(selected.type)) {
      setFileError("Please upload a PDF or Word document (.pdf, .doc, .docx).")
      setFile(null)
      e.target.value = ""
      return
    }
    if (selected.size > MAX_FILE_SIZE) {
      setFileError("File is too large. Maximum size is 5MB.")
      setFile(null)
      e.target.value = ""
      return
    }

    setFileError("")
    setFile(selected)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setFileError("Please attach your CV/resume.")
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    const roleLabel = ROLE_OPTIONS.find((r) => r.value === formData.role)?.label ?? formData.role

    const payload = new FormData()
    payload.append("_subject", `New Job Application: ${roleLabel} — ${formData.name}`)
    payload.append("_template", "table")
    payload.append("_captcha", "false")
    payload.append("_honey", "")
    payload.append("Full Name", formData.name)
    payload.append("Email", formData.email)
    payload.append("Phone", formData.phone)
    payload.append("Position", roleLabel)
    payload.append("Message", formData.message)
    payload.append("resume", file)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setStatus("success")
    } catch (error) {
      console.error("Error submitting application:", error)
      setStatus("error")
      setErrorMessage(
        "Something went wrong sending your application. Please try again, or email your CV directly to info@keyo.co.ke.",
      )
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Received</h2>
        <p className="text-gray-700 leading-relaxed">
          Thanks for applying to Keyo Ltd. Our team will review your application and reach out only if you're
          shortlisted.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#E7F1FF] focus:outline-none focus:ring-2 focus:ring-[#4A8DFB] focus:border-transparent transition-all"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-[#E7F1FF] focus:outline-none focus:ring-2 focus:ring-[#4A8DFB] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+254 7XX XXX XXX"
            className="w-full px-4 py-3 rounded-lg border border-[#E7F1FF] focus:outline-none focus:ring-2 focus:ring-[#4A8DFB] focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
          Position
        </label>
        <select
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#E7F1FF] focus:outline-none focus:ring-2 focus:ring-[#4A8DFB] focus:border-transparent transition-all bg-white"
          required
        >
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Cover Message <span className="text-[#A0AEC0] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-[#E7F1FF] focus:outline-none focus:ring-2 focus:ring-[#4A8DFB] focus:border-transparent resize-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-900 mb-2">
          CV / Resume
        </label>
        <label
          htmlFor="resume"
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-dashed border-[#4A8DFB]/50 bg-[#F8FBFF] cursor-pointer hover:bg-[#F0F4FA] transition-colors"
        >
          <Paperclip className="w-5 h-5 text-[#4A8DFB] flex-shrink-0" />
          <span className="text-sm text-gray-700 truncate">
            {file ? file.name : "Click to upload PDF or Word document (max 5MB)"}
          </span>
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="sr-only"
          required
        />
        {fileError && <p className="text-red-600 text-sm mt-2">{fileError}</p>}
      </div>

      {status === "error" && (
        <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#4A8DFB] hover:bg-[#3A7DEB] text-white rounded-full py-6 text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Application...
          </span>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  )
}
