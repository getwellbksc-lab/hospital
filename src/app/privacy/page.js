import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        At <strong>Getwell Hospital</strong>, we respect your privacy and are committed to
                        protecting your personal information. This policy explains how we collect, use, and
                        safeguard your data.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                        We may collect your name, contact number, email address, and medical information
                        for appointment bookings and patient records.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Data Protection</h2>
                    <p className="text-gray-600 mb-4">
                        All data is stored securely and is only accessible by authorized personnel. We do
                        not sell or share your data with any third parties.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Cookies</h2>
                    <p className="text-gray-600 mb-4">
                        Our website may use cookies to enhance user experience and improve service quality.
                    </p>

                    <p className="text-gray-600">
                        For privacy-related concerns, contact us at{" "}
                        <a href="mailto:Getwellbksc@gmail.com" className="text-green-600 underline">
                            Getwellbksc@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
