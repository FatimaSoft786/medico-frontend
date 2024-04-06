import React from "react";
import LoginPage from "pages/Login";
import Verification from "pages/Verification"
import SignupPage from "pages/Signup";
import PatientDashboard from "pages/PatientDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "pages/ForgotPassword";
import PatientProfile from "pages/PatientProfile";
import FavoriteDocs from "pages/FavoriteDocs";
import PatientBookings from "pages/Patientbookings";
function App() {
  return (
   <Router>
      <Routes>

      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<PatientDashboard/>}/>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/patientBooking" element={<PatientBookings/>}/>
      <Route path="/favDocs" element={<FavoriteDocs/>}/>
      <Route path="/patientProfile" element={<PatientProfile/>}/>

     
       
      </Routes>
    </Router>
   
    
  );
}

export default App;
