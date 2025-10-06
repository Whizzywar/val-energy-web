import {} from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <HomePage />
      <ProductPage />
      <ContactPage />
      <AboutPage />
    </div>
  );
}
export default App;
