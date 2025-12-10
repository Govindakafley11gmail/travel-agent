"use client"

import Link from "next/link"
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Lumora Tours and Travel</h3>
          <p className="text-gray-400 text-sm">
            Lumora Tours and Travel offers unique and memorable tours, providing rich experiences in the beautiful country of Lumora Tours and Travel. <span className="text-green-500 font-semibold cursor-pointer">[+]</span>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 text-sm">Lumora Tours and Travel.</p>
          <p className="text-gray-400 text-sm mt-2">Taba,Thimphu,Bhutan</p>
          <p className="text-gray-400 text-sm mt-2">+975-77893346</p>
          <p className="text-gray-400 text-sm mt-2">info@lumorabhutan.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white">Lumora Tours and Travel Travel</Link></li>
            <li><Link href="All-Trips" className="hover:text-white">All-Trips</Link></li>
            <li><Link href="Blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link href="About-Us" className="hover:text-white">About-Us</Link></li>
            <li><Link href="E-Shop" className="hover:text-white">E-Shop</Link></li>
            <li><Link href="Contact-Us" className="hover:text-white">Contact us</Link></li>
            <li><Link href="Review-Us" className="hover:text-white">Review-Us</Link></li>
          </ul>
        </div>

        {/* Language & Currency */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Policies</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {/* <li>
              <a
                href="/faqs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                FAQs
              </a>
            </li> */}
            {/* <li>
              <a
                href="/terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Terms and Conditions
              </a>
            </li> */}
            <li>
              <a
                href="/Lumora Tours and Travels Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Travel Policy
              </a>
            </li>
            <li>
              <a
                href="/Lumora Tours & Travels_Business__License.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Legal Documents
              </a>
            </li>
          </ul>

        </div>

        {/* social media */}

      </div>
      <div className="w-full flex flex-col items-center mt-10 gap-12">

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold tracking-wide">SOCIAL MEDIA</h2>

          <div className="flex gap-6 text-gray-700">
            {[
              { src: "/instagram.png", link: "https://www.instagram.com/lumorabhutan/" },
              { src: "/facebook.png", link: "https://www.facebook.com/profile.php?id=61580366382758" },
              { src: "/linkedin.png", link: "https://www.linkedin.com/in/lumora-tours-and-travels-b0b535380" },

              // { src: "/twitter.png", link: "https://twitter.com/yourprofile" },
              { src: "/tik-tok.png", link: "https://www.tiktok.com/@lumora.bhutan?lang=en" },
              // { src: "/pinterest.png", link: "https://www.pinterest.com/yourprofile" }
            ].map((item, i) => (
              <div
                key={i}
                className="
          p-2 rounded-full cursor-pointer mt-5
          transition-all duration-300 
          hover:scale-110 hover:text-black hover:bg-gray-200
        "
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.src}
                    width={40}
                    height={40}
                    alt="Social Icon"
                    className="object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>


        {/* ASSOCIATED WITH SECTION */}
        <div className=" text-white  py-2 rounded-lg md:justify-center flex flex-col md:items-center gap-4">
          <p className="text-xl font-bold tracking-wide whitespace-nowrap text-center">
            We are associated with:
          </p>

          <div className="flex items-center justify-center gap-4">
            {[
              "/bhutan-believ.png",
              "/drukair.png",
              "/bhutan-airlines.png",
              "/bhutan-logo.png"

            ].map((src, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center 
                         transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src={src}
                  width={60}
                  height={60}
                  alt="Associated Logo"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2024 Lumora Tours and Travel. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
      <div>
        <a
          href="https://wa.me/+97577893346" // replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse-pop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0012 .02C5.37.02.02 5.37.02 12c0 2.12.56 4.17 1.63 5.95L0 24l6.22-1.63A11.91 11.91 0 0012 24c6.63 0 11.98-5.35 11.98-12a11.86 11.86 0 00-3.46-8.52zm-8.52 18c-1.83 0-3.61-.5-5.17-1.45l-.37-.23-3.7 1 1-3.62-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.66 0 5.17 1.03 7.06 2.94a9.88 9.88 0 012.94 7.06c0 5.52-4.48 10-10 10zm5.19-7.56c-.28-.14-1.65-.81-1.9-.9s-.43-.14-.61.14-.7.9-.86 1.09-.32.21-.6.07a7.13 7.13 0 01-2.11-1.3 7.45 7.45 0 01-1.39-1.73c-.15-.27 0-.41.11-.55.11-.11.28-.29.42-.43.14-.14.19-.24.28-.4.09-.14.05-.26-.02-.4-.07-.14-.61-1.46-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.35 0-.54 0s-.4.05-.61.05-.4.07-.61.27a2.45 2.45 0 00-.89.88c-.29.48-1.13 1.1-1.13 2.68s1.16 3.12 1.32 3.34c.14.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.23 1.48.2 2.04.12.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.09-.14-.33-.23-.61-.37z" />
          </svg>
        </a>

      </div>
    </footer>
  )
}
