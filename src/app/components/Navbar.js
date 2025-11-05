"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-50 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Get Well Hospital Logo"
            width={38}
            height={38}
            className="rounded-md"
          />
          <span className="text-lg sm:text-2xl font-bold text-green-700 whitespace-nowrap">
            GET WELL HOSPITAL
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-green-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-600">About</Link></li>
          <li><Link href="/services" className="hover:text-green-600">Services</Link></li>
          <li><Link href="/doctors" className="hover:text-green-600">Doctors</Link></li>
          <li><Link href="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* Appointment Button (Desktop) */}
        <Link
          href="/appointment"
          className="hidden md:inline-block ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm sm:text-base"
        >
          Make Appointment
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-700 text-2xl ml-4"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="/appointment"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Make Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
