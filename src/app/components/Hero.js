"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaAmbulance,
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";

export default function Hero() {
  const facilities = [
    {
      icon: <FaAmbulance size={36} className="text-green-600" />,
      title: "24/7 Emergency",
    },
    {
      icon: <FaUserMd size={36} className="text-green-600" />,
      title: "Expert Doctors",
    },
    {
      icon: <FaStethoscope size={36} className="text-green-600" />,
      title: "OPD Services",
    },
    {
      icon: <FaHeartbeat size={36} className="text-green-600" />,
      title: "Heart Care",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 leading-snug">
            Compassionate Care <br className="hidden sm:block" /> for a Healthier Tomorrow
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            From emergency response to specialized treatments, our hospital is equipped with
            modern facilities and dedicated professionals to ensure your well-being.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link href="/appointment">
              <button className="px-6 sm:px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition w-full sm:w-auto">
                Book Appointment
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Facilities Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center hover:scale-105"
            >
              {f.icon}
              <h3 className="mt-3 sm:mt-4 font-semibold text-gray-700 text-sm sm:text-base">
                {f.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Heartbeat Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg width="100%" height="150" viewBox="0 0 1000 200">
          <path
            d="M0 100 L200 100 L250 50 L300 150 L350 80 L400 120 L450 50 L500 150 L550 100 L1000 100"
            className="stroke-red-500 fill-none stroke-[3px]"
          />
        </svg>
        <FaHeartbeat
          size={60}
          className="heartbeat-icon text-red-500 absolute animate-pulse"
        />
      </div>
    </section>
  );
}
