import React from "react";
import "./style.css";
import { useState,useEffect } from "react";

export default  function Facilities(){
    const [fdata,setFdata]= useState([]);
    useEffect(()=>{
        setFdata(
            [
               {
                "photo":"https://swasthyahospital.com/img/gallery/cashless.jpg",
                "text":"Cashless Facilities"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/cath%20lab.JPG",
                "text":"Cath Lab"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/opreation%20theater.JPG",
                "text":"Opreation Theater"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/icu.JPG",
                "text":"ICU"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/minor%20ot.JPG",
                "text":"Cauallty"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/2D%20echo.JPG"
                ,"text":"New OPD"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/stress%20test.JPG",
                "text":"Stress Test"
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/casualty.JPG",
                "text":"Cauallty "
               },
               {
                "photo":"https://swasthyahospital.com/img/gallery/new%20opd.JPG",
                "text":"New OPD"
               }
            ]
        )
        console.log(setFdata)
    },[])


    return(
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 facilities_page_banner">
                    <h1 className="ml-5 mt-5">Facilities</h1>
                    <ul>
                        <li className="d-inline-block ml-3">Home</li>
                        <li className="d-inline-block ml-3"><i class="fa-solid fa-chevron-right"></i></li>
                        <li className="d-inline-block ml-3">Facilities</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mt-5 mb-5">
            <div className="row">
                {fdata.map((item)=>{
                   return(
                    <>
                    <div className="col-md-4 mt-5"  >
                        <img src={item.photo} className="facility_img " alt=""/>
                        <div className="text_1">
                            <h3 className="text-white text font-weight-bold">{item.text}</h3>
                        </div>
                    </div>
                , 
                    </>
                   ) 
                })}
                
            </div>

        </div>
        </>
    )
}