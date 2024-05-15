import React from'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/study.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import {Card} from 'react-bootstrap';
import Academics1Img from '../../utils/images/acad5.jpg';
import Academics2Img from '../../utils/images/acad6.jpg';
import Academics3Img from '../../utils/images/acad7.jpg';

const academic = [
    {
        id:1,
        img: [Academics1Img],
        title: 'Gratitude in Full Gear',
        description: 'Thanks to Ambassador Francis Chua! for fueling the College of Engineering and Technology with cutting-edge facilities, paving the way for our students to thrive in the tech revolution ahead.'
    },
    {
        id:2,
        img: [Academics2Img],
        title: 'TawagNgTanghalan',
        description: 'Sending our warmest wishes and utmost support to our esteemed member, 𝐄𝐣𝐡𝐚𝐲 𝐕𝐢𝐥𝐥𝐚𝐧𝐮𝐞𝐯𝐚, as he embarks on his journey in The Tawag ng Tanghalan: The School Showdown. With hearts full of pride, the Udm Community and your beloved CCME family stand firmly behind you, cheering you on every step of the way. May your talent shine brighthly, and may the stage be yours to conquer. Best of luc, Ejhay! We are all routing for your success!'  
    },
    {
        id:3,
        img: [Academics3Img],
        title: 'SportFest2024 Mens Volleyball',
        description: 'Sports Fest is a gathering where people compete or participate in sports, possibly for trophies or awards. It is where people can showcase their talents in different sporting events.'
    }
];

function Home (){
    return (
        <div className='home-page'>
            <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Greetings To</h2>
                    <h1 className='text-center fw-semibold'>Universidad De Manila</h1>
                    <p>We, at the Universidad De Manila, commit to providing world class higher and advanced education, research and extension services in health, social and behavioral sciences, and the arts and humanities, responsive to the needs of our stakeholders, the nation and the world.</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Courses</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="py-5">
                <ChooseSection/>
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'> 2024 Start Courses</h2>
                            <p>Let's Look at it ^_^</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <FaqAccordion/>
            </div>

            

            <div className='academics-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text=center text-capitalize mb-5'>Latest on the An the Announcement</h2>
                    <div className='row g-4'>
                        {academic.map((academics) =>(
                            <div key={academics.id} className='col-md-6 col-lg-4'>
                                 <Link to="/academics"   
                                 className='text-decoration-none'>
                                    <Card classname='h-100 shadow scale-hover-effect'>
                                        <Card.Img variant="top" src={academics.img}/>
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{academics.title}</Card.Title>
                                            <Card.Text>{academics.description}</Card.Text>
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
export default Home;