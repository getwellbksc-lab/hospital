import { useState } from "react";

export default function AppointmentPage() {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        age: "",
        address: "",
        doctor: "",
        date: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzBWnx3776FVxh7QsTs45XSyOOZwquBFeNf_hcXDLnvx6Qiqg8MGSt0M5niUIb5_5CC/exec", {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-Type": "application/json" },
            });

            const result = await response.json();
            if (result.status === "success") {
                alert("✅ Appointment saved to Google Sheet!");
                setForm({
                    name: "",
                    mobile: "",
                    age: "",
                    address: "",
                    doctor: "",
                    date: "",
                });
            } else {
                alert("❌ Failed to save appointment");
            }
        } catch (err) {
            alert("⚠️ Error: " + err.message);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Form */}
                <div className="bg-white p-6 rounded-lg shadow-md md:col-span-1">
                    <h2 className="text-xl font-semibold mb-4">Online Appointment Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name of the Patient *</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Mobile No. *</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Age *</label>
                            <input
                                type="number"
                                name="age"
                                value={form.age}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Consultant Doctors Name</label>
                            <select
                                name="doctor"
                                value={form.doctor}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                            >
                                <option value="">Select a Doctor</option>
                                <option>Dr. Nivedita Dutta</option>
                                <option>Dr. Shubhra Verma</option>
                                <option>Dr. Mohini Singh</option>
                                <option>Dr. Sunil Kumar</option>
                                <option>Dr. Rakesh Singh</option>
                                <option>Dr. K. P. Chattarjee</option>
                                <option>Dr. M. G. Rasul</option>
                                <option>Dr. Pushpanjali Karwa</option>
                                <option>Dr. Rahul Sinha</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Date of Appointment *</label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" required />
                            <span className="text-sm">I'm not a robot</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Book an Appointment
                        </button>
                    </form>
                </div>

                {/* Right Doctor Section */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-md text-center">
                            <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full mx-auto mb-3" />
                            <h3 className="font-semibold">{doc.name}</h3>
                            <p className="text-green-700 text-sm">{doc.speciality}</p>
                            <p className="text-red-500 text-sm">{doc.schedule}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const doctors = [
    { name: "Dr. Nivedita Dutta", speciality: "Consultant Obstetrician & Gynecologist", schedule: "Saturday: 9:00 AM to 1:00 PM", image: "/doctors/nivedita.jpg" },
    { name: "Dr. Shubhra Verma", speciality: "Consultant Obstetrics & Gynecology", schedule: "Monday: 1:30 PM to 3:30 PM", image: "/doctors/shubhra.jpg" },
    { name: "Dr. Mohini Singh", speciality: "Consultant Ophthalmologist", schedule: "Tue-Fri: 9:00 AM to 12:00 PM", image: "/doctors/mohini.jpg" },
    { name: "Dr. Sunil Kumar", speciality: "Consultant ENT", schedule: "2nd & 4th Sunday: 1:00 PM to 3:00 PM", image: "/doctors/sunil.jpg" },
    { name: "Dr. Rakesh Singh", speciality: "Ortho & Neuro Specialist", schedule: "Mon, Wed, Fri: 10:00 AM to 12:00 PM", image: "/doctors/rakesh.jpg" },
    { name: "Dr. K. P. Chattarjee", speciality: "Consultant Dermatology", schedule: "Friday: 10:00 AM to 12:00 PM", image: "/doctors/chattarjee.jpg" },
    { name: "Dr. M. G. Rasul", speciality: "General Physician", schedule: "", image: "/doctors/rasul.jpg" },
    { name: "Dr. Pushpanjali Karwa", speciality: "Consultant", schedule: "", image: "/doctors/pushpanjali.jpg" },
    { name: "Dr. Rahul Sinha", speciality: "General Physician", schedule: "", image: "/doctors/rahul.jpg" },
];
