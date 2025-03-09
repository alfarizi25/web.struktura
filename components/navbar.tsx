"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Simplified navigation links - only the most important ones
  const navLinks = [
    { name: "Layanan", href: "layanan" },
    { name: "Proyek", href: "proyek" },
    { name: "Kontak", href: "kontak" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="#home" onClick={() => scrollToSection("home")} className="flex items-center space-x-2">
            {/* Logo placeholder - replace with your actual logo */}
            <div className="relative w-10 h-10">
              <Image src="/logoTrs.png?height=40&width=40" alt="Struktura Logo" fill className="object-contain" />
            </div>
            <span className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-gray-900" : "text-white")}>
              STRUKTURA
            </span>
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "font-medium transition-colors hover:text-yellow-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("konsultasi")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded-md focus:outline-none", isScrolled ? "text-gray-900" : "text-white")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Simplified */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 top-16">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-800 font-medium hover:text-yellow-500 py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("konsultasi")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

