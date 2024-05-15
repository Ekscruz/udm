import React from'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Place1 from '../../utils/images/cityhall.jpg';
import Place2 from '../../utils/images/place2.jpg';
import Place3 from '../../utils/images/place3.jpg';
import Place4 from '../../utils/images/place4.jpg';
import Acad1 from '../../utils/images/kkk.jpg';
import Acad2 from '../../utils/images/mmt.jpg';



function Contact (){
    return (
        <div className='contact-page'>
            <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center w-75 mb-5'>Get In Touch</h1>
                    <p></p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder='First Name'/>
                        </Col>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder='Last Name'/>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'/>
                        <Form.Text className='text-muted'>
                            We'll never share your email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb--3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder = 'Your Address'/>
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Location</Form.Label>
                            <Form.Select defaultValue="Philippines">
                                <option>Manila</option>
                                <option>Cebu</option>
                                <option>Mindanao</option>
                                <option>Pasay</option>
                                <option>Batanes</option>
                                <option>Laguna</option>
                                <option>Batangas</option>
                                <option>Province</option>
                                <option>Aklan</option>
                                <option>Iloilo</option>
                                <option>Roxas</option>
                                <option>Bulacan</option>
                                <option>Cavite</option>
                                <option>Pampanga</option>
                                <option>Pangasinan</option>
                            </Form.Select>
                        </Col>

                        <Col sm={12} md={6}>
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control placeholder='Postcode'></Form.Control>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>
                    <Button variant="danger btn-lg" type='submit'>Submit</Button>
                </Form>
            </div>
            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Near Locations</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Place1}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>Manila City Hall</h3>
                        </div>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Place2}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>Aroceros Park</h3>
                        </div>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Place3}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>SM Manila</h3>
                        </div>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Place4}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>Udm Front</h3>
                        </div>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Acad1}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>The KKK</h3>
                        </div>
                        <div className='col-lg-4 d-flex-column align-items-center'>
                            <img src={Acad2}
                            className='img-fluid' alt ="" />
                            <h3 className='text-center mt-3'>Manila Metropolitan Theater</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Contact;