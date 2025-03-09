import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO, PT Maju Bersama",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Struktura telah membantu kami membangun kantor pusat baru dengan hasil yang luar biasa. Tim mereka sangat profesional dan selalu responsif terhadap kebutuhan kami. Proyek selesai tepat waktu dan sesuai anggaran.",
      rating: 5,
    },
    {
      name: "Siti Rahayu",
      role: "Pemilik, Rahayu Residence",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Saya sangat puas dengan layanan renovasi yang diberikan oleh Struktura. Mereka memahami visi saya dan mengimplementasikannya dengan sempurna. Hasilnya jauh melampaui ekspektasi saya.",
      rating: 5,
    },
    {
      name: "Hendra Wijaya",
      role: "Direktur Operasional, Hotel Pesona",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Renovasi hotel kami adalah proyek yang kompleks, tetapi tim Struktura menanganinya dengan sangat baik. Mereka memperhatikan setiap detail dan memberikan solusi kreatif untuk setiap tantangan.",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Apa Kata Klien Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang dikatakan klien tentang pengalaman mereka bekerja
            dengan Struktura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

