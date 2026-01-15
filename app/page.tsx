"use client"

import dynamic from "next/dynamic"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Shield, Zap } from "lucide-react"

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section with Solid Corporate Blue Background */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-blue-900">
          <div className="absolute inset-0 opacity-30 mix-blend-multiply">
            <Aurora colorStops={["#1e40af", "#3b82f6", "#1e3a8a"]} amplitude={0.5} blend={0.4} speed={0.8} />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Live Border Badge */}
<div className="mb-12 inline-block">
  <div className="relative rounded-full p-[2px] overflow-hidden animate-border-spin">
    {/* Moving White Border */}
    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ffffff,#ffffff,#ffffff,#ffffff)]"></div>

    {/* Inner Content */}
    <div className="relative px-10 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-lg">
      <span className="text-lg md:text-xl font-bold text-white tracking-wide">
        Nova Global Enterprises
      </span>
    </div>
  </div>
</div>




          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Global Import & Export
            <br />
            Trading Solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium commodities across continents. Multi-commodity expertise in metals, poultry, agriculture, and
            minerals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Gradient Overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Global Trade Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Nova Global</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted partner for international bulk trade, commodity expertise, and cross-border operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Reach", desc: "Import & export capabilities across continents" },
              { icon: TrendingUp, title: "Bulk Trade", desc: "Large-scale commodity supply & sourcing" },
              { icon: Shield, title: "Compliance", desc: "Full documentation & regulatory readiness" },
              { icon: Zap, title: "Responsive", desc: "Quick turnaround on inquiries & orders" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Commodities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Multi-commodity expertise for both international and domestic markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Poultry Products",
                image: "🐔",
                desc: "Hatching eggs, day-old chicks, poultry feed & medicines",
              },
              { title: "Metals & Aluminium", image: "⚙️", desc: "Borings, cable wire, ingots, turnings & more" },
              { title: "Minerals & Ores", image: "⛏️", desc: "Iron ore, bauxite, laterite & other mineral exports" },
              {
                title: "Agriculture & Food",
                image: "🌾",
                desc: "Rice varieties, masalas, cereals, copra & agri products",
              },
            ].map((cat, i) => (
              <Link key={i} href="/products">
                <div className="p-8 rounded-xl bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="text-5xl mb-4">{cat.image}</div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600">{cat.desc}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all gap-0">
                    Learn more <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Import or Export?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our professional team for bulk trade inquiries, business partnerships, and service requests
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
