import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


function HomePage(){

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

    
    

    return(
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" 
              alt="PlaceMate Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-blue-700">PlaceMate</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <button
              onClick={() => navigate("/placement_analysis")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
            >
              Placement Analysis
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <a href="#about" className="text-gray-700 text-lg font-medium">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/placement_analysis")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  Placement Analysis
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center flex-grow px-6 mt-24">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Empowering Students, <br />
          <span className="text-blue-600">One Placement at a Time</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl">
          PlaceMate connects talented students with their dream companies. 
          Track placements, explore opportunities, and celebrate success.
        </p>
        <button
          onClick={() => navigate("/placements")}
          className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          Explore Placements
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} PlaceMate. All rights reserved.
      </footer>
    </div>
    )
}


export default HomePage