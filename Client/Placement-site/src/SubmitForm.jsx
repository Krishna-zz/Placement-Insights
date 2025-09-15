import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SubmitForm(){

        const[formData, setFormData] = useState({
            name: '',
            branch: '',
            company: '',
            ctc: '',
  
        })

        const [superdata, setSuperdata] = useState({
             StudentName: "",
             StudentBranch: "",
              StudentCompany: "",
             StudentCTC: "",
            LinkedIn: "",
            Github: "",
            Portfolio: "",
            Instagram: "",
        })

        const navigate = useNavigate()

        const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        }

        const handleSubmit = async(e) => {
            e.preventDefault();
            const res = await fetch('http://localhost:3000/user/setcard' ,
                {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            )
            const data = await res.json()
            alert(data.message)

            if (res.ok) {
                navigate('/All_Students')
            }
        }


        const SuperChange = (e) => {
            setSuperdata({...superdata, [e.target.name] : e.target.value})
        }

        const SuperSubmit = async(event) => {
            event.preventDefault()

            const response = await fetch('http://localhost:3000/user/addSuper30', 
                {
                    method:'POST',
                    headers:{
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(superdata)
                }
            )
            const s_data = await response.json()
            alert(s_data.message)

            if (response.ok) {
                navigate('/Super_30')
            }
           
        }

    return(
        <div className="bg-white">
            <h1 className="text-2xl">Total Placements Data</h1>
            <div className="bg-gray-600 ">
            <form action="" onSubmit={handleSubmit}  className="p-4 space-y-2 flex flex-col w-100">
                <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="name" placeholder="Name" onChange={handleChange} />
                <input className=" bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black"  name="branch" placeholder="Branch" onChange={handleChange} />
                <input className=" bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="company" placeholder="Company" onChange={handleChange} />
                <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="ctc" placeholder="CTC" onChange={handleChange} />
                <button className=" rounded-xl px-4 py-2 shadow-xl bg-blue-500 text-white" type="submit">Add Student</button>
            </form>
            </div>
            <div className="mt-15">
                <h1 className="text-2xl">Super30 Students Data</h1>
                <div className=" bg-gray-400 ">
                    <form action="" onSubmit={SuperSubmit} className="flex mt-4 pt-5 pb-5 flex-col w-100 justify-between">
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="StudentName" placeholder="Student Name"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="StudentBranch" placeholder="Branch"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="StudentCompany" placeholder="Company"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="StudentCTC" placeholder="StudentCTC"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="LinkedIn" placeholder="LinkedIn"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="Github" placeholder="Github"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="Portfolio" placeholder="Portfolio"  />
                        <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={SuperChange}  name="Instagram" placeholder="Instagram"  />
                         <button className=" rounded-xl px-4 py-2 shadow-xl bg-blue-500 text-white" type="submit" >Add Student</button>
                    </form>
                </div>
              
            </div>
        </div>
    )
}

export default SubmitForm