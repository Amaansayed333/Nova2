import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export default function Contact() {
  return (
    <main className="w-full">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">Get in Touch</h1>
          <p className="text-xl text-slate-600 animate-fade-in-up">
            For import, export, and bulk trade inquiries, contact our professional team
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Nova Global Enterprises</h2>
              <p className="text-slate-600 mb-8">
                For business inquiries, partnerships, and service requests, reach out to us today.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="animate-fade-in-up p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Address</h3>
                    <p className="text-slate-700">
                      Sharadadevi Nagara, Tumakuru
                      <br />
                      Karnataka – 572103
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="animate-fade-in-up p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg transition-all"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex gap-4 items-start">
                  <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Phone</h3>
                    <p className="text-slate-700">+91 9743668698</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="animate-fade-in-up p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg transition-all"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex gap-4 items-start">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Email</h3>
                    <p className="text-slate-700">bnmuruli@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Business Type */}
              <div
                className="animate-fade-in-up p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg transition-all"
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex gap-4 items-start">
                  <Globe className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Business Inquiries</h3>
                    <p className="text-slate-700">
                      For business inquiries, partnerships, and service requests, please contact us via phone or email.
                      Our professional team is always ready to assist you with reliable and timely responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="animate-fade-in-up">
            <div className="sticky top-24 space-y-6">
              {/* Placeholder for Map */}
              <div className="w-full h-96 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden border border-slate-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8265256470246!2d77.11516!3d13.816533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbeb3c0ae89%3A0x123456789!2sTumakuru%2C%20Karnataka%20572103!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Response */}
              <div className="p-6 bg-blue-600 text-white rounded-lg">
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-blue-100 mb-4">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>✓ Professional team support</li>
                  <li>✓ Bulk trade expertise</li>
                  <li>✓ International compliance ready</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiries CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Do Business?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Reach out to our team today for import, export, and bulk trade discussions
          </p>
          <a
            href="mailto:bnmuruli@gmail.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
          >
            Send Email Inquiry
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
