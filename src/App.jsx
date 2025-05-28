// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TenantList from "./pages/TenantList"; // halaman daftar tenant
import TenantMenu from "./pages/TenantMenu"; // halaman menu per tenant
import FeedbackForm from "./pages/FeedbackForm";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<TenantList />} />
        <Route path="/menu/:id" element={<TenantMenu />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
