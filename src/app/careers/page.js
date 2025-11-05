import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
                        Careers at Getwell Hospital
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
                        Join our dedicated healthcare team and be part of a hospital that focuses on patient
                        care, innovation, and excellence.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Staff Nurse</h3>
                            <p className="text-gray-600 mb-2">Full-time | Bokaro, Jharkhand</p>
                            <p className="text-gray-600 mb-4">
                                Seeking skilled nursing professionals with experience in patient care and
                                emergency response.
                            </p>
                            <a
                                href="mailto:getwellhospital@gmail.com"
                                className="text-green-600 font-semibold hover:underline"
                            >
                                Apply Now →
                            </a>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Medical Officer</h3>
                            <p className="text-gray-600 mb-2">Full-time | Bokaro, Jharkhand</p>
                            <p className="text-gray-600 mb-4">
                                Looking for MBBS doctors with experience in general and emergency care.
                            </p>
                            <a
                                href="mailto:getwellhospital@gmail.com"
                                className="text-green-600 font-semibold hover:underline"
                            >
                                Apply Now →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
