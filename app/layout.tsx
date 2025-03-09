"use client"

import type React from "react"

import { useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import emailjs from "@emailjs/browser"

const inter = Inter({ subsets: ["latin"] })

// Ganti dengan Public Key Anda dari EmailJS
const PUBLIC_KEY = "YxuRQCsGkW9G-QmcY" // contoh: user_abcdefg123456

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Inisialisasi EmailJS
    emailjs.init(PUBLIC_KEY)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

