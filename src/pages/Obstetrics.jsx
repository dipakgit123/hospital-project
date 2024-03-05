import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Obstetrics(){
    return(
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 facilities_page_banner">
                    <h1 className="ml-5 mt-5">Cardiology Department</h1>
                    <ul>
                        <li className="d-inline-block ml-3">Home</li>
                        <li className="d-inline-block ml-3"><i class="fa-solid fa-chevron-right"></i></li>
                        <li className="d-inline-block ml-3">Cardiology </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="font-weight-bold">All Departments</h3>
                    <div className=" border-none mt-5">
                        <NavLink to="/cardiology" className="font-weight-bold mt-2 ml-5"> <h4>Cardiology</h4></NavLink>
                       <hr></hr>
                       <NavLink to="/" className="font-weight-bold mt-2 ml-5"> <h4> Obstetrics And Gynaecology</h4> </NavLink>
                    </div>
                    <div className="mt-5 border  p-2">
                        <h3>Emergency Cases</h3>
                       <p>0241 243 0530</p>
                    </div>
                </div>
                <div className="col-md-8 mt-5 mb-5">
                    <div className="col-12">
                    <img src="https://swasthyahospital.com/img/department/department21.jpg" className="cardio_img" alt=""/>

                    <h3 className="font-weight-bold mt-3 ">Cardiology</h3>
                    <p className="mt-3">The hospital is well equipped with all the modern equipments to ensure treatment for the patients with any cardiac problem. The team of Cardiologists, Cath Lab and non-invasive lab technicians have wide experience in the management of all complex cardiac problems. The latest techniques in the field of Pacing and Coronary angioplasties are being routinely performed at the Hospital.

We had a dream … It was our aim to provide the most sophisticated Cardiac Care at the most affordable cost to the patients in and around Ahmednagar. 10 yr down the lane, we have been successful in our goal and have grown into the most trusted Heart Hospital in this part of the country.</p>
                    <br></br>
                    <p>Patients come to our hospital from all over the district state. `Safe and Ethical Heart treatment` is our motto and we strive to maintain the highest standards of cardiac care anywhere in the world.

All this has been possible because of You. Your faith in us has been our primary motivation and our inspiration to work harder. Our focus has always your satisfaction and the results show that our stand has been vindicated. It has made us more humble and has strengthened our resolve to do better than what we have achieved. Not to rest on Laurels but to do dream more …</p>
                    <h3 className="font-weight-bold mt-5 mb-3 ">INVASIVE CARDIOLOGY</h3>
                    <table className="table table-light mt-5 table-striped table-hover">
                        <tr>
                            <td>1</td>
                            <td>Coronary Angiography</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Coronary Angioplasty</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Peripheral Angioplasty including Carotid Stenting</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dilatation / Stenting of Coarctation of Aorta</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pacemakers / Implants</td>

                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Valvuloplasty – Mitral / Aortic / Pulmonary</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Device Closure of PDA / ASD etc</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}