import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function InstantOperationPage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
                            Instant Operation Facility
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our Instant Operation unit ensures that emergency surgical cases are handled
                            immediately — saving time, reducing risks, and ensuring the best possible
                            outcomes for patients in critical conditions.
                        </p>
                    </div>

                    {/* Why It’s Important */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Why Instant Operation Facility Is Important
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In medical emergencies like appendicitis, hernia rupture, or internal bleeding,
                            every minute matters. Delays in surgery can lead to severe complications or even
                            life-threatening situations. At <strong>Get Well Hospital</strong>, our
                            round-the-clock surgical team is always ready to perform operations at any hour
                            of the day.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Prevents delay in critical emergency surgeries.</li>
                            <li>Reduces risk of infection or post-surgery complications.</li>
                            <li>Ensures patients receive immediate and safe treatment.</li>
                            <li>24×7 surgical readiness — including weekends and holidays.</li>
                        </ul>
                    </div>

                    {/* Key Features */}
                    <div className="bg-green-50 p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fully equipped Modular Operation Theatres (OTs)</li>
                                <li>Dedicated team of experienced surgeons and anesthetists</li>
                                <li>Advanced sterilization and hygiene protocols</li>
                                <li>Post-operative care and continuous monitoring</li>
                            </ul>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Availability of blood bank and ICU backup</li>
                                <li>Emergency ambulance and trauma response unit</li>
                                <li>Quick patient admission and documentation system</li>
                                <li>Use of modern laparoscopic and minimally invasive techniques</li>
                            </ul>
                        </div>
                    </div>

                    {/* Common Surgeries */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Common Surgeries We Handle Instantly
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Our surgeons are experienced in performing a wide range of urgent and elective
                            operations using advanced methods to ensure minimal recovery time and maximum
                            safety.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Appendix Surgery</h3>
                                <p className="text-sm">
                                    Immediate removal of inflamed appendix to prevent rupture or infection.
                                </p>
                            </div>
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Hernia Repair</h3>
                                <p className="text-sm">
                                    Laparoscopic or open repair of hernia with minimal post-surgery discomfort.
                                </p>
                            </div>
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Gallbladder Stone Removal</h3>
                                <p className="text-sm">
                                    Quick and safe removal of gallstones through laparoscopic cholecystectomy.
                                </p>
                            </div>
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Kidney Stone Surgery</h3>
                                <p className="text-sm">
                                    Advanced laser and endoscopic removal of kidney stones with fast recovery.
                                </p>
                            </div>
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Cesarean Section (C-Section)</h3>
                                <p className="text-sm">
                                    Safe and professional delivery procedures with full neonatal support.
                                </p>
                            </div>
                            <div className="p-4 border border-green-200 rounded-md bg-green-50">
                                <h3 className="font-semibold text-green-700 mb-1">Piles (Hemorrhoid) Surgery</h3>
                                <p className="text-sm">
                                    Minimally invasive piles treatment ensuring quick relief and recovery.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Section */}
                    <div className="bg-green-600 text-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-semibold mb-3">Emergency Surgery Available 24×7</h2>
                        <p className="max-w-3xl mx-auto mb-4">
                            Whether day or night, our surgical team and ambulance services are always ready.
                            In case of emergency, you can reach us anytime using the details below.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg font-semibold">
                            <a href="tel:+918904117494" className="bg-white text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition">
                                📞 Call: +91 8904117494
                            </a>
                            <a href="https://wa.me/918904117494" target="_blank" rel="noopener noreferrer"
                                className="bg-white text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition">
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
