import { useEffect, useState } from "react"
import { FaBuilding, FaRupeeSign, FaUserGraduate } from "react-icons/fa";

function AllStudents(){

 const [students, setStudents] = useState([])

    useEffect(() => {

        const api = import.meta.env.VITE_API
        console.log(api)

        
        fetch(`${api}user/placement_data`)
        .then(res => res.json())
        .then(data => setStudents(data))
        .catch(err => console.error('Error fetching data:', err))
    }, [])



    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
        Placement Records
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student) => (
          <div
            key={student._id}
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 border border-gray-100"
          >
            {/* Profile Image Placeholder */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {student.name.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* Name & Branch */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
              <p className="text-gray-500 text-sm flex justify-center items-center gap-2 mt-1">
                <FaUserGraduate className="text-blue-500" /> {student.branch}
              </p>
            </div>

            {/* Details Section */}
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-700 text-lg">
                <FaBuilding className="text-purple-500" />
                <span className="font-semibold">Company:</span> {student.company}
              </p>
              <p className="flex items-center gap-3 text-gray-700 text-lg">
                <FaRupeeSign className="text-green-500" />
                <span className="font-semibold">CTC:</span> {student.ctc}
              </p>
            </div>

            {/* Footer Button */}
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default AllStudents