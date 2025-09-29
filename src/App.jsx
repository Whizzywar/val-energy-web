import {} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsList from "./components/ProductsList";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsList />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;
