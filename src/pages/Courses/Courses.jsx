import React, { useState } from 'react';
import './Courses.css';
import { Card, Button, Modal, Form } from 'react-bootstrap';

// Import images
import ElectronicsEngineeringImg from '../../utils/images/Electronics-Engineering.jpg';
import ComputerEngineeringImg from '../../utils/images/Computer-Engineering.jpg';
import CybersecurityImg from '../../utils/images/Cybersecurity.jpg';
import DataScienceImg from '../../utils/images/Data-Science.jpg';
import InformationTechonologyImg from '../../utils/images/Information-Technology.jpg';
import CriminologyImg from '../../utils/images/Criminology.jpg';
import PhysicalEducationImg from '../../utils/images/Physical-Education.jpg';
import EnglishImg from '../../utils/images/English.jpg';
import GeneralScienceImg from '../../utils/images/General-Science.jpg';
import MathematicsImg from '../../utils/images/Mathematics.jpg';
import SocialStudiesImg from '../../utils/images/Social-Studies.jpg';
import AccountancyImg from '../../utils/images/Accountancy.jpg';
import HumanResourceDevelopmentManagementImg from '../../utils/images/Human-Resource-Development-Management.jpg';
import EntrepreneurshipImg from '../../utils/images/Entrepreneurship.jpg';
import JurisDoctorImg from '../../utils/images/Juris-Doctor.jpg';
import CommunicationImg from '../../utils/images/Communication.jpg';
import PoliticalScienceImg from '../../utils/images/Political-Science.jpg';
import PublicAdministrationImg from '../../utils/images/Public-Administration.jpg';
import ComputerScienceImg from '../../utils/images/Computer-Science.jpg';
import PsychologyImg from '../../utils/images/Psychology.jpg';
import SocialWorkImg from '../../utils/images/Social-Work.jpg';
import NursingImg from '../../utils/images/Nursing.jpg';
import PhysicalTherapyImg from '../../utils/images/Physical-Therapy.jpg';

const initialCourses = [
  // Your initial courses data here
  {
    id: 1,
    img: ElectronicsEngineeringImg,
    title: 'Electronic Engineering',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 2,
    img: [ComputerEngineeringImg],
    title: 'Computer Engineering',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 3,
    img: [CybersecurityImg],
    title: 'Cybersecurity',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 4,
    img: [DataScienceImg],
    title: 'Data Science',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 5,
    img: [InformationTechonologyImg],
    title: 'Information Technology',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 6,
    img: [CriminologyImg],
    title: 'Criminology',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 7,
    img: [PhysicalEducationImg],
    title: 'Physical Education',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 8,
    img: [EnglishImg],
    title: 'English',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 9,
    img: [GeneralScienceImg],
    title: 'General Science',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 10,
    img: [MathematicsImg],
    title: 'Mathematics',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 11,
    img: [SocialStudiesImg],
    title: 'Social Studies',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 12,
    img: [AccountancyImg],
    title: 'Accountancy',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 14,
    img: [HumanResourceDevelopmentManagementImg],
    title: 'Human Resource Development Management',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 15,
    img: [EntrepreneurshipImg],
    title: 'Entrepreneurship',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 16,
    img: [JurisDoctorImg],
    title: 'JurisDoctor',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 17,
    img: [CommunicationImg],
    title: 'Communication',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 18,
    img: [PoliticalScienceImg],
    title: 'Political Science',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 19,
    img: [PublicAdministrationImg],
    title: 'Public Administration',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 20,
    img: [ComputerScienceImg],
    title: 'Computer Science',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 21,
    img: [PsychologyImg],
    title: 'Psychology',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 22,
    img: [SocialWorkImg],
    title: 'Social Work',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 23,
    img: [NursingImg],
    title: 'Nursing',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},
{
    id: 24,
    img: [PhysicalTherapyImg],
    title: 'Physical Therapy',
    description: 'lorem ipsum dolor sit amet consectetur sdipisicing elit. magnam odio eos distinctio ducimus modi quaerat dolores illo accusamus maxime cupiditate culpa minues anime repellat autem'
},

];

function Courses() {
  const [courses, setCourses] = useState(initialCourses);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCourse, setEditCourse] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleEdit = (id) => {
    const courseToEdit = courses.find(course => course.id === id);
    setEditCourse(courseToEdit);
    setShowEditModal(true);
  }

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  }

  const handleEditClose = () => {
    setShowEditModal(false);
  }

  const handleEditSave = () => {
    const updatedCourses = courses.map(course => {
      if (course.id === editCourse.id) {
        return editCourse; // Update the course being edited
      } else {
        return course;
      }
    });
    setCourses(updatedCourses);
    setShowEditModal(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='courses-page'>
      <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='text-center fw-semibold'>Universidad De Manila Courses</h1>
        </div>
      </header>

      <div className='container py-5'>
        <div className='row g-4'>
          {courses.map((course) => (
            <div key={course.id} className='col-lg-6'>
              <Card className='text-white shadow scale-hover-effect'>
              <Card.Img src={course.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary" onClick={() => handleEdit(course.id)}>Edit</Button>
                                        <Button variant="danger" onClick={() => handleDelete(course.id)}>Delete</Button>
                                    </div>
                 </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Your form fields for editing */}
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={editCourse.title || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={editCourse.description || ''} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
          <Button variant="primary" onClick={handleEditSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      {/* Your code for delete modal */}
    </div>
  );
}

export default Courses;
