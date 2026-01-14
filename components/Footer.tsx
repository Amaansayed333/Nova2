import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              NOVA
            </h3>
            <p className="text-slate-400">Global import and export of quality commodities</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/products#poultry" className="hover:text-blue-400 transition">
                  Poultry
                </Link>
              </li>
              <li>
                <Link href="/products#metals" className="hover:text-blue-400 transition">
                  Metals
                </Link>
              </li>
              <li>
                <Link href="/products#minerals" className="hover:text-blue-400 transition">
                  Minerals
                </Link>
              </li>
              <li>
                <Link href="/products#agri" className="hover:text-blue-400 transition">
                  Agriculture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2 items-start">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+91 9743668698</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>bnmuruli@gmail.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Sharadadevi Nagara, Tumakuru, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; 2026 Nova Global Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
