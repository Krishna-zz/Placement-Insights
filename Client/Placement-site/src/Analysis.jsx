import { useNavigate } from "react-router-dom"
import { useState , useEffect } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

function Analysis(){

    const navigate = useNavigate()

    const totalStudents = 200;
  const placedStudents = 120;
  const totalCompanies = 25;
  const highestCTC = 45;
  const avgCTC = 12.5;

  const placementPercentage = ((placedStudents / totalStudents) * 100).toFixed(2);

  const branchStats = {
    "CSE": 50,
    "IT": 30,
    "AI & DS": 20,
    "Mechanical": 10,
    "Civil": 10,
  };

  const ctcStats = {
    "Above 20 LPA": 8,
    "15-20 LPA": 12,
    "10-15 LPA": 20,
    "7-10 LPA": 25,
    "4-7 LPA": 30,
    "Below 4 LPA": 25,
  };

  // Chart Data
  const branchChartData = {
    labels: Object.keys(branchStats),
    datasets: [
      {
        label: "Placements by Branch",
        data: Object.values(branchStats),
        backgroundColor: ["#0ea5e9", "#6366f1", "#f97316", "#10b981", "#ef4444"],
        borderWidth: 2,
      },
    ],
  };

  const ctcChartData = {
    labels: Object.keys(ctcStats),
    datasets: [
      {
        label: "CTC Distribution",
        data: Object.values(ctcStats),
        backgroundColor: ["#3b82f6", "#6366f1", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981"],
        borderWidth: 2,
      },
    ],
  };

  // Animated Counter
  const [count, setCount] = useState({ placed: 0, companies: 0, highest: 0, avg: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        placed: Math.min(prev.placed + 2, placedStudents),
        companies: Math.min(prev.companies + 1, totalCompanies),
        highest: Math.min(prev.highest + 1, highestCTC),
        avg: Math.min(prev.avg + 0.5, avgCTC),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
        Placement Analysis Dashboard
      </h1>

      {/* Glassmorphism Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
       
          <div
            onClick={() => navigate("/All_Students")}
            
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <p className="text-gray-600 font-medium">Total Placements</p>
            <h2 className="text-3xl font-bold text-blue-700">{count.placed}</h2>
          </div>
           <div
            onClick={() => navigate("/Companies")}
            
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <p className="text-gray-600 font-medium">Total Companies</p>
            <h2 className="text-3xl font-bold text-blue-700">{count.companies}</h2>
          </div>
           <div
            
            
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <p className="text-gray-600 font-medium">Highest CTC</p>
            <h2 className="text-3xl font-bold text-blue-700">{ count.highest + " LPA"}</h2>
          </div>
           <div
            
            
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <p className="text-gray-600 font-medium">Average CTC</p>
            <h2 className="text-3xl font-bold text-blue-700">{ count.avg.toFixed(1) + " LPA"}</h2>
          </div>
        
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Branch Chart */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
            Branch Wise Placements
          </h2>
          <Doughnut data={branchChartData} />
        </div>

        {/* CTC Chart */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
            Placements by CTC
          </h2>
          <Bar data={ctcChartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Dropdown Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[ 
          { title: "Placements by Branch", data: branchStats },
          { title: "Placements by CTC", data: ctcStats },
          { title: "Placement Summary", data: { Total: placedStudents, Companies: totalCompanies } }
        ].map((section, index) => (
          <details key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/40">
            <summary className="cursor-pointer text-lg font-semibold text-blue-700 hover:underline">
              {section.title}
            </summary>
            <ul className="mt-3 space-y-2">
              {Object.entries(section.data).map(([key, value]) => (
                <li key={key} className="flex justify-between border-b pb-1">
                  <span>{key}</span>
                  <span className="font-bold">{value}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
    

export default Analysis