import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
 
 
const App =() => {
   return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup />}/> 
        <Route path="/login" element={<Login />}/>
       
        <Route path="/" element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
    </>
    
   )
   
}
export default App;



