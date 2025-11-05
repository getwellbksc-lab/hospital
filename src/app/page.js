


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import Doctors from "./pages/Doctors";
import FloatingSocialIcons from "./components/FloatingSocialIcons";


export default function Home() {

  return (
    <>
      <FloatingSocialIcons />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Doctors />


    </>
  );
}
