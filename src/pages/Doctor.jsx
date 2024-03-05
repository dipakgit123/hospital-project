import React, { useEffect, useState } from "react";
import "./style.css"
import { NavLink } from "react-router-dom";
export default function Doctor(){

    const [drdata,setDrdata]= useState([]);
    useEffect(()=>{
        setDrdata(
            [
                {
                    "name":"Dr. Abhijit Pathak",
                    "position":"Consultant Cardiologist",
                    "certificate":"M.D (medicine), D.N.B, D.M (Cardiology)",
                    "photo":"https://www.swasthyahospital.com/img/team/team22.png",
                    "path":"/doctor1"
                },
                {
                    "name":"Dr. Renuka A Pathak",
                    "position":"Consultant Obstetrician, Gynaecologist",
                    "certificate":"M.D , DNB (OBGYN) Obstetrics and Gynaecology",
                    "photo":"https://www.swasthyahospital.com/img/team/team23.png",
                    "path":"/doctor2"
                }
            ]
        )
    },[])
    return(
        <>
     

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 doctor_page_banner">
                    <h1 className="ml-5 mt-5">All Doctors</h1>
                    <ul>
                        <li className="d-inline-block ml-3">Home</li>
                        <li className="d-inline-block ml-3"><i class="fa-solid fa-chevron-right"></i></li>
                        <li className="d-inline-block ml-3">Doctors</li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="bg-light mt-5 mb-5">
         <div className="container">
            <div className="row">
            {drdata.map((item)=>{
                return(
                    <>
                <div className="col-md-6 mt-2">
                    <div className="card card-body">
                        <div className="row">
                 <div className="col-4">

                    <img  src={item.photo} className="doctor_img rounded-circle mt-5"/>
                 </div>
                 <div className="col-8">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                    <h6>{item.certificate}</h6>
                   <NavLink to={item.path}> <button className="btn btn-outline-primary mt-2">View</button><br/><br/></NavLink> 
                <NavLink to="/contact"><button className="btn btn-primary">Make An Appointment</button></NavLink>    
                 </div>
                    </div>
                    </div>
                </div>
                    </>
                )
            })}
                
                </div>

         </div>
        </section>
        </>
    )
}