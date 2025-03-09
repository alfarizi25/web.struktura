import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const values = [
    "Kualitas tanpa kompromi",
    "Keselamatan sebagai prioritas utama",
    "Inovasi berkelanjutan",
    "Ketepatan waktu dan anggaran",
    "Kepuasan klien",
  ]

  return (
    <section id="tentang" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Tentang Struktura</h2>
            <p className="text-gray-300 text-lg mb-6">
              Struktura adalah perusahaan konstruksi terkemuka dengan pengalaman lebih dari 15 tahun dalam industri.
              Kami berkomitmen untuk memberikan layanan konstruksi berkualitas tinggi dengan fokus pada keunggulan,
              inovasi, dan kepuasan klien.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Tim kami terdiri dari para profesional berpengalaman yang berdedikasi untuk mewujudkan visi Anda menjadi
              kenyataan. Dengan kombinasi keahlian teknis, kreativitas, dan perhatian terhadap detail, kami menghadirkan
              solusi konstruksi yang melebihi harapan.
            </p>

            <h3 className="text-xl font-bold mb-4 text-yellow-400">Nilai-Nilai Kami</h3>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=1000&width=800" alt="Tim Struktura" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

