import React, { useEffect, useState } from "react";
import "./style.css";
export default function Index(){

    return(
        <>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-4.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon slider_icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon slider_icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div></div>
            </div>
        </div>
        <div className="container">
          <div className="row mt-3 rounded">
            <div className="col-md-3">
              <ul type="none " className="bg-primary font-weight-bold text-white text-center p-5">
                <h3 className=""><i className="fa-solid fa-user-doctor"></i></h3>
                <br></br>
                <h4 className="font-weight-bold ">Modern Hospital</h4>
                <br></br>
                <p>Provide advanced & scientific,curative.
                </p>
              </ul>
            </div>
            <div className="col-md-3">
            <ul type="none " className="bg-primary font-weight-bold text-white text-center p-5 ">
                <h3 className=""><i className="fa-regular fa-hospital"></i></h3>
                <br></br>
                <h4 className="font-weight-bold ">Expert Doctors</h4>
                <p>Give you the best treatment to cure your diseases.
                </p>
              </ul>
            </div>
            <div className="col-md-3">
            <ul type="none " className="bg-primary font-weight-bold text-white text-center p-5">
                <h3 className=""><i className="fa-solid fa-hospital-user"></i></h3>
                <br></br>
                <h4 >Cardiac Ambulance</h4>
                <p>Patients suffering from cardiac diseases.
                </p>
              </ul>
            </div>
            <div className="col-md-3">
            <ul type="none " className="bg-primary font-weight-bold text-white text-center p-5">
                <h3 className=""><i className="fa-solid fa-stethoscope"></i></h3>
                <br></br>
                <h4 className="font-weight-bold ">Emergency</h4>
                <br></br>
                <p>We work 24*7 to provide quality care at every moment
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mb-5">
              <img  src=" https://swasthyahospital.com/img/about/about1.png"/>
            </div>
            <div className="col-md-6 mt-5 mb-5">
              <h2>Welcome To <span className="text-primary">Swasthya</span> Hospital & MRC</h2>
              <br></br>
              <h4>This is a multispeciality Hospital in Ahmednagar which provides the highest standard of clinical expertise and nursing care by offering the latest technology, and state-of-the-art Hospital facilities.</h4>
               <p className="text-sm">Hospital provides wide range of medical services like OPD Services, IPD Services, Emergency Services, Cahsless Services with Various Organisation and Insurance Companies, diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery. Very highly trained and experienced doctors and medical staff members who treat patients with respect, kindness and dignity. Our staff members are always ready to deal with any kind of emergency.</p>
              <br></br>
               <p className="text-sm">Swasthya Hospital provides perfect and soothing environment, comfortable patient stay, well managed safety and security, amongst other patient centric facilities .We provide rapid assessment, intervention and treatment for numerous common and complex conditions. Patients receive customized, individual care and prompt services is our hallmark. Cashless services with various organisations & Insurance companies. .</p>

            </div>
          </div>
        </div>

        
          <h1 className="text-center font-weight bold">Our Departments</h1>
       <p className="text-center mt-3">Dedicated Services</p>
       <hr className="bg-primary border h-25"></hr>
       <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-md-6 mt-3">
        <div className="card  ">
  <img src="https://swasthyahospital.com/img/department/department4.jpg" class="card-img-top" alt="..."/>
  <div className="card-footer">
    <h5 className="card-title text-center font-weight-bold ">Cardiology</h5>
  </div>
  </div>
  </div>

<div className="col-md-6 mt-3">
<div className="card " >
  <img src="https://swasthyahospital.com/img/department/department3.jpg" class="card-img-top" alt="..."/>
  <div className="card-footer">
    <h5 className="card-title text-center font-weight-bold ">Obstetrics & Gynaecology</h5>
  </div>
  </div>
</div>
</div>
</div>

<div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-md-6 mt-5 ">
   <h1 className="font-weight-light text-center ">Cardic Ambulance</h1>
   <h2 className="font-weight-bold text-center" >Emergency Service</h2>
   <h2 className="font-weight-bold text-center" >Call: 0241 243 0530</h2>
    </div> 
    <div className="col-md-6 mt-5">
    <img src="https://swasthyahospital.com/img/ambulance.jpg"/>
    </div>
  </div>
</div>

<div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-md-6 ">
    <img src="https://swasthyahospital.com/img/figure/figure9.jpg " className="img_dep"/>
    </div> 
    <div className="col-md-6 ">
    <h3>We are the trusted experts things simple</h3>
    <br/>
    <p>Swasthya Hospital aims to achieve measurable excellence in delivery of healthcare to its clientele within identifiable ethical parameters. Hospital will strictly adhere to the highest established international standards of quality in its professional functioning.</p>
    <br/>
    <h4>Vision</h4>
    <br/>
    <p>"Affordable Quality Healthcare for the Masses Nationwide"</p>
    <br></br>
    <h4>Our Mission</h4>
    <br/>
    <p>"A Dream of Making Quality Healthcare Accessible to the Masses Nationwide"</p>
    </div>
  </div>
</div>
<div className="container col-md-12">
   <marquee className=" bg-primary text-white font-weight-bold" height="50" width="100%" ><h1>Please Call Now: 0241-2344301, 2341311, 2430530</h1></marquee>
</div>
        </>
    )
}