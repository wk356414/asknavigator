import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import Contact from './Contact'
import Services from "./Services"
import Faqs from "./Faqs"
import Aboutus from "./Aboutus"
import Location from "./Locations"

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
