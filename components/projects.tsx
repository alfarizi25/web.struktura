import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Gedung Perkantoran Modern",
      category: "Konstruksi Komersial",
      image: "/placeholder.svg?height=600&width=800",
      description: "Pembangunan gedung perkantoran 12 lantai dengan desain modern dan efisiensi energi.",
    },
    {
      title: "Perumahan Eksklusif",
      category: "Konstruksi Residensial",
      image: "/placeholder.svg?height=600&width=800",
      description: "Pengembangan kompleks perumahan eksklusif dengan 50 unit rumah dan fasilitas lengkap.",
    },
    {
      title: "Renovasi Hotel Heritage",
      category: "Renovasi",
      image: "/placeholder.svg?height=600&width=800",
      description: "Renovasi menyeluruh hotel bersejarah dengan mempertahankan nilai arsitektur aslinya.",
    },
  ]

  return (
    <section id="proyek" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Proyek Unggulan</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat beberapa proyek terbaik yang telah kami selesaikan dengan standar kualitas tertinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-yellow-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gray-900 hover:bg-gray-800">Lihat Semua Proyek</Button>
        </div>
      </div>
    </section>
  )
}

