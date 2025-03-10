"use client"

import type React from "react"
import { useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import emailjs from "@emailjs/browser"

const inter = Inter({ subsets: ["latin"] })

// Ganti dengan Public Key Anda dari EmailJS
const PUBLIC_KEY = "YOUR_PUBLIC_KEY" // contoh: user_abcdefg123456

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Inisialisasi EmailJS
    if (PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs.init(PUBLIC_KEY)
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

