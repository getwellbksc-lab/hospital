"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const doctors = [
  {
    "name": "Dr. Renuka Verma",
    "specialization": "Cardiologist & General Physician",
    "status": "online",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Madam Prakash",
    "specialization": "MD Medicine",
    "status": "online",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Nirmal Kumar",
    "specialization": "General Surgeon (MBBS, MS)",
    "status": "away",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Subhra Verma",
    "specialization": "Obstetric & Gynaecologist (MBBS, DGO)",
    "status": "online",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Shivani Das",
    "specialization": "Obstetric & Gynaecologist (MBBS, DGO)",
    "status": "offline",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Anurag Srivastava",
    "specialization": "Anaesthetic (MBBS, DA)",
    "status": "online",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. Shashi Ranjan",
    "specialization": "Neuro Physician & Mental Disorders Specialist",
    "status": "away",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },
  {
    "name": "Dr. P. K. Shankar",
    "specialization": "General Surgeon & Laparoscopy (MBBS, MS)",
    "status": "online",
    "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
  },

];

export default function DoctorsPage() {
  return (
    <>
      <Navbar />

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold uppercase tracking-wide">
              Our Doctors
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our Specialist Team
            </h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Our experienced doctors are here to provide the best healthcare
              services tailored to your needs.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="group relative bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition"
              >
                {/* Doctor Image */}
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-64 sm:h-72 object-cover"
                />

                {/* Hover Overlay for Desktop Only */}
                <div className="hidden sm:flex absolute inset-0 bg-green-600 bg-opacity-90 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-white text-lg font-bold text-center px-2">
                    {doc.name}
                  </h3>
                  <p className="text-white text-sm text-center px-3">
                    {doc.role}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

                {/* Mobile Info Always Visible */}
                <div className="sm:hidden bg-green-600 text-white text-center py-3">
                  <h3 className="font-semibold text-base">{doc.name}</h3>
                  <p className="text-xs opacity-90">{doc.role}</p>
                </div>

                {/* Default Info for Desktop */}
                <div className="hidden sm:block p-4 text-center bg-white">
                  <h3 className="text-blue-700 font-semibold text-base">
                    {doc.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
