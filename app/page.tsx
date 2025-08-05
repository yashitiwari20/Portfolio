"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Play,
  Award,
  Camera,
  Film,
  Mail,
  Phone,
  MapPin,
  InstagramIcon,
  Linkedin,
  Twitter,
  LinkedinIcon,
  Menu,
  FacebookIcon,
  X,
  ArrowUp,
   XCircle,
} from "lucide-react"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaImdb, FaEnvelope } from "react-icons/fa"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
const [modalImage, setModalImage] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "gallery", "experience", "testimonials", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Awards Won" },
    { number: "100+", label: "Happy Clients" },
  ]

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Cinematography",
      description:
        "Professional cinematography for films, documentaries, and commercial projects with artistic vision.",
      features: ["4K/8K Recording", "Drone Cinematography", "Color Grading", "Post Production"],
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Direction of Photography",
      description: "Complete DOP services for feature films, web series, and high-end commercial productions.",
      features: ["Lighting Design", "Camera Operation", "Visual Storytelling", "Team Management"],
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Event Coverage",
      description: "Comprehensive coverage of sports events, corporate functions, and special occasions.",
      features: ["Multi-Camera Setup", "Live Streaming", "Highlight Reels", "Documentary Style"],
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Film Director",
      content:
        "Neeraj's cinematography brought our vision to life. His technical expertise and creative eye are unmatched.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Producer",
      content:
        "Working with Neeraj was a game-changer for our project. His professionalism and dedication are exceptional.",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      role: "Sports Director",
      content: "Neeraj captured the Olympics with such precision and artistry. Truly a master of his craft.",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
    
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrollY > 50 ? "text-gray-900" : "text-white"
              }`}
            >
              Neeraj Tiwari
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Gallery", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-yellow-500 ${
                    scrollY > 50 ? "text-gray-700" : "text-white"
                  } ${activeSection === item.toLowerCase() ? "text-yellow-500 font-semibold" : ""}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-300 ${scrollY > 50 ? "text-gray-900" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Services", "Gallery", "Experience",  "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=cinematic%20camera%20equipment%20professional%20film%20set)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Capturing Stories
              <span className="block text-yellow-400">Through the Lens</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Director of Photography with 20+ years of experience in films, documentaries, and international events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#gallery">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                View My Work
              </Button>
            </a>

             <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#contact">
    <Button
      size="lg"
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-black bg-transparent"
    >
      Get In Touch
    </Button>
  </a>
</div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm <strong>Neeraj Tiwari</strong>, a Director of Photography with over two decades of experience in
                visual storytelling. My journey has taken me from the sets of critically acclaimed Indian films to
                international sporting events like the Olympics and Cricket World Cup.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I specialize in blending technical expertise with artistic vision to create compelling visual narratives
                that resonate with audiences worldwide. My work spans across films, documentaries, commercial campaigns,
                and live event coverage.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Cinematography", "Color Grading", "Lighting Design", "Post Production", "Live Events"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/im1.jpeg"
                alt="Neeraj Tiwari"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-xl shadow-lg">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-bold">20+ Years</div>
                <div className="text-sm">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive visual storytelling services tailored to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
 <section id="gallery" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Portfolio Gallery</h2>
      <p className="text-xl text-gray-600">A showcase of my recent work and projects</p>
    </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["im1.jpeg", "im2.jpeg", "im3.jpeg", "im10.jpeg", "im5.jpeg", "im6.jpeg","im7.jpeg","im8.jpeg","im9.jpeg"].map((filename, index) => (
               <div key={index} className="group relative overflow-hidden rounded-xl h-64">
                <img
                  src={`/images/${filename}`}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => setModalImage(`/images/${filename}`)}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    onClick={() => setModalImage(`/images/${filename}`)}
                  >
                    View Full
                  </Button>
                </div>
              </div>))}
              </div>
  </div>
</section>
  {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white hover:text-yellow-400"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <img src={modalImage} alt="Full view" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Highlights</h2>
            <p className="text-xl text-gray-300">Major projects and achievements throughout my career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Films & Productions</h3>
              <div className="space-y-4">
                {["Kalrav", "Pattra", "Rebellious Flower", "Biskut"].map((film, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div>
                      <div className="font-semibold">{film}</div>
                      <div className="text-gray-400 text-sm">Feature Film</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">International Events</h3>
              <div className="space-y-4">
                {[
                  "Olympics - Greece",
                  "Cricket World Cup - South Africa",
                  "Asia Cup - Bangladesh",
                  "US Elections Coverage",
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div>
                      <div className="font-semibold">{event}</div>
                      <div className="text-gray-400 text-sm">Live Coverage</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
      <p className="text-lg text-gray-600">Have a project in mind? I’d love to hear from you.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-yellow-500 mt-1" />
          <a href="mailto:neeraj.tewari7@gmail.com" className="text-gray-700 hover:text-yellow-600 text-lg font-medium">
            neeraj.tewari7@gmail.com
          </a>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-yellow-500 mt-1" />
          <span className="text-gray-700 text-lg font-medium">+91 98330 34942</span>
        </div>
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
          <span className="text-gray-700 text-lg font-medium">Mumbai, India</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 pt-4">
          <a href="mailto:neeraj.tewari7@gmail.com" title="Email">
            <Button variant="outline" size="icon">
              <FaEnvelope className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.instagram.com/ntcinematographer" target="_blank" title="Instagram">
            <Button variant="outline" size="icon">
              <FaInstagram className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.facebook.com/share/1FCdh8aeEe/" target="_blank" title="Facebook">
            <Button variant="outline" size="icon">
              <FaFacebookF className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/neeraj-tiwari-4b050610" target="_blank" title="LinkedIn">
            <Button variant="outline" size="icon">
              <FaLinkedinIn className="w-5 h-5" />
            </Button>
          </a>
        <a href="https://www.imdb.com/user/ur77279362/" target="_blank" title="IMDb" rel="noopener noreferrer">
  <Button variant="outline" size="icon">
    {/* <svg viewBox="0 0 64 32" className="w-10 h-5" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="32" rx="4" ry="4" fill="#f5c518" />
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="black"
      >
        IMDb
      </text>
    </svg> */}
    <FaImdb className="w-5 h-5" />
  </Button>
</a>

        </div>
      </div>

      {/* Optional form block (leave out or enable later) */}
      {/* <Card className="p-8">...</Card> */}
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Neeraj Tiwari</h3>
          <p className="text-gray-400 mb-6">Director of Photography & Visual Storyteller</p>
          <p className="text-gray-500">© 2025 Neeraj Tiwari. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </main>
  )
}
