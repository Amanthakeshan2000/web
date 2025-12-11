"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/developers", label: "Developers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:grid md:grid-cols-3">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              🔐
            </div>
            SureID
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Empty or CTA Buttons */}
          <div className="hidden md:flex items-center justify-end">
            {/* <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Request API Key</Button>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-center hover:bg-muted rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <div className="flex flex-col gap-2 pt-4 px-4">
              <Button variant="outline" className="w-full bg-transparent">
                Sign In
              </Button>
              <Button className="w-full">Request API Key</Button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  )
}
