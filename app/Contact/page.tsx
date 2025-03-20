"use client"

import type React from "react"

import { NAV_LINKS } from "@/constants"
import { useState } from "react"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
      .send(serviceId, templateId, templateParams, publicKey)
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

        // Auto-redirect after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
          redirectToHome()
        }, 5000)
      })
      .catch(() => {
        setIsLoading(false)
        alert("There was an error sending your message. Please try again.")
      })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-sky-50 to-orange-50 py-12 px-4">
      <Card className="w-full max-w-xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-sky-900">Get in Touch</CardTitle>
          <CardDescription className="text-lg mt-2">
            Fill out the form below and we will get back to you soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fName">First Name</Label>
                <Input
                  id="fName"
                  name="fName"
                  value={formData.fName}
                  onChange={handleChange}
                  placeholder="John"
                  className={errors.fName ? "border-red-500" : ""}
                />
                {errors.fName && <p className="text-red-500 text-sm">{errors.fName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lName">Last Name</Label>
                <Input
                  id="lName"
                  name="lName"
                  value={formData.lName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={errors.lName ? "border-red-500" : ""}
                />
                {errors.lName && <p className="text-red-500 text-sm">{errors.lName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Ltd."
              />
            </div>

            {servicesLink && servicesLink.subLinks && (
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select value={formData.service} onValueChange={handleSelectChange}>
                  <SelectTrigger id="service" className={errors.service ? "border-red-500" : ""}>
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
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 bg-sky-800 hover:bg-sky-700 text-white font-medium text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      
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
              <Button onClick={handleClosePopup} className="bg-sky-800 hover:bg-sky-700">
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

