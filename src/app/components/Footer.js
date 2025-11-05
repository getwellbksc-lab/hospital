"use client";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-900 text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {/* About / Logo */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Getwell Hospital</h4>
            <p className="text-sm leading-relaxed">
              Providing 24x7 healthcare with modern facilities and experienced doctors for your well-being.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              <span>Getwellbksc@gmail.com</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Plot No - 286, Co-operative Colony, Near Ukrid More - 827001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link href="/blogs" className="hover:text-white">Our Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/support" className="hover:text-white">Contact Support</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Contact / Appointment */}
          <div>
            <h4 className="text-white font-semibold mb-4">Book An Appointment</h4>
            <p className="text-sm">
              Our doctors are available 24/7 to provide medical support and consultations.
            </p>
            <div className="mt-4 flex items-center gap-2 border p-2 rounded-md w-fit">
              <FaPhoneAlt className="text-green-500" />
              <span>+91 8904117494</span>
            </div>
            <div className="mt-4 flex items-center gap-2 border p-2 rounded-md w-fit">
              <FaPhoneAlt className="text-green-500" />
              <span>+91 9431586911</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 Getwell Hospital — All Rights Reserved |{" "}
            <Link href="/terms" className="hover:text-green-400">Terms & Conditions</Link> |{" "}
            <Link href="/privacy" className="hover:text-green-400">Privacy Policy</Link>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/profile.php?id=61581545083933" className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700"><FaFacebookF /></Link>
            <Link
              href="https://www.linkedin.com/company/109071899/admin/dashboard/"
              className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="http://www.youtube.com/@Getwellbksc"
              className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700"
            >
              <FaYoutube />
            </Link>
            <Link href="https://www.instagram.com/getwellbksc?igsh=MWFpYmp3a283ZnBxZg==" className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
