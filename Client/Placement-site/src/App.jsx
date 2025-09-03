import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import SubmitForm from "./SubmitForm"
import Analysis from "./Analysis";
import AllStudents from "./Allstudents";
import Companies from "./Companies";
import Super30 from "./Super30";
import AuthPage from './pages/Authpage'
;

function App() {
 

  return (
    <>
     
     
     <Router>  
        <Routes>  
            <Route path="/" element={<HomePage />}/>
             <Route path="/Auth"  element={<AuthPage/>}/>
            <Route path="/admin" element={ <SubmitForm/>}/>
            <Route path="/placement_analysis" element={<Analysis/>}/>
            <Route path="/All_Students" element={<AllStudents/>}/>
            <Route path="/Companies" element={<Companies/>}/>
            <Route path="/Super_30" element={<Super30/>}/>
           
        </Routes> 
     </Router> 
    
   
    </>
  )
}

export default App
