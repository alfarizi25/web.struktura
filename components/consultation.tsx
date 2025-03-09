"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"

// Ganti dengan ID Anda dari EmailJS
const SERVICE_ID = "service_tf9al7s" // contoh: service_abc123
const TEMPLATE_ID = "template_p8qgfdr" // contoh: template_xyz789
const PUBLIC_KEY = "YxuRQCsGkW9G-QmcY" // contoh: user_abcdefg123456

export default function Consultation() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null as string | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset status
    setFormStatus({
      submitting: true,
      success: false,
      error: null,
    })

    try {
      // Validasi form sederhana
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error("Nama, email, dan nomor telepon wajib diisi")
      }

      if (!formRef.current) {
        throw new Error("Form reference is not available")
      }

      // Kirim email menggunakan EmailJS
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)

      if (result.status !== 200) {
        throw new Error("Terjadi kesalahan saat mengirim form")
      }

      // Sukses
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        submitting: false,
        success: false,
        error: error instanceof Error ? error.message : "Terjadi kesalahan saat mengirim form",
      })
    }
  }

  return (
    <section id="konsultasi" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Konsultasi Gratis</h2>
            <p className="mt-4 text-xl text-gray-600">
              Jadwalkan konsultasi gratis dengan tim ahli kami untuk mendiskusikan proyek konstruksi Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="bg-gray-900 text-white p-8 lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Keuntungan Konsultasi</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Perencanaan Proyek</h4>
                      <p className="text-gray-300 mt-1">
                        Dapatkan panduan ahli untuk merencanakan proyek Anda dengan efektif.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Estimasi Waktu & Biaya</h4>
                      <p className="text-gray-300 mt-1">
                        Pahami perkiraan waktu dan biaya yang dibutuhkan untuk proyek Anda.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Dukungan Langsung</h4>
                      <p className="text-gray-300 mt-1">
                        Diskusikan kebutuhan spesifik Anda langsung dengan tim ahli kami.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="font-semibold mb-2">Hubungi Kami Langsung</h4>
                  <p className="text-gray-300">Telepon: +62 895-349-90050</p>
                  <p className="text-gray-300">Email: kontak.struktura@gmail.com</p>
                </div>
              </div>

              <div className="p-8 lg:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Isi Formulir Konsultasi</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                        Jenis Proyek
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Pilih jenis proyek</option>
                        <option value="Konstruksi Baru">Konstruksi Baru</option>
                        <option value="Renovasi">Renovasi</option>
                        <option value="Perbaikan">Perbaikan</option>
                        <option value="Konsultasi">Konsultasi</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Deskripsi Proyek
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ceritakan tentang proyek yang Anda rencanakan"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? "Mengirim..." : "Jadwalkan Konsultasi Gratis"}
                  </Button>

                  {formStatus.success && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                      Terima kasih! Permintaan konsultasi Anda berhasil dikirim. Tim kami akan segera menghubungi Anda.
                    </div>
                  )}

                  {formStatus.error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{formStatus.error}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

