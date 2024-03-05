import React from "react";
import "./style.css";

export default function Doctor1(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 doctor_page_banner">
                    <h1 className="ml-5 mt-5">Dr. Abhijit Pathak</h1>
                    <ul>
                        <li className="d-inline-block ml-3">Home</li>
                        <li className="d-inline-block ml-3"><i class="fa-solid fa-chevron-right"></i></li>
                        <li className="d-inline-block ml-3">Cardiologist</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-md-3">
                <div className="row">
                <div className="col-12">
                <div className="card doct_card p-0">
                    <div className="card-body">
                        <img  src="https://swasthyahospital.com/img/team/team20.png" className="doctor1_img" alt=""/>
                        <h3 className="font-weight-bold mt-2">Dr. Abhijit Pathak</h3>
                        <p>Consultant Cardiologist</p>
                        <p className="text-primary">M.D (medicine), D.N.B, D.M (Cardiology)</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="col-12">
                    <h3 className="font-weight-bold">About Me:</h3>
                    <p className="mt-3">Dr. Abhijit Pathak is the Known International cardiologist in Ahmednagar. He is a Senior Consultant Interventional Cardiologist & Head of the Cardiology Department at Swasthya Hospital, Ahmedangar, He possesses more than 25 years of experience as a consultant interventional cardiologist .To provide cardiology care in semiurban area like Ahmednagar at affordable cost to patients. To spread awareness about heart disease in community. To educate the society about scientific truths regarding health issues. He has profound skills and immense expertise to deal with a broad spectrum of heart conditions that require interventions. He is one of the best interventional cardiologist in Maharashtra Dr Abhijit Pathak has been performing coronary angioplasties for the last two decade. He provides compassionate care to his patients and performs successful interventional cardiology procedures</p>
                 <h3 className="font-weight-bold mt-4" >Education:</h3>
                 <table  className="table table-light mt-3 table-striped table-hover ">
                    <tr>
                        <td className="font-weight-bold">Year</td>
                        <td className="font-weight-bold">Degree</td>
                        <td className="font-weight-bold">Institute</td>
                    </tr>
                    <tr>
                        <td>1993</td>
                        <td>MBBS</td>
                        <td>B J Medical College Pune</td>
                    </tr>
                    <tr>
                        <td>1997</td>
                        <td>M.D. Medicine</td>
                        <td>Gold Medalist Pune University</td>
                    </tr>
                    <tr>
                        <td>2001</td>
                        <td>DNB Cardiology</td>
                        <td>Nation Board Of Examination Delhi</td>
                    </tr>
                    <tr>
                        <td>2001</td>
                        <td>DM Cardiology</td>
                        <td>LTMG hospital Sion</td>
                    </tr>
                 </table>
                 <h3 className="font-weight-bold mt-4" >Experienced:</h3>
                 <table  className="table table-light mt-3 table-striped table-hover ">
                    <tr>
                        <td className="font-weight-bold">Year</td>
                        <td className="font-weight-bold">Hospital</td>
        
                    </tr>
                    <tr>
                        <td>2001 - 2010</td>
                        <td>Pathak Hospital, Ghumare Lane - as Consultant Cardiologist</td>
                      
                    </tr>
                    <tr>
                        <td>2001 - 2014</td>
                        <td>Working as director Cath lab at Anand Rishiji Hospital Ahmednagar</td>
                       
                    </tr>
                    <tr>
                        <td>2010-present</td>
                        <td>Working as Director and Interventional Cardiologist at Swasthya Hospital Medical Research Center</td>
                      
                    </tr>
                    
                 </table>
                 <h3 className="font-weight-bold mt-4" >Skills:</h3>
                 <table  className="table table-light mt-3 table-striped table-hover ">
                 
                    <tr>
                        <td>1</td>
                        <td>Excellent interpersonal skills</td>
                      
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Excellent command over Medical Cardiac procedures</td>
                       
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>In depth knowledge about cardiac and vascular diseases</td>
                      
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Ability to work under pressure and take correct decisions</td>
                      
                    </tr>
                    
                 </table>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}