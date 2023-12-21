import React, { useContext, useRef } from 'react'
import './resume.css'
import cvContext from '../context/cvContext'
import { Button } from 'react-bootstrap';
import  html2pdf  from 'html2pdf.js';

export default function Resume() {
    const {formData} = useContext(cvContext);
    const ResumeRef = useRef();
    const handleDownload = () => {
        const resumeElement = ResumeRef.current;

        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };

            html2pdf().from(resumeElement).set(pdfOptions).save();
        }
    };
  return (
    <div >
        <Button onClick={handleDownload}>Download as PDF</Button>
        <div ref={ResumeRef}>
    <div className="container" >
        <div className="profile">
            <header>
                <img className="img" src={formData.imageUrl} alt="pic"/>
                <div className="det">
                    <h2>{formData.firstName}</h2>
                    <h2 className="orange">{formData.lastName}</h2>
                </div>
                <article className="left">
                    <div className="contact">
                        <div className="col">
                            <ul className="first">
                                <li>PHONE</li>
                                <li>ADDRESS</li>
                                <li>EMAIL</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>{formData.phone}</li>
                                <li>{formData.address}</li>
                                <li>{formData.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about">
                        <h1>ABOUT ME</h1>
                        <p>{formData.aboutMe}</p>
                    </div>
                </article>
            </header>
            {/* <nav>
                <div className="navi">
                    <i className="fa fa-facebook-official"></i>
                    /
                    <a href="#">PDSFreebies</a>
                </div>
                <div className="navi">
                    <i className="fa fa-envelope"></i>
                    /
                    <a href="#">PDSFreebies</a>
                </div>
                <div className="navi">
                    <i className="fa fa-envelope"></i>
                    /
                    <a href="#">PDSFreebies</a>
                </div>
                <div className="navi">
                    <i className="fa fa-envelope"></i>
                    /
                    <a href="#">PDSFreebies</a>
                </div>
                <div className="navi">
                    <i className="fa fa-envelope"></i>
                    /
                    <a href="#">PDSFreebies</a>
                </div>
            </nav> */}
        </div>
    </div>
    <section className="container  white">
        <h2 className="middle">Experience</h2>
        <div className="experience">
            
            <div className="text">
                <div className="header">
                <h3>{formData.workExperience1.role}</h3>
                    <p>{formData.workExperience1.timeFrame}</p>
                </div>
                <article className="right">
                    <h4>{formData.workExperience1.companyName}</h4>
                    <p>{formData.workExperience1.description}</p>
                </article>
            </div>
        
       
            <div className="text">
                <div className="header">
                <h3>{formData.workExperience2.role}</h3>
                    <p>{formData.workExperience2.timeFrame}</p>
                </div>
                <article className="right">
                    <h4>{formData.workExperience2.companyName}</h4>
                    <p>{formData.workExperience2.description}</p>
                </article>
            </div>
        </div>
       
    </section>
    <section className="education container">
        <h2 className="middle">Education</h2>
        <article>
            <div className="text">
                <div className="header">
                    
                    <h3>{formData.education1.school}</h3>
                    <p>{formData.education1.timeFrame}</p>
                </div>
                <article className="right">
                    <h4>{formData.education1.course}</h4>
                    <p>{formData.education1.description}</p>
                </article>
            </div>
        </article>
        <article>
            <div className="text">
                <div className="header">
                    
                    <h3>{formData.education2.school}</h3>
                    <p>{formData.education2.timeFrame}</p>
                </div>
                <article className="right">
                    <h4>{formData.education2.course}</h4>
                    <p>{formData.education2.description}</p>
                </article>
            </div>
        </article>
    </section>
   
</div>
    </div>
  )
}