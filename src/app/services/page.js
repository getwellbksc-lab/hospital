"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
    {
        name: "Hernia Operation",
        img: "https://i.ibb.co/MxfX6cLw/herniasurgery-1280.jpg",
    },
    {
        name: "Appendix Surgery",
        img: "https://i.ibb.co/vK8KFL0/Appendix-surgery.jpg",
    },
    {
        name: "Gallbladder Stone Removal",
        img: "https://i.ibb.co/gbHkcJq1/Gallbladder-Stones.png",
    },
    {
        name: "Caesarean (C-section)",
        img: "https://i.ibb.co/JwGLrhw4/What-will-happen-when-I-have-my-planned-Caesarean-Section-blog-1024x1024.jpg",
    },
    {
        name: "Uterus Surgery",
        img: "https://i.ibb.co/Pz0v09GQ/medium-20190424-110550-817301-tu-cung-max-1800x1800-png-79278c9d8b.png",
    },
    {
        name: "Piles (Bawasir) Treatment",
        img: "https://i.ibb.co/gbqzBRt2/Piles-1.jpg",
    },
    {
        name: "Kidney Stone Operation (Laparoscopic)",
        img: "https://i.ibb.co/1CqhTby/open-and-laparoscopic-stone-surgery.jpg",
    },
    {
        name: "24 Hrs Emergency Service",
        img: "https://i.ibb.co/8V6BJX3/istockphoto-1330919226-612x612-1.jpg",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <p className="text-green-600 font-semibold uppercase tracking-wide flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-green-600"></span> Our Services
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
                        Hospital Services
                    </h2>
                    <p className="mt-2 text-gray-500 max-w-2xl">
                        We provide specialized healthcare services with modern facilities
                        and expert medical professionals.
                    </p>

                    {/* Services Grid */}
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
                            >
                                {/* Service Image */}
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-52 object-cover"
                                />
                                {/* Service Name */}
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {service.name}
                                    </h3>
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
