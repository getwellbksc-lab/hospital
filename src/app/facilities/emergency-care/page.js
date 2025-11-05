import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function EmergencyCarePage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                            24×7 Emergency Care
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At <strong>Get Well Hospital</strong>, we provide continuous emergency and trauma care
                            services 24 hours a day, 7 days a week. Our emergency department is equipped with
                            modern life-saving facilities and expert doctors to handle any critical situation
                            with speed, precision, and compassion.
                        </p>
                    </div>

                    {/* Why It's Important */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            Why Emergency Care Is Important
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Emergency medical care is essential to save lives when every second matters.
                            From heart attacks and strokes to road accidents and fractures, our emergency
                            response team is always ready to act immediately — providing fast treatment and
                            stabilizing patients for further care.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Immediate treatment during life-threatening situations</li>
                            <li>Quick access to ICU, operation theatre, and radiology units</li>
                            <li>24×7 availability of doctors, nurses, and paramedics</li>
                            <li>On-call ambulance and trauma team support</li>
                        </ul>
                    </div>

                    {/* Key Features */}
                    <div className="bg-green-50 p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fully equipped Emergency Room (ER) with advanced monitors</li>
                                <li>Dedicated trauma bay for accident and injury cases</li>
                                <li>On-site pharmacy and diagnostic services</li>
                                <li>Cardiac and neuro emergency management</li>
                            </ul>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Immediate admission and triage system</li>
                                <li>24×7 ambulance connectivity</li>
                                <li>Coordination with surgical and critical care units</li>
                                <li>Experienced emergency medicine specialists</li>
                            </ul>
                        </div>
                    </div>

                    {/* Emergency Cases */}
                    <div className="bg-white p-8 rounded-lg shadow mb-10">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">
                            We Handle All Types of Emergencies
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            {[
                                "Heart Attack & Chest Pain",
                                "Stroke & Unconsciousness",
                                "Severe Injuries / Accidents",
                                "Fractures & Dislocations",
                                "Asthma & Breathing Issues",
                                "Seizures & Fits",
                            ].map((caseType, i) => (
                                <div
                                    key={i}
                                    className="p-4 border border-green-200 rounded-md bg-green-50 hover:bg-green-100 transition"
                                >
                                    <h3 className="font-semibold text-green-700">{caseType}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact for Help */}
                    <div className="bg-green-600 text-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold mb-3">
                            Emergency Response — Available 24×7
                        </h2>
                        <p className="max-w-3xl mx-auto mb-5">
                            Our emergency team and ambulance service are ready to help you at any time.
                            Please contact us immediately in case of an emergency using the options below.
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
