import {} from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
export default App;
