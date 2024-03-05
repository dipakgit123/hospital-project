import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Cardiology(){

    return(
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 facilities_page_banner">
                    <h1 className="ml-5 mt-5">Obstetrics And Gynaecology</h1>
                    <ul>
                        <li className="d-inline-block ml-3">Home</li>
                        <li className="d-inline-block ml-3"><i class="fa-solid fa-chevron-right"></i></li>
                        <li className="d-inline-block ml-3">Obstetrics And Gynaecology</li>
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
                    <div className="mt-5 border p-2">
                        <h3>Emergency Cases</h3>
                       <p>0241 243 0530</p>
                    </div>
                </div>
                <div className="col-md-8 mt-5 mb-5">
                    <div className="col-12">
                    <img src="https://swasthyahospital.com/img/department/department22.jpg" className="cardio_img"/>

                    <h3 className="font-weight-bold mt-3 ">Obstetrics & Gynaecology</h3>
                    <p className="mt-3">The Obstetrics & Gynaecology department of offers the most advanced comprehensive care for all Gynaecological health conditions for patients of all ages. The department is known for its highly skilled maternity service with antenatal, postnatal and family planning clinics added. The labor ward is well equipped with delivery beds, Cardiac & Medicine, ultrasound machines, etc. The facilities for an epidural block for painless labor 
                    are also included At the request of the patient, the hospital also permits the patient's close family members to be near,
                     at the time of delivery as Birth Companion</p>
                    <br></br>
                    <p>The infertility unit provides systematic analysis, evaluation and individualized treatment to beat infertility. Ultrasound Scanning, Doppler, IUI treatment, and Laparoscopic & Hysteroscopic surgeries are major specialties of this department</p>
                    <h3 className="font-weight-bold mt-5 mb-3 ">Key Highlights</h3>
                    <table className="table table-light mt-5 table-striped table-hover">
                        <tr>
                            <td>1</td>
                            <td>UltraSound Scanning</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Colour Doppler scanning</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Total Infertility Evaluation for both males and females</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Controlled ovarian stimulation & IUI</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Facilities for Pap Smear liquid-based Cytology, Colposcope, and Mammogram. We offer to screen for Genital Tract Cancer and Breast Cancer</td>

                        </tr>
                        <tr>
                            <td>6</td>
                            <td>All sorts of Gynaecological surgeries including conventional, open and vaginal surgeries like TAH, TVT-O, NDVH and Reconstructive surgeries for Pelvic Organ Prolapse</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Endoscopic surgeries - Laparoscopic and Hysteroscopic</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Diagnostic procedures</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Tubal sterilizations</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>PCOD puncture</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}