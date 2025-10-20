"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Moliva Travel Agency</h3>
          <p className="text-gray-400 text-sm">
            Moliva Travel Agency offers unique and memorable tours, providing rich experiences in the beautiful country of Moliva. <span className="text-green-500 font-semibold cursor-pointer">[+]</span>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 text-sm">No 234, Placer Loquen Marsei Niriva, Moliva.</p>
          <p className="text-gray-400 text-sm mt-2">+33 321-654-987 (Ext: 123)</p>
          <p className="text-gray-400 text-sm mt-2">Booking@example.com</p>
          <p className="text-gray-400 text-sm mt-2">www.example.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white">Moliva Travel</Link></li>
            <li><Link href="#" className="hover:text-white">About us</Link></li>
            <li><Link href="#" className="hover:text-white">Destinations</Link></li>
            <li><Link href="#" className="hover:text-white">Moliva Tours</Link></li>
            <li><Link href="#" className="hover:text-white">Travel insight</Link></li>
            <li><Link href="#" className="hover:text-white">Contact us</Link></li>
            <li><Link href="#" className="hover:text-white">Get the app</Link></li>
          </ul>
        </div>

        {/* Language & Currency */}
        <div>
          <h3 className="text-lg font-bold mb-4">Preferences</h3>
          <div className="flex flex-col space-y-2">
            <select className="bg-gray-800 text-gray-200 px-3 py-2 rounded border border-gray-700 focus:outline-none">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
            <select className="bg-gray-800 text-gray-200 px-3 py-2 rounded border border-gray-700 focus:outline-none">
              <option>USD (US Dollar)</option>
              <option>EUR (Euro)</option>
              <option>GBP (Pound)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2024 Moliva Travel Agency. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
