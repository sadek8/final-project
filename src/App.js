import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SeatSelection from './Pages/SeatSelection ';
import AdditionalFacilities from './Pages/AdditionalFacilities';
import BookingSummaryAction from './Pages/BookingSummaryAction';
import BookingSummaryHorror from './Pages/BookingSummaryHorror';
import BookingSummaryComedy from './Pages/BookingSummaryComedy';
import BookingConfirmation from './Pages/BookingConfirmation';
import './App.css';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import AdminControlPanel from './Pages/AdminControlPanel';
import Navbar from "./Navbar/Navbar";
import 'bootstrap';
import MaybeShoeNavbar from './Pages/MaybeShoeNavbar';
function App()  {
  
  return (

    <div className="App">
      <MaybeShoeNavbar>
      <Navbar  />
      </MaybeShoeNavbar>
      <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/login"  element={<Login/>} />
         <Route path="/admin" element={<AdminControlPanel />} isAdmin={true} /> 
        <Route  path="/registration"  element={<Registration/>} />
        <Route  path="/seat-selection"  element={<SeatSelection />} />
        <Route  path="/additional-facilities"  element={<AdditionalFacilities/>} />
        <Route  path="/booking-summary-action"  element={<BookingSummaryAction/>} />
        <Route  path="/booking-summary-horror"  element={<BookingSummaryHorror/>} />
        <Route  path="/booking-summary-comedy"  element={<BookingSummaryComedy/>} />
        <Route  path="/booking-confirmation"  element={<BookingConfirmation/>} />
        </Routes>
        </div>
      
    
  );
};

export default App;