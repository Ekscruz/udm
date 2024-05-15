import React from'react';
import './Academics.css';
import DrImg from '../../utils/images/ovppa.jpg';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const academics =[
    {
        id:1,
        img: [DrImg],
        
    }
]

function Academics (){

    return (
        <div className='academics-page'>
            <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center w-75 mb-5'>Universidad de Manila Academics</h1>
                    <p></p>
                </div>
            </header>

            <div className='container my-5'>
            <div className='row'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        
                        <p>0The Office of the Vice President for Academic Affairs is one of the bastions of Universidad de Manila in upholding its mission, vision, and core values. As this Office is directly linked to the Office of the President, it is responsible for carrying out and implementing educational policies and programs of UDM.

                            Furthermore, the Office of the Vice President for Academic Affairs leads the planning and evaluation of the different programs and activities of the University. This ensures that the different academic heads, teachers, and students are part and parcel of the various thrusts and plans of action of this Office.

                            Overall, the Office of the Vice President for Academic Affairs is directly responsible for the different programs, activities, composition, and undertakings of the eight (8) Colleges representing twenty-six (26) programs as well as seven (7) academic support units.</p>
                    </div>
              </div>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>The OVPAA Goals and Objectives</h2>
                        <p>1. Systems, Academic Support, and Services Improvement</p>
                        <p>   1.1 Develop and periodically review Admission and Enrolment Procedures.</p>
                        <p>       1.2 Streamline Faculty and Student Performance Management and Audit System.</p>
                        <p>      1.3 Make the academic support units at par with national and international standards.</p>

                        <p>      2. Center for Micro-credentialing and Industry Training Promotion</p>
                        <p>       2.1 Assess training programs and calibrate their structures to provide new knowledge, modern skill, and valuable flexibility to its students that will promote lifelong learning.</p>

                        <p>      2.2 Strengthen the industry partners that will guarantee the student’s application of knowledge leading to primary employability.</p>
                        <p>       2.3 Develop an entrepreneurial mindset that will upgrade their competitiveness and be responsive to the changing market demands.</p>

                        <p>       3. Academic Excellence:</p>
                        <p>       3.1 Analyze program and curriculum structures to make them more attuned to local and international standards.</p>
                        <p>       3.2 Upscale the levels of recognition and accreditation of the different programs of the University</p>
                        <p>      3.3 Nurture faculty development and enhancement by exposing them to different opportunities relevant to their competitiveness and high-impact mode of delivery of instruction.</p>
                        <p>       3.4 Strengthen learning infrastructures responsive to the student’s evolving needs and the standards of national and international importance.</p>

                        <p>      4. Leveling up Linkages and Community Extension:</p>
                        <p>       4.1 Expand and diversify Community Extension Programs and academe industry local and international partnerships.</p>
                        <p>       4.2 Create more opportunities for faculty and student exchange both local and international.</p>
                        <p>      4.3 Establish the adoption of Community Units per academic program.</p>

                        <p>       5. Engagement in Research:</p>
                        <p>       5.1 Encourage faculty and students to come up with relevant research output.</p>
                        <p>      5.2 Develop research programs and activities for specific disciplines to promote innovation and discoveries.</p>
                        <p>      5.3 Fortify research extension services concerning the different stakeholders of the University.</p>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row g-4'>
                    {academics.map((academic) => (
                        <div key={academic.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src = {academic.img} />
                                <Card.ImgOverlay className = 'd-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{academic.title}</Card.Title>
                                    <Card.Text>{academic.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            </div>
                    ))}
                </div>
            </div>

            <Link to="/courses"/>   

        </div>
    )
}
export default Academics;