import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar";

export default function PrivateSecurePage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                            Private & Secure Facility
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At <strong>Get Well Hospital</strong>, we prioritize your comfort, privacy, and safety.
                            Our private wards and data security systems are designed to offer complete
                            confidentiality and a stress-free healing environment for every patient.
                        </p>
                    </div>

                    {/* Why It’s Important */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Why Privacy & Security Matter in Healthcare
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Every patient deserves dignity and confidentiality during treatment.
                            Whether it’s a medical procedure or personal information, our hospital ensures
                            that your data and care experience are safe, secure, and comfortable.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Personalized private rooms for patients and attendants</li>
                            <li>Strict confidentiality of all medical records</li>
                            <li>Secure digital database for patient history</li>
                            <li>Enhanced hygiene and infection control measures</li>
                        </ul>
                    </div>

                    {/* Key Features */}
                    <div className="bg-green-50 p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Private, air-conditioned patient rooms</li>
                                <li>Attached washroom and attendant seating</li>
                                <li>In-room nurse call system and intercom support</li>
                                <li>24×7 housekeeping and food service</li>
                            </ul>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Secure access control and visitor management</li>
                                <li>Encrypted electronic medical records</li>
                                <li>Dedicated staff for patient assistance</li>
                                <li>High-standard disinfection and cleanliness</li>
                            </ul>
                        </div>
                    </div>

                    {/* Patient Comfort Section */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Patient Comfort & Confidentiality
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We believe that peace of mind contributes significantly to healing.
                            Our private rooms are designed to give patients a home-like environment with
                            complete privacy, allowing them to recover in comfort.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            {[
                                "Single & Deluxe Rooms",
                                "AC Rooms with Attached Bathrooms",
                                "Dedicated Nursing Staff",
                                "Visitor Timing Control",
                                "Electronic Record Security",
                                "24×7 Medical Assistance",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 border border-green-200 rounded-md bg-green-50 hover:bg-green-100 transition"
                                >
                                    <h3 className="font-semibold text-green-700">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact / Assistance Section */}
                    <div className="bg-green-600 text-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold mb-3">
                            Your Safety & Privacy Are Our Priority
                        </h2>
                        <p className="max-w-3xl mx-auto mb-5">
                            Need to book a private room or learn more about our secure medical record system?
                            Contact our hospital administration team anytime.
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
