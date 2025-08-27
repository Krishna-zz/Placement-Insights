import SubmitForm from "./SubmitForm"
import StudentCard from "./StudentCard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<SubmitForm/>} />
        <Route path="/placements" element={<StudentCard />} />
      </Routes>
    </Router>


   
    </>
  )
}

export default App
