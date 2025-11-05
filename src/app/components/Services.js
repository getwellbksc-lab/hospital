"use client";
import {
  FaSyringe,
  FaProcedures,
  FaBaby,
  FaStethoscope,
  FaToilet,
  FaHospital,
  FaXRay,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaSyringe size={40} className="text-teal-600" />,
      title: "Hernia Surgery",
      desc: "Safe and modern laparoscopic hernia operation facilities.",
    },
    {
      icon: <FaProcedures size={40} className="text-teal-600" />,
      title: "Appendix Surgery",
      desc: "Quick and painless appendix removal by experienced surgeons.",
    },
    {
      icon: <FaXRay size={40} className="text-teal-600" />,
      title: "Gallbladder Stone",
      desc: "Gallstone removal and gallbladder surgeries with expert care.",
    },
    {
      icon: <FaBaby size={40} className="text-teal-600" />,
      title: "Caesarean Delivery",
      desc: "Safe and hygienic cesarean delivery under specialist supervision.",
    },
    {
      icon: <FaStethoscope size={40} className="text-teal-600" />,
      title: "Uterus Surgery",
      desc: "Treatment and surgical procedures for uterus-related conditions.",
    },
    {
      icon: <FaToilet size={40} className="text-teal-600" />,
      title: "Piles Treatment",
      desc: "Advanced treatment for piles (baawasir) with quick recovery.",
    },
    {
      icon: <FaHospital size={40} className="text-teal-600" />,
      title: "Kidney Stone Operation",
      desc: "Kidney stone removal through modern laparoscopic operation.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <p className="text-green-600 font-semibold uppercase tracking-wide">
          Medical Services
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
          Find Out More About Our Treatments
        </h2>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border bg-green-50 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-green-700">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
