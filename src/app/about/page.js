"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            {/* About Section */}
            <section className="bg-teal-800 py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <p className="uppercase text-yellow-400 font-semibold tracking-wide">
                            ~ About Get Well Hospital
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            24×7 Emergency & Specialized Surgical Care
                        </h2>

                        <p className="text-gray-200 leading-relaxed">
                            <strong>GET WELL HOSPITAL</strong> offers round-the-clock emergency services,
                            modern surgical care, and compassionate medical support. Our hospital is equipped
                            with advanced facilities and a team of experienced doctors who are dedicated to
                            providing quality healthcare with trust and care.
                        </p>

                        <div className="bg-white/10 p-4 rounded-md">
                            <p className="text-yellow-300 font-semibold mb-2">हमारी सेवाएँ :</p>
                            <p className="text-gray-100 leading-relaxed text-sm">
                                हमारे यहाँ हर्निया, अपेंडिक्स, पित्त थैली में पथरी, सीजेरियन,
                                बच्चेदानी, बवासीर, किडनी स्टोन आदि ऑपरेशन दूरबीन द्वारा किए जाते हैं।
                            </p>
                        </div>

                        <div className="flex items-start gap-4 mt-6">
                            <img
                                src="https://i.ibb.co/MyW7qtYQ/bro.png"
                                alt="Hospital Icon"
                                className="w-10 h-10"
                            />
                            <p className="text-sm text-gray-300 leading-relaxed">
                                We ensure patients receive world-class treatment in a comfortable and safe
                                environment. Our motto is simple — <span className="text-yellow-400 font-semibold">
                                    “We Help You Get Well.”</span>
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="text-green-300 font-semibold text-lg">
                                📍 Plot No. 286, Co-operative Colony, Near Ukrid More – 827001
                            </p>
                            <p className="text-gray-200 mt-2">
                                📞 <span className="text-white">+91 8904117494, 9431586911</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/CdZ32FB/rafiki.png"
                            alt="Hospital Ambulance"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
