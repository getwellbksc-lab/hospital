"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppointmentPage() {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        age: "",
        address: "",
        doctor: "",
        date: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            const response = await fetch("https://hospital-backend-hfn7.onrender.com/api/appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (result.status === "success" || result.success === true) {

                setMessage({
                    text: "✅ Appointment saved successfully!",
                    type: "success",
                });
                setForm({
                    name: "",
                    mobile: "",
                    age: "",
                    address: "",
                    doctor: "",
                    date: "",
                });
            } else {
                setMessage({
                    text: "❌ Failed to save appointment.",
                    type: "error",
                });
            }
        } catch (err) {
            setMessage({ text: "⚠️ Server error: " + err.message, type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            {/* Appointment Section */}
            <div className="min-h-screen bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Left Form */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg md:col-span-1">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
                            Online Appointment Form
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {["name", "mobile", "age", "address"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium capitalize">
                                        {field === "name"
                                            ? "Name of the Patient *"
                                            : field === "mobile"
                                                ? "Mobile No. *"
                                                : field === "age"
                                                    ? "Age *"
                                                    : "Address"}
                                    </label>
                                    <input
                                        type={field === "age" ? "number" : "text"}
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required={field !== "address"}
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium">
                                    Consultant Doctor
                                </label>
                                <select
                                    name="doctor"
                                    value={form.doctor}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select a Doctor</option>
                                    {doctors.map((d) => (
                                        <option key={d.name}>{d.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Date of Appointment *
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" required />
                                <span className="text-sm text-gray-600">I'm not a robot</span>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex justify-center items-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            ></path>
                                        </svg>
                                        <span>Saving...</span>
                                    </>
                                ) : (
                                    "Book Appointment"
                                )}
                            </button>

                            {message.text && (
                                <p
                                    className={`text-center text-sm font-medium mt-3 ${message.type === "success"
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}
                                >
                                    {message.text}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right Doctor Section */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctors.map((doc, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-4 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-200"
                            >
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-3 border border-gray-200"
                                />
                                <h3 className="font-semibold text-lg">{doc.name}</h3>
                                <p className="text-green-700 text-sm">{doc.speciality}</p>
                                <p className="text-red-500 text-sm">{doc.schedule}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

const doctors = [
    { name: "Dr. Satish Kumar", specialization: "Chief Clinical Cardiologist & Chairman", status: "online", img: "https://i.ibb.co/8Dvfjr2r/drsatish.png" },
    { name: "Dr. Rahul Kumar", specialization: "Consultant Interventional Cardiologist", status: "online", img: "https://i.ibb.co/MxpXX923/drrahul.png" },
    { name: "Dr. Sujit Pandey", specialization: "Chief Consultant General & Laparoscopic Surgery", status: "away", img: "https://i.ibb.co/Mkj0WjmN/drsujit.png" },
    { name: "Dr. R. N. Pradhan", specialization: "Consultant Physician", status: "offline", img: "https://i.ibb.co/Wpxv24g2/drpradhan.png" },
    { name: "Dr. Mukeshkumar Rajak", specialization: "Chief Consultant Nephrology and Dialysis Unit", status: "online", img: "https://i.ibb.co/7tnmmP5C/drrajak.png" },
    { name: "Dr. R. N. Sinha", specialization: "Consultant Physician", status: "away", img: "https://i.ibb.co/WvqnNqKn/drbnsinha.png" },
    { name: "Dr. Prashant Kumar", specialization: "Physician and Consultant Psychiatrist", status: "offline", img: "https://i.ibb.co/fzTX2qTj/drprabhat.png" },
    { name: "Dr. Anurag Agrawal", specialization: "Radiologist & Sonologist", status: "online", img: "https://i.ibb.co/jPQyVyb8/dranuragag.png" },
    { name: "Dr. Vaibhav M. Mathur", specialization: "Orthopaedic Surgeon & Traumatologist (Specialist in Arthroscopy & Arthroplasty)", status: "online", img: "https://i.ibb.co/SXCv2bnL/drvishal.png" },
    { name: "Dr. Pankaj Sharma", specialization: "Cancer Specialist", status: "away", img: "https://i.ibb.co/0jT9sFMj/drpsharma.png" },
    { name: "Dr. ShiveshKant Pandey", specialization: "Consultant Intensivist and Anaesthesiologist", status: "online", img: "https://i.ibb.co/zWqkQSyW/drshiv.png" },
    { name: "Dr. Varuna Jha", specialization: "Consultant Obstetrics & Gynaecologist", status: "online", img: "https://i.ibb.co/ZzDySzyH/drvaruna.png" },
    { name: "Dr. Amrita Kumari", specialization: "Consultant Obstetrics & Gynaecologist", status: "away", img: "https://i.ibb.co/gZCtnFWX/dramrita.png" },
    { name: "Dr. Shubhra Verma", specialization: "Consultant Obstetrics & Gynaecologist", status: "offline", img: "https://i.ibb.co/84DrctyF/drshubhra.png" },
    { name: "Dr. Pranjoo Bhushan", specialization: "Paediatrician & Neonatologist", status: "online", img: "https://i.ibb.co/mVZXFvbT/drpankaj.png" },
    { name: "Dr. Swaropam Gupta", specialization: "Consultant Laparoscopic & Gynaecologic Surgeon", status: "online", img: "https://i.ibb.co/FbhP8pN1/drguha.png" },
    { name: "Dr. S. D. Pandey", specialization: "Cardiologist, MD (PGI Chandigarh)", status: "away", img: "https://i.ibb.co/k2Kf5FJN/drspandey.png" },
    { name: "Dr. R. N. Komodkar", specialization: "Cardiologist, MD", status: "offline", img: "https://i.ibb.co/pB3DcWbZ/drkarmakar.png" },
];

