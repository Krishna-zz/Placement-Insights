import images from "./assets/images";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBuilding,
  FaMoneyBillWave,
  FaGraduationCap,
  FaCrown,
} from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { href } from "react-router-dom";


function Super30(){

  const [super30, setSuper30] = useState([])
  const [year, setYear] = useState("2025")

  useEffect(() => {

    fetch('http://localhost:3000/user/Super_30_data')
    .then(res => res.json())
    .then(data => setSuper30(data))
    .catch(err => console.error('Error fetching data:', err))
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
          PlaceMate
        </h1>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-700 font-semibold hover:text-blue-600 transition"
          >
            About Us          
          </a>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition cursor-pointer" 
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </nav>

      {/* ✅ Heading */}
      <h2 className="text-4xl font-extrabold text-center my-10 text-gray-800">
        Top 30 Placements - {year}
      </h2>

      {/* ✅ Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 pb-16">
        {super30.map((student, index) => {
          let cardClasses =
            "rounded-2xl flex flex-col justify-between bg-white shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden";

          let extraStyle = "border border-gray-200 hover:border-gray-300";
          let topStrip = null;
          let badge = null;
          let sizeClasses = "h-[490px]"; // Default card height

          if (index < 3) {
            // ✅ Top 3 Elite
            sizeClasses = "h-[500px]"; // Bigger
            extraStyle =
              "border-4 border-transparent hover:animate-gradient-border"; // Animated gradient on hover
            topStrip = (
              <div
                className={`absolute top-0 left-0 w-full  ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                    : index === 1
                    ? "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"
                    : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                } h-32 rounded-t-xl z-0`}
              ></div>
            );
            badge = (
              <div className="absolute top-5 right-5 flex items-center gap-1 text-yellow-500 text-xl font-bold">
                <FaCrown className="animate-bounce" />
                #{index + 1}
              </div>
            );
          } else if (index < 31) {
            // ✅ Next 9
            topStrip = (
              <div className="h-32 absolute top-0 left-0 w-full rounded-t-xl z-0 bg-gradient-to-r from-blue-100 to-purple-100"></div>
            );
          }

          return (
            <div
              key={student.rank}
              className={`${cardClasses} ${extraStyle} ${sizeClasses}`}
            >
              {topStrip}
              {badge}

              {/* Center Content */}
              <div className="flex flex-col absolute top-14 relative z-10  -mt-16 flex-grow justify-center items-center text-center px-6">
                  {/* Avatar with Image */}
                    <div className="w-40 h-40 rounded-full shadow-lg mb-6 overflow-hidden border-4 border-white">
                        <img
                         src={images[`Student${index + 1}`]}  // Dynamically load image
                         alt={student.StudentName}
                         className="w-full h-full object-cover"
                        />
                    </div>

                {/* Name & Rank */}
                <h3 className="text-2xl font-bold mb-2">{student.StudentName}</h3>
                <p className="text-gray-500 mb-6 text-lg">Rank #{index + 1}</p>

                {/* Details */}
                <div className="space-y-4 mb-9 text-gray-700">
                  <p className="flex items-center gap-3 text-lg justify-center">
                    <FaGraduationCap className="text-blue-500 text-2xl" /> <span className="text-lg font-semibold text-gray-800 flex items-center gap-2">{student.StudentBranch}</span>
                  </p>
                  <p className="flex items-center gap-3 text-lg justify-center">
                    <FaBuilding className="text-purple-500 text-2xl" /><span className="text-lg font-semibold text-gray-700 flex items-center gap-2"> {student.StudentCompany}</span>
                  </p>
                  <p className="flex items-center gap-3 text-lg justify-center">
                    <FaMoneyBillWave className="text-green-500 text-2xl" /> <span className="text-lg font-bold text-green-400 flex items-center gap-2">{student.StudentCTC}</span>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex mt-3 justify-around text-xl border-t pt-4 pb-4">
                <a href={student.LinkedIn} className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  <FaLinkedin />
                </a>
                <a href={student.Github} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  <FaGithub />
                </a>
                <a href={student.Portfolio} className="text-gray-500 hover:text-green-600 transition-colors duration-300 transform hover:scale-110">
                  <SiAboutdotme />
                </a>
                <a href={student.Instagram} className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Super30