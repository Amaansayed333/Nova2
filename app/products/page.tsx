"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import CarouselAdvanced from "@/components/ui/carousel-advanced"
import { useState } from "react"

export default function Products() {
  type CategoryKey = "poultry" | "metals" | "minerals" | "agri" | "realestate"
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("poultry")

  const categories = {
    poultry: {
      title: "Poultry Products",
      subtitle: "Import & Export of Poultry Products",
      image: "🐔",
      products: [
        "Cobb 430Y Hatching Eggs",
        "Hatching Eggs",
        "Day-Old Chicks",
        "Poultry Feed",
        "Poultry Medicines",
        "Complete Poultry Product Supply",
      ],
      note: "Supplied for domestic and international markets, subject to regulatory approvals.",
      slides: [
        {
          title: "Cobb 430Y Hatching Eggs",
          button: "Learn More",
          src: "/poultry/poultry1.jpg",
        },
        {
          title: "Day-Old Chicks",
          button: "Learn More",
          src: "/poultry/poultry2.jpg",
        },
        {
          title: "Poultry Feed",
          button: "Learn More",
          src: "/poultry/poultry3.jpeg",
        },
        {
          title: "Premium Poultry Supply",
          button: "Learn More",
          src: "/poultry/poultry4.jpeg",
        },
      ],
    },
    metals: {
      title: "Metals & Aluminium",
      subtitle: "Aluminium Products – Import & Export",
      image: "⚙️",
      products: ["Aluminium Borings", "Aluminium Cable Wire", "Aluminium Ingots", "Aluminium Turnings"],
      note: "Bulk quantities available for import and export trade.",
      slides: [
        {
          title: "Aluminium Ingots",
          button: "Learn More",
          src: "/mentals/mentals1.jpg",
        },
        {
          title: "Aluminium Cable Wire",
          button: "Learn More",
          src: "/mentals/mentals2.jpg",
        },
        {
          title: "Aluminium Borings",
          button: "Learn More",
          src: "/mentals/mentals3.jpg",
        },
        {
          title: "Industrial Metal Supply",
          button: "Learn More",
          src: "/mentals/mentals1.jpg",
        },
      ],
    },
    minerals: {
      title: "Minerals & Ores",
      subtitle: "Minerals & Ores – Export Trade",
      image: "⛏️",
      products: ["Iron Ore", "Bauxite Ore", "Laterite Ore (various grades)"],
      note: "Exported as per international quality and grading requirements.",
      slides: [
        {
          title: "Iron Ore",
          button: "Learn More",
          src: "/minerals/minerals1.jpg",
        },
        {
          title: "Bauxite Ore",
          button: "Learn More",
          src: "/minerals/minerals2.jpg",
        },
        {
          title: "Laterite Ore",
          button: "Learn More",
          src: "/minerals/minerals3.jpeg",
        },
        {
          title: "Premium Mineral Exports",
          button: "Learn More",
          src: "/minerals/minerals4.jpeg",
        },
      ],
    },
    agri: {
      title: "Agriculture & Food",
      subtitle: "Agri & Food Commodities – Import & Export",
      image: "🌾",
      products: [
        "Sona Rice",
        "IR64 Rice",
        "Broken Rice",
        "Basmati Rice",
        "Boiled Rice",
        "Banumathi Rice",
        "Indian Masala Spices",
        "Cereals",
        "Dry Copra",
        "Ball Copra",
      ],
      note: "Suitable for export markets and bulk domestic supply.",
      slides: [
        {
          title: "Premium Basmati Rice",
          button: "Learn More",
          src: "/food/food.jpeg",
        },
        {
          title: "Indian Masala Spices",
          button: "Learn More",
          src: "/food/food2.jpeg",
        },
        {
          title: "Fresh Harvest Cereals",
          button: "Learn More",
          src: "/food/food3.jpg",
        },
        {
          title: "Organic Coconut Products",
          button: "Learn More",
          src: "/food/food4.jpg",
        },
      ],
    },
    realestate: {
      title: "Real Estate Services",
      subtitle: "Professional Construction & Advisory Services",
      image: "🏗️",
      products: [
        "Construction Services",
        "Real Estate Consultancy",
        "Project Advisory",
      ],
      note: "Allowed under NIC. Non-export services.",
      slides: [
        {
          title: "Construction Services",
          button: "Learn More",
          src: "/estate/esate1.jpg",
        },
        {
          title: "Real Estate Consultancy",
          button: "Learn More",
          src: "/estate/esate2.jpg",
        },
        {
          title: "Project Advisory",
          button: "Learn More",
          src: "/estate/esate1.jpg",
        },
        {
          title: "Urban Development",
          button: "Learn More",
          src: "/estate/esate2.jpg",
        },
      ],
    },
  }

  const current = categories[activeCategory]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">Our Products</h1>
          <p className="text-xl text-slate-600 animate-fade-in-up">
            Multi-commodity export & import solutions for global markets
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as CategoryKey)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Content */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex justify-center">
            <CarouselAdvanced slides={current.slides} />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="text-7xl md:text-8xl">{current.image}</div>

            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-2 animate-fade-in-up">{current.title}</h2>
              <p className="text-lg text-blue-600 font-semibold mb-8 animate-fade-in-up">{current.subtitle}</p>

              <div className="mb-8 animate-fade-in-up">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Available Products:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {current.products.map((product, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
                    >
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-slate-700">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded animate-fade-in-up">
                <p className="text-slate-700 italic">{current.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trade CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Bulk Orders?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Contact our team for trade inquiries, pricing, and international export arrangements
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
          >
            Submit Inquiry
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
