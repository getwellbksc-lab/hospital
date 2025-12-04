"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [

    {
        "name": "Dr. Satish Kumar",
        "specialization": "Chief Clinical Cardiologist & Chairman",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Rahul Kumar",
        "specialization": "Consultant Interventional Cardiologist",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Sujit Pandey",
        "specialization": "Chief Consultant General & Laparoscopic Surgery",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. R. N. Pradhan",
        "specialization": "Consultant Physician",
        "status": "offline",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Mukeshkumar Rajak",
        "specialization": "Chief Consultant Nephrology and Dialysis Unit",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. R. N. Sinha",
        "specialization": "Consultant Physician",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Prashant Kumar",
        "specialization": "Physician and Consultant Psychiatrist",
        "status": "offline",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Anurag Agrawal",
        "specialization": "Radiologist & Sonologist",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Vaibhav M. Mathur",
        "specialization": "Orthopaedic Surgeon & Traumatologist (Specialist in Arthroscopy & Arthroplasty)",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Pankaj Sharma",
        "specialization": "Cancer Specialist",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. ShiveshKant Pandey",
        "specialization": "Consultant Intensivist and Anaesthesiologist",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Varuna Jha",
        "specialization": "Consultant Obstetrics & Gynaecologist",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Amrita Kumari",
        "specialization": "Consultant Obstetrics & Gynaecologist",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Shubhra Verma",
        "specialization": "Consultant Obstetrics & Gynaecologist",
        "status": "offline",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Pranjoo Bhushan",
        "specialization": "Paediatrician & Neonatologist",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. Swaropam Gupta",
        "specialization": "Consultant Laparoscopic & Gynaecologic Surgeon",
        "status": "online",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. S. D. Pandey",
        "specialization": "Cardiologist, MD (PGI Chandigarh)",
        "status": "away",
        "img": "https://i.ibb.co/CpfC6wWj/image-place.png"
    },
    {
        "name": "Dr. R. N. Komodkar",
        "specialization": "Cardiologist, MD",
        "status": "offline",
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
