"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"
import { Check, Loader2, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"



const Contact = () => {
  const router = useRouter()
  const servicesLink = NAV_LINKS.find((link) => link.key === "services")
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    company: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  
  const serviceId = "service_6qfa4gu"
  const templateId = "template_bvr9dm3"
  const publicKey = "Ybn9JtQ7yBDp317Hr"

  
  useEffect(() => {
    emailjs.init(publicKey)
  }, [publicKey])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))

    if (errors.service) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.service
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fName.trim()) newErrors.fName = "First name is required"
    if (!formData.lName.trim()) newErrors.lName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const redirectToHome = () => {
    router.push("/")
  }

  const handleClosePopup = () => {
    setShowSuccess(false)
    redirectToHome()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    const templateParams = {
      from_name: `${formData.fName} ${formData.lName}`,
      to_name: "AJ Apex Media",
      fName: formData.fName,
      lName: formData.lName,
      Message: formData.message,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      company: formData.company,
    }

    
    emailjs
      .send(serviceId, templateId, templateParams)
      .then(() => {
        setFormData({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          message: "",
          service: "",
          company: "",
        })
        setIsLoading(false)
        setShowSuccess(true)

        
        setTimeout(() => {
          setShowSuccess(false)
          redirectToHome()
        }, 5000)
      })
      .catch((error) => {
        console.error("EmailJS error:", error)
        setIsLoading(false)
        alert("There was an error sending your message. Please try again.")
      })
  }

  return (
    <div className="min-h-screen bg-sky-950 text-white pt-28 pb-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center   bg-gradient-to-r from-purple-400 via-orange-500 to-blue-500 mb-4">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">
                Get in Touch:{" "}
                <span className="bg-gradient-to-r from-purple-400 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                  We&apos;re Here to Answer Your Questions
                </span>
              </h2>
            </div>

           
            <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden my-5 hidden md:block">
              <Image
                src="/talk.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
              
              <div className="absolute inset-0 bg-sky-900/60 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Let&apos;s Talk</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 bg-sky-900/50 p-2 rounded-lg">
                <div className="bg-sky-800 p-1.5 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-xs">inquiries@ajmedia.co.ke</span>
              </div>

              <div className="flex items-center gap-2 bg-sky-900/50 p-2 rounded-lg">
                <div className="bg-sky-800 p-1.5 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-xs">+254791160159</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div>
                <h3 className="text-base font-semibold mb-1">Customer Support</h3>
                <p className="text-sky-200 text-xs">
                  Our support team is available around the clock to help you with any queries
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1">Feedback and Suggestions</h3>
                <p className="text-sky-200 text-xs">
                  We value your important feedbacks and are continuously working towards improving ourselves to help you
                  better.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-sky-900/30 p-4 rounded-xl border border-sky-800/50 max-w-sm mx-auto mt-4 lg:mt-0">
              <div className="mb-3">
                <h2 className="text-xl font-bold">Get in Touch</h2>
                <p className="text-sky-200 text-xs mt-0.5">You can reach us anytime</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <Input
                      id="fName"
                      name="fName"
                      value={formData.fName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={`bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm ${errors.fName ? "border-red-500" : ""}`}
                    />
                    {errors.fName && <p className="text-red-400 text-xs mt-0.5">{errors.fName}</p>}
                  </div>

                  <div>
                    <Input
                      id="lName"
                      name="lName"
                      value={formData.lName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={`bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm ${errors.lName ? "border-red-500" : ""}`}
                    />
                    {errors.lName && <p className="text-red-400 text-xs mt-0.5">{errors.lName}</p>}
                  </div>
                </div>

                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone no"
                    className={`bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm"
                  />
                </div>

                {servicesLink && servicesLink.subLinks && (
                  <div>
                    <Select value={formData.service} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        id="service"
                        className={`bg-sky-900/30 border-sky-700 focus:border-orange-500 h-8 text-sm ${errors.service ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicesLink.subLinks.map((subLink) => (
                          <SelectItem key={subLink.key} value={subLink.href}>
                            {subLink.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-red-400 text-xs mt-0.5">{errors.service}</p>}
                  </div>
                )}

                <div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`min-h-[100px] bg-sky-900/30 border-sky-700 focus:border-orange-500 text-sm ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-1.5 text-sm rounded-md"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. Someone from our team will be in touch with you shortly.
              </p>
              <Button onClick={handleClosePopup} className="bg-sky-950 hover:bg-sky-900">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact

