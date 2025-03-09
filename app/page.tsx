import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Consultation from "@/components/consultation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Services />
      <Projects />
      <About />
      <div id="testimonial">
        <Testimonials />
      </div>
      <Consultation />
      <Contact />
      <Footer />
    </main>
  )
}

