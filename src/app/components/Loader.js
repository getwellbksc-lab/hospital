"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heartAnimation from "../../../public/animations/heart.json"; // adjust path if needed

export default function Loader() {
    const [show, setShow] = useState(true);

    // 2-second delay before hiding the loader
    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
            <Lottie
                animationData={heartAnimation}
                loop={true}
                autoplay={true}
                style={{ width: 180, height: 180 }}
            />

        </div>
    );
}
