import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <main className="w-full">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
            About Nova Global Enterprises
          </h1>
          <p className="text-xl text-slate-600 animate-fade-in-up">
            A multi-commodity import and export trading company serving global and domestic markets with excellence
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              NOVA Global Enterprises is committed to facilitating seamless international trade and providing reliable
              bulk commodity supply solutions. We bridge markets across continents, ensuring quality, compliance, and
              customer satisfaction.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We specialize in import and export operations across multiple commodity categories, serving businesses and
              markets worldwide. Our operations span:
            </p>
            <ul className="space-y-3">
              {[
                "Cross-border commodity sourcing & distribution",
                "Bulk export of metals, poultry, minerals, and agricultural products",
                "International supply chain management",
                "Compliance-driven documentation & regulatory support",
                "Domestic and international market fulfillment",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Supply Network</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              With a robust network spanning import and export markets, we are equipped to handle large-scale commodity
              trade. Our expertise ensures quality materials at competitive prices, supported by international standards
              and regulatory compliance.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Multi-Commodity Expertise", desc: "Diverse product range across multiple industries" },
                { title: "International Experience", desc: "Proven track record in cross-border trade" },
                { title: "Quality Assurance", desc: "Stringent quality control on all commodities" },
                { title: "Responsive Support", desc: "Quick turnaround on inquiries and orders" },
                { title: "Compliance Ready", desc: "Full documentation and regulatory support" },
                { title: "Bulk Capacity", desc: "Handle large-scale orders with efficiency" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
