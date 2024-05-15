import React from'react';
import './About.css';
import {Link} from 'react-router-dom';
import HistoryImg from '../../utils/images/History.jpg';
import AccrediationImg from '../../utils/images/Accrediation.jpg';
import UniversityImg from '../../utils/images/university.jpg';
import {Card} from 'react-bootstrap';

const about = [
    {
        id:1,
        img: [HistoryImg],
        title: 'History',
        description: 'On April 17, 1995, the City Ordinance 7885 was enacted establishing the Dalubhasaan ng Lungsod Ng Maynila known as the City College of Manila (CCM) headed by Hon. Mayor Alfredo S. Lim, the father and founder of CCM with the support of Hon. Vice Mayor Jose L. Atienza Jr., and the City Council with Hon. Nestor C. Ponce Jr., Hon. Humberto Basco and Hon. Bernardito C. Ang as Principal Sponsors.'
    },
    {
        id:2,
        img: [AccrediationImg],
        title: 'Accrediation and Recognitions',
        description: 'Universidad de Manila has been confirmed of Level 1 accreditation by the Association of Local Colleges and Universities Commission on Accreditation (ALCUCOA)'  
    },
    {
        id:3,
        img: [UniversityImg],
        title: 'About the University',
        description: 'Universidad de Manila is a public university in Ermita, Manila, that offers excellent quality education from undergraduate to graduate studies, primarily for the City of Manila residents. Aside from giving experience and quality education to their students, the institution’s primary goal is to guide them to succeed in the paths they want to pursue. If you’re from Manila and have plans on taking a Criminology or Nursing course, you may wish to add Universidad de Manila to your list of options.'
    }
];

function About (){
    return (
        <div className='about-page'>
            <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center fw-semibold'>"Uplifting lives through quality of education"</h1>
                    <p className='text-center w-75 mb-5'>We do not just give students an education and experiences that set them up for success in a career; we help them succeed, discover a field they are passionate about, and dare to lead.</p>
                </div>
            </header>

            <div className='container my-5'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-dark'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='text-center fw-semibold'>Mission</h2>
                        <p>Universidad de Manila is committed to provide equal opportunities by developing the learners’ knowledge, skills, and values, through quality education and dynamic technology-driven systems, in a diverse yet inclusive environment for learning, research, and community engagement.</p>
                    </div>
              </div>
            </div>

            <div className='container my-5'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-dark'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='text-center fw-semibold'>Vission</h2>
                        <p>A leading Higher Education Institution that prepares visionary and ethical leaders who  shall create a positive impact to society.</p>
                    </div>
              </div>
            </div>

            

            <div className='academics-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text=center text-capitalize mb-5'>Who we Are</h2>
                    <div className='row g-4'>
                        
                        {about.map((about) =>(
                            <div key={about.id} className='col-md-6 col-lg-4'>
                                
                                 <Link to="/about"   
                                 className='text-decoration-none'>
                                    <Card classname='h-100 shadow scale-hover-effect'>
                                        <Card.Img variant="top" src={about.img}/>
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{about.title}</Card.Title>
                                            <Card.Text>{about.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>   
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div>
        
        
    )
}
export default About;