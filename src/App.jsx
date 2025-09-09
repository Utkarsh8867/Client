import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import FruitsPage from "./components/FruitsPage";
import VegetablesPage from "./components/VegetablesPage";
import GrainsPage from "./components/GrainsPage";
import MilkProductsPage from "./components/MilkProductsPage";
import CartPage from "./components/CartPage";
import OrderedList from "./components/OrderedList";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import OrderPage from "./pages/OrderPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/vegetables" element={<VegetablesPage />} />
            <Route path="/grains" element={<GrainsPage />} />
            <Route path="/milk-products" element={<MilkProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/OrderedList" element={<OrderedList />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/AdminDashboard" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;