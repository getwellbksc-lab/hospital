"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
    {
        "name": "Dr. Renuka Verma",
        "specialization": "Cardiologist & General Physician",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Madam Prakash",
        "specialization": "MD Medicine",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Nirmal Kumar",
        "specialization": "General Surgeon (MBBS, MS)",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Subhra Verma",
        "specialization": "Obstetric & Gynaecologist (MBBS, DGO)",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Shivani Das",
        "specialization": "Obstetric & Gynaecologist (MBBS, DGO)",
        "status": "offline",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Anurag Srivastava",
        "specialization": "Anaesthetic (MBBS, DA)",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Shashi Ranjan",
        "specialization": "Neuro Physician & Mental Disorders Specialist",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. P. K. Shankar",
        "specialization": "General Surgeon & Laparoscopy (MBBS, MS)",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. P. S. Singh",
        "specialization": "General Physician (MBBS)",
        "status": "offline",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. M. D. Mustaq",
        "specialization": "Neonatal & Pediatrician (MBBS, DNB)",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    }
];


const statusColors = {
    online: "text-green-600 bg-green-100",
    away: "text-yellow-600 bg-yellow-100",
    offline: "text-red-600 bg-red-100",
};

export default function DoctorsPage() {
    return (
        <>
            <Navbar />

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                        Our Doctors
                    </h2>

                    {/* Doctors Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {doctors.map((doc, i) => (
                            <div
                                key={i}
                                className="border rounded-xl bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={doc.img}
                                        alt={doc.name}
                                        className="w-full h-72 object-cover"
                                    />
                                    {/* Status Badge */}
                                    <span
                                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors[doc.status]}`}
                                    >
                                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {doc.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{doc.specialization}</p>
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
