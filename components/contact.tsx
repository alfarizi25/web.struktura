import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hubungi Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda dengan kebutuhan konstruksi. Hubungi kami melalui salah satu kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
              <Phone className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
            <p className="text-gray-600 mb-4">Senin - Jumat: 08.00 - 17.00</p>
            <a href="tel:+62211234567" className="text-yellow-600 font-semibold hover:underline">
            +62 895-349-90050
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Kami akan merespons dalam 24 jam</p>
            <a href="mailto:info@struktura.com" className="text-yellow-600 font-semibold hover:underline">
              kontak.struktura@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kantor</h3>
            <p className="text-gray-600 mb-4">Kunjungi kantor pusat kami</p>
            <address className="not-italic text-yellow-600 font-semibold">
              Jl. Konstruksi No. 123
              <br />
              Jakarta Selatan, 12345
            </address>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            {/* In a real implementation, this would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600 font-medium">Peta Lokasi Kantor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

