import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Utensils, MessageCircle, ArrowLeft } from "lucide-react";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const hideNavbarOn = ["/login", "/admin"];

    if (hideNavbarOn.includes(location.pathname)) return null;

    const navItems = [
        { path: "/", label: "Beranda", icon: Home },
        { path: "/menu", label: "Menu", icon: Utensils },
        { path: "/feedback", label: "Feedback", icon: MessageCircle },
    ];

    return (
        <>
            {/* Top Navbar - Desktop */}
            <nav className="hidden md:flex bg-white shadow-md px-6 py-4 justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-800">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-blue-600">Kantin FPP</h1>
                </div>
                <div className="flex gap-6">
                    {navItems.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`hover:text-blue-600 ${location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Top Navbar - Mobile */}
            <div className="flex md:hidden bg-white shadow-md px-4 py-3 justify-between items-center">
                <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-800">
                    <ArrowLeft size={22} />
                </button>
                <h1 className="text-lg font-bold text-blue-600">Kantin FPP</h1>
                <div style={{ width: 22 }}></div> {/* untuk keseimbangan kiri-kanan */}
            </div>

            {/* Bottom Navbar - Mobile */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-around py-2"
                style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 -2px 6px rgba(139, 69, 19, 0.2)",
                }}
            >
                {navItems.map(({ path, label, icon: Icon }) => {
                    const isActive = location.pathname.startsWith(path);
                    return (
                        <Link
                            key={path}
                            to={path}
                            className={`flex flex-col items-center transition-all ${isActive ? "text-[#8B4513] font-semibold" : "text-gray-600 hover:text-[#8B4513]"
                                }`}
                        >
                            <Icon
                                size={24}
                                className={`transition-all ${isActive ? "drop-shadow-[0_2px_4px_rgba(139,69,19,0.5)]" : ""
                                    }`}
                            />
                            <span className="text-xs mt-1">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Navbar;
