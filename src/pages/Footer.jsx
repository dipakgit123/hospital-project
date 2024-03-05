import React from "react";
import "./style.css"
export default function Footer(){

    return(<>
    <div className="container-fluid bg-dark p-5 text-white">
        <div className="row">
            <div className="col-md-4">
                <img src="https://www.swasthyahospital.com/img/footerlogo.png" alt=""/>
                <p className="mt-2 text-justify">Wide range of medical services like diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery.</p>
                <h6><i  class=" mr-2 fa-solid fa-location-dot"></i>Annabhau Sathe Chowk, Laltaki, Ahmednagar 414001</h6>
                <p><i  class="  mr-2 fa-solid fa-phone-flip"> </i>0241-2344301, 2341311, 2430530</p>
                <p><i  class="  mr-2 fa-regular fa-envelope"></i>swasthyahospital@gmail.com</p>
            </div>
            <div className="col-md-2">
                <h2>Quick Links</h2>
                <h6 className="mt-4">Home</h6>
                <h6 className="mt-4">Facilities</h6>
                <h6 className="mt-4">Docters</h6>
                <h6 className="mt-4">Cashless</h6>
                <h6 className="mt-4">Contact us</h6>
            </div>
            <div className="col-md-2">
                <h2>Facilities</h2>
                <h6 className="mt-4">Cath Lab</h6>
                <h6 className="mt-4"> Cashless Facilities</h6>
                <h6 className="mt-4">Casuality</h6>
                <h6 className="mt-4">2D Echo</h6>
                <h6 className="mt-4">ICU,Stress Test</h6>
            </div>
            <div className="col-md-4">
   <h2>Follow US</h2>


<ul type="none">
    <li><i class=" mt-3 mr-3 fa-brands fa-facebook" ></i>Facebook</li>
    <li><i class=" mt-3 mr-3 fa-brands fa-twitter" ></i>Twitter</li>
    <li><i class=" mt-3 mr-3 fa-brands fa-youtube" ></i>YouTube</li>
    </ul>                
            </div>
        </div>
    </div>
    </>)
}