import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function OutdoorServicePage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                            Outdoor & Outreach Medical Services
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At <strong>Get Well Hospital</strong>, we believe that quality healthcare should reach
                            everyone — even beyond hospital walls. Our outdoor medical services include
                            on-call ambulance support, home healthcare, and **free health camps** for rural
                            and urban communities.
                        </p>
                    </div>

                    {/* Outdoor Services Section */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Why Outdoor Healthcare Matters
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Many patients face challenges in reaching hospitals on time. Our outdoor and
                            outreach services ensure that medical care, medicines, and health awareness reach
                            those in need — directly at their doorstep or within their community.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Ambulance available across the Bokaro and nearby regions</li>
                            <li>Home-based nursing and follow-up care</li>
                            <li>Doorstep diagnostic sample collection</li>
                            <li>Village and city-based health awareness camps</li>
                        </ul>
                    </div>

                    {/* Free Health Camps Section */}
                    <div className="bg-green-50 p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Free Health Camps — Serving the Community
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Our <strong>Free Medical Camps</strong> are organized regularly in nearby towns and
                            villages to promote preventive health checkups, early diagnosis, and awareness.
                            Specialist doctors provide consultations, distribute free medicines, and educate
                            families on nutrition and hygiene.
                        </p>

                        {/* Image area */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-lg overflow-hidden shadow">
                                <img
                                    src="https://i.ibb.co/rRXjNLyS/Chat-GPT-Image-Oct-14-2025-11-00-17-AM.png"
                                    alt="Free Health Camp"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow">
                                <img
                                    src="https://i.ibb.co/HLwn05Kx/Chat-GPT-Image-Oct-14-2025-11-07-24-AM.png"
                                    alt="Ambulance Outreach Service"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Our Outdoor Service Includes
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>24×7 on-call ambulance service</li>
                                <li>Mobile health check-up vans</li>
                                <li>Medical team visits to rural areas</li>
                                <li>Free blood sugar, BP, and eye checkups</li>
                            </ul>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Collaboration with NGOs and local communities</li>
                                <li>On-site health awareness workshops</li>
                                <li>Distribution of essential medicines</li>
                                <li>Doctor follow-ups for long-term patients</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-green-600 text-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold mb-3">
                            Need Our Outdoor Assistance?
                        </h2>
                        <p className="max-w-3xl mx-auto mb-5">
                            To book our ambulance or join our upcoming Free Health Camp, contact our outreach
                            department today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 font-semibold">
                            <a
                                href="tel:+918904117494"
                                className="bg-white text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition"
                            >
                                📞 Call: +91 8904117494
                            </a>
                            <a
                                href="https://wa.me/918904117494"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition"
                            >
                                💬 WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
