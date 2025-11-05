"use client";
import Link from "next/link";
import {
  FaVideo,
  FaAmbulance,
  FaHospital,
  FaShieldAlt,
  FaBiking,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaHospital size={28} />,
      title: "Instant Operation",
      desc: "Quick and safe surgical care available 24/7 with modern equipment and experienced doctors.",
      link: "/facilities/instant-operation",
    },
    // {
    //   icon: <FaVideo size={28} />,
    //   title: "Online Sessions",
    //   desc: "Consult with our doctors from home through secure video calls and online follow-ups.",
    //   link: "/facilities/online-sessions",
    // },
    {
      icon: <FaAmbulance size={28} />,
      title: "Emergency Care",
      desc: "Round-the-clock ambulance and emergency department with advanced life-saving equipment.",
      link: "/facilities/emergency-care",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Private & Secure",
      desc: "We ensure total privacy and safety with secure records and clean private rooms.",
      link: "/facilities/private-secure",
    },
    {
      icon: <FaBiking size={28} />,
      title: "Outdoor Service",
      desc: "Ambulance and outdoor patient support facilities available across Bokaro region.",
      link: "/facilities/outdoor-service",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-[2px] bg-green-600"></span> Our Facilities
          </p>


          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Facilities That We Provide
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Get Well Hospital offers world-class medical facilities including
            instant surgeries, emergency care, online consultations, and private wards.
            We are committed to providing quality treatment with compassion and care.
          </p>
        </div>

        {/* Right Facility Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <Link href={f.link} key={i}>
              <div className="bg-teal-500 text-white p-6 rounded-lg shadow hover:shadow-xl hover:bg-teal-600 transition flex flex-col gap-3 cursor-pointer">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm opacity-90">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

  );
}
