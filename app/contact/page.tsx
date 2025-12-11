"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    // Show success dialog
    setShowSuccess(true)
    
    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4E12AQGwb93QWyloRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691386502549?e=2147483647&v=beta&t=CAn6ylvz9UdSYLaIrfHu8xBlJoUkkmw_krtoKBbT_Q4')",
            opacity: 0.3,
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/50" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      {/* <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Quick Answers?</h2>
          <p className="text-muted-foreground mb-8">Check out our documentation and FAQ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">View Documentation</Button>
            <Button variant="outline">See FAQ</Button>
          </div>
        </div>
      </section> */}

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
            </div>
            <DialogTitle className="text-2xl">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowSuccess(false)} className="px-8">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
