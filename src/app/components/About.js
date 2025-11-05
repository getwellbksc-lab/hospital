"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  const features = [
    "15+ Years of excellence",
    "24/7 Hour Medical Service",
    "A Multispecialty hospital",
    "A team of professionals",
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-[2px] bg-green-600"></span> About Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Welcome To Get Well Hospital
          </h2>


          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-gray-700"
              >
                <FaCheckCircle className="text-green-600" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link href="/appointment">
            <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
              Book An Appointment
            </button>
          </Link>
        </div>

        {/* Right Side Doctor Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border-8 border-blue-100 rounded-lg -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-8 border-green-100 rounded-lg -z-10"></div>
          <img
            src="https://i.ibb.co/ZR8PfpH8/hospital.png" // 👈 apni doctor image yaha daaliye (public/doctor.png me save karo)
            alt="Doctor"
            className="rounded-lg shadow-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
