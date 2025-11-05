"use client";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SupportPage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                        Contact Support
                    </h1>
                    <p className="text-gray-600 mb-10">
                        Our support team is available <strong>24×7</strong> for any assistance or
                        appointment-related queries. You can reach us via call or WhatsApp.
                    </p>

                    {/* Support Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Call Us */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                            <FaPhoneAlt className="text-green-600 text-4xl mb-3" />
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Call Us</h3>
                            <p className="text-gray-700 mb-4">Talk directly with our hospital team.</p>

                            {/* Click-to-call buttons */}
                            <a
                                href="tel:+918904117494"
                                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                            >
                                📞 Call: +91 8904117494
                            </a>
                            <a
                                href="tel:+919431586911"
                                className="mt-3 border border-green-600 text-green-700 px-6 py-2 rounded-md hover:bg-green-50 transition w-full sm:w-auto"
                            >
                                📞 Call: +91 9431586911
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                            <FaWhatsapp className="text-green-600 text-4xl mb-3" />
                            <h3 className="text-xl font-semibold text-green-700 mb-2">WhatsApp Support</h3>
                            <p className="text-gray-700 mb-4">Chat with our support team instantly.</p>

                            {/* WhatsApp redirect buttons */}
                            <a
                                href="https://wa.me/918904117494"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mt-12 text-center">
                        <FaMapMarkerAlt className="text-green-600 text-3xl mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-green-700">
                            Getwell Hospital, Bokaro
                        </h3>
                        <p className="text-gray-600">
                            Plot No. 286, Co-operative Colony, Near Ukrid More – 827001
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
