import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar1'

const UserProfile = () => {
  // State for user details
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    mobileNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    profilePicture: 'https://via.placeholder.com/150'
  });

  // State for modal
  const [showModal, setShowModal] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({ ...user });

  // State for alert
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Handle modal show
  const handleShow = () => setShowModal(true);

  // Handle modal close
  const handleClose = () => setShowModal(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSaveChanges = () => {
    setUser({ ...formData });
    setShowModal(false);
    setAlertMessage('User Profile Updated');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="container mt-5">
        <NavBar/>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {showAlert && <Alert variant="success" className="text-center">User Profile Updated</Alert>}
          <div className="text-center mb-4">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <Form.Group controlId="formFile">
              <Form.Label>Upload Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleProfilePictureChange} />
            </Form.Group>
          </div>
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="text-center">User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <Button variant="primary" className="mt-3 d-block mx-auto" onClick={handleShow}>
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
