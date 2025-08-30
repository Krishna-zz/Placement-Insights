import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SubmitForm(){

        const[formData, setFormData] = useState({
            name: '',
            branch: '',
            company: '',
            ctc: '',
  
        })

        const navigate = useNavigate()

        const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        }

        const handleSubmit = async(e) => {
            e.preventDefault();
            const res = await fetch('http://localhost:3000/user/addPlacement' ,
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

    return(
        <div className="bg-gray-600 ">
            <form action="" onSubmit={handleSubmit}  className="p-4 space-y-2">
                <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="name" placeholder="Name" onChange={handleChange} />
                <input className=" bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black"  name="branch" placeholder="Branch" onChange={handleChange} />
                <input className=" bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="company" placeholder="Company" onChange={handleChange} />
                <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" name="ctc" placeholder="CTC" onChange={handleChange} />
                <button className=" rounded-xl px-4 py-2 shadow-xl bg-blue-500 text-white" type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default SubmitForm