import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from './Pages/Contact'
import Services from "./Pages/Services"
import Faqs from "./Pages/Faqs"
import Aboutus from "./Pages/Aboutus"
import Location from "./Pages/Locations"

export default function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/service' element={<Services/>} />
           <Route path='/faqs' element={<Faqs/>} />
           <Route path='/aboutus' element={<Aboutus/>} />
           <Route path='/location' element={<Location/>} />
        </Routes>
      </div>
    </Router>
  );
}
