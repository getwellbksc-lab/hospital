"use client";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function FloatingSocialIcons() {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=61581545083933"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-l-xl shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:translate-x-[-8px]"
            >
                <FaFacebookF size={18} />
            </a>

            {/* WhatsApp */}
            <a
                href="https://wa.me/918904117494"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-l-xl shadow-md hover:bg-green-600 transform transition-all duration-300 hover:translate-x-[-8px]"
            >
                <FaWhatsapp size={18} />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/getwellbksc?igsh=MWFpYmp3a283ZnBxZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-l-xl shadow-md hover:bg-pink-600 transform transition-all duration-300 hover:translate-x-[-8px]"
            >
                <FaInstagram size={18} />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/109071899/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-3 rounded-l-xl shadow-md hover:bg-blue-900 transform transition-all duration-300 hover:translate-x-[-8px]"
            >
                <FaLinkedinIn size={18} />
            </a>

            {/* YouTube */}
            <a
                href="http://www.youtube.com/@Getwellbksc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-3 rounded-l-xl shadow-md hover:bg-red-700 transform transition-all duration-300 hover:translate-x-[-8px]"
            >
                <FaYoutube size={18} />
            </a>
        </div>
    );
}
