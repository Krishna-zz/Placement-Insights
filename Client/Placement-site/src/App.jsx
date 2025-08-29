import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentCard from "./StudentCard"
import HomePage from "./homepage";
import SubmitForm from "./SubmitForm"
import Analysis from "./Analysis";
import AllStudents from "./Allstudents";
import Companies from "./Companies";

function App() {
 

  return (
    <>
     
     
     <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/placements" element={<StudentCard/>}/>
            <Route path="/admin" element={<SubmitForm/>}/>
            <Route path="/placement_analysis" element={<Analysis/>}/>
            <Route path="/All_Students" element={<AllStudents/>}/>
            <Route path="/Companies" element={<Companies/>}/>
        </Routes>
     </Router>
    
   
    </>
  )
}

export default App
