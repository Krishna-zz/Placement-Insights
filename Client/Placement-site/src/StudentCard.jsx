import { useEffect, useState } from "react"


function StudentCard(){

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/user/placement_data')
        .then(res => res.json())
        .then(data => setStudents(data))
        .catch(err => console.error('Error fetching data:', err))
    }, [])



    return(
         <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Placement Records
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(student => (
          <div
            key={student._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            {/* Top Section with Gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white p-4 mb-4">
              <h2 className="text-2xl font-bold">{student.name}</h2>
              <p className="text-sm opacity-90">{student.branch}</p>
            </div>

            {/* Details Section */}
            <div className="space-y-3">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Company:</span> {student.company}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">CTC:</span> {student.ctc}
              </p>
            </div>

            {/* Footer Button */}
            <div className="mt-6 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}


export default StudentCard