import React from "react";
import Index from "./index.jsx";
import Nav from "./Navbar.jsx";
import Contact from "./Contact.jsx"
import Doctor from "./Doctor.jsx"
import Cashless from "./Cashless.jsx"
import Footer from "./Footer.jsx";
import Facilities from "./Facilities.jsx";
import Cardiology from "./Cardiology.jsx";
import Obstetrics from "./Obstetrics.jsx";
import Doctor1 from "./Doctor1.jsx";
import Doctor2 from "./Doctor2.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
export default function Main(){
    return(
        <>
<Router>
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="docters" element={<Doctor></Doctor>}></Route>
        <Route path="cashless" element={<Cashless></Cashless>}></Route>
        <Route path="facilities" element={<Facilities></Facilities>}></Route>
        <Route path="cardiology" element={<Cardiology></Cardiology>}></Route>
        <Route path="obstrestics" element={<Obstetrics></Obstetrics>}></Route>
        <Route path="/doctor1" element={<Doctor1></Doctor1>}></Route>
        <Route path="/doctor2" element={<Doctor2></Doctor2>}></Route>
    </Routes>
    <Footer></Footer>
</Router>
        </>
    )
}