import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsPage() {
    return (
        <>
            <Navbar />

            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
                        Terms of Use
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Welcome to <strong>Getwell Hospital</strong>. By accessing or using our website or
                        hospital services, you agree to comply with these Terms and Conditions. Please
                        read them carefully before proceeding.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Use of Services</h2>
                    <p className="text-gray-600 mb-4">
                        Our hospital provides healthcare services and related information for your
                        awareness. Misuse, copying, or redistribution of content without permission is
                        prohibited.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Appointments</h2>
                    <p className="text-gray-600 mb-4">
                        Patients are required to provide accurate personal and medical information
                        during booking. False or misleading data may lead to cancellation.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Limitation of Liability</h2>
                    <p className="text-gray-600 mb-4">
                        Getwell Hospital shall not be held responsible for indirect losses or
                        consequences arising from the misuse of this website or its contents.
                    </p>

                    <p className="text-gray-600">
                        For any questions regarding our terms, please contact{" "}
                        <a href="mailto:getwellhospital@gmail.com" className="text-green-600 underline">
                            getwellhospital@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
