import { Building2, Hammer, PenTool, Ruler, Users, Wrench } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-yellow-500" />,
      title: "Konstruksi Bangunan",
      description: "Layanan konstruksi bangunan komersial dan residensial dengan standar kualitas tertinggi.",
    },
    {
      icon: <Ruler className="h-10 w-10 text-yellow-500" />,
      title: "Perencanaan & Desain",
      description: "Tim arsitek dan insinyur kami merancang solusi yang memenuhi kebutuhan spesifik Anda.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-yellow-500" />,
      title: "Renovasi",
      description: "Layanan renovasi komprehensif untuk meningkatkan nilai dan fungsionalitas properti Anda.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-yellow-500" />,
      title: "Perbaikan Struktural",
      description: "Perbaikan dan penguatan struktur bangunan untuk keamanan dan ketahanan jangka panjang.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-yellow-500" />,
      title: "Konsultasi Proyek",
      description: "Konsultasi ahli untuk membantu Anda merencanakan dan mengoptimalkan proyek konstruksi.",
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-500" />,
      title: "Manajemen Proyek",
      description: "Pengelolaan proyek yang efisien untuk memastikan penyelesaian tepat waktu dan sesuai anggaran.",
    },
  ]

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Layanan Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Struktura menyediakan berbagai layanan konstruksi berkualitas tinggi untuk memenuhi kebutuhan proyek Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

