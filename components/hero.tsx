"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg?height=1080&width=1920"
          alt="Construction site"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-5xl">
            <span className="block">Membangun Masa Depan</span>
            <span className="block text-yellow-400">Dengan Keunggulan</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            Struktura hadir sebagai mitra terpercaya dalam mewujudkan proyek konstruksi Anda. Kami menggabungkan
            keahlian teknis dengan inovasi untuk memberikan hasil berkualitas tinggi.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              onClick={() => {
                const element = document.getElementById("layanan")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Lihat Layanan Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-black font-bold hover:bg-gray-200 hover:text-gray-500"
              onClick={() => {
                const element = document.getElementById("konsultasi")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

