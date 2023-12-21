import React, { useContext, useState, useEffect } from 'react'
import cvContext from '../context/cvContext';
import { Row } from 'react-bootstrap';
import Resume from './resume';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { auth } from '../firebaseConfig';
import config from '../config';


export default function ResumesList() {

    const { getDataById, getDataByAdmin } = useContext(cvContext);
    const { formData, setFormData } = useContext(cvContext);
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = auth.currentUser;
                const userUid = user.uid;
                let data = await getDataById();
                console.log(config.ADMIN);

                if (userUid == config.ADMIN)
                    data = await getDataByAdmin();
                setResumes(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = () => {
        navigate("/edit")
    }

    console.log(resumes);


    return (
        <div>
            <div>
                {resumes.length === 0 ? (
                    <></>
                ) : (
                        <>
                            <h2 style={{ textAlign: 'center' }}> Resumes history:</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {resumes.map((resume) => (
                                    <div
                                        key={resume.id}
                                        style={{
                                            border: '1px solid #ccc',
                                            backgroundColor: resume.design?.backgroundColor || '#f0f0f0',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            margin: '10px',
                                            width: '300px',
                                            color: resume.design?.fontColor || '#000000',
                                            fontFamily: resume.design?.fontFamily || 'Arial, sans-serif',
                                            fontSize: resume.design?.fontSize || '16px',
                                        }}
                                    >
                                        {/* Display the image */}
                                        {resume.imageUrl && (
                                            <img
                                                src={resume.imageUrl}
                                                alt="Resume Image"
                                                style={{
                                                    borderRadius: '50%',
                                                    width: '100px',
                                                    height: '100px',
                                                }}
                                            />
                                        )}
                                        <p></p>
                                        <p>
                                            {resume.firstName}<span> </span>{resume.lastName}
                                        </p>
                                        <br />
                                        <p>
                                            <strong>Work Experience:</strong>
                                        </p>
                                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                            <li>
                                                    <strong>Company Name:</strong> {resume.workExperience2[0].companyName}
                                                    <br />
                                                    <strong>Time Frame:</strong> {resume.workExperience2[0].timeFrame}
                                            </li>
                                            <li>
                                                    <strong>Company Name:</strong> {resume.workExperience1[0].companyName}
                                                    <br />
                                                    <strong>Time Frame:</strong> {resume.workExperience1[0].timeFrame}
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Education Details:</strong>
                                        </p>
                                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>

                                            <li>
                                                <p>
                                                    <strong>course:</strong> {resume.education2[0].course}
                                                </p>
                                                <p>
                                                    <strong>timeFrame:</strong> {resume.education2[0].timeFrame}
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>course:</strong> {resume.education1[0].course}
                                                </p>
                                                <p>
                                                    <strong>timeFrame:</strong> {resume.education1[0].timeFrame}
                                                </p>
                                            </li>

                                        </ul>
                                        {/* Add other resume fields accordingly */}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
            </div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add resume
      </Button>
        </div>


    )
}
