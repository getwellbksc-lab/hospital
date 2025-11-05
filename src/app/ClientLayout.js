"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./components/Loader";


export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    // Initial load
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    // On route change
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, [pathname]);

    return <>{loading ? <Loader /> : children}</>;
}
