import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar1';
import { updateUserProfile, getUserByEmail } from '../../../services/user'; // Import the service methods

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    address: '',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const email = sessionStorage.getItem('email'); // Get email from session storage
      console.log(email);
      if (email) {
        try {
          const fetchedUser = await getUserByEmail();
          setUser(fetchedUser);
          setFormData(fetchedUser); // Initialize form data with fetched user details
        } catch (error) {
          setAlertMessage('Failed to fetch user data');
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
        }
      }
    };

    fetchUser();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  // const validateForm = () => {
  //   if (formData.password !== formData.confirmPassword) {
  //     setValidationError('Passwords do not match');
  //     return false;
  //   }
  //   setValidationError('');
  //   return true;
  // };

  const handleSaveChanges = async () => {
    try {
    
        const response = await updateUserProfile(formData);
        console.log("Request sent")
        console.log(response)
        setUser({ ...formData });
        setShowModal(false);
        console.log('Profile updated successfully ');
      }
     catch (error) {
      setAlertMessage('Failed to update profile');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      console.log('Error updating profile:', error);
    }
    finally{
      setShowModal(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {showAlert && <Alert variant={alertMessage.includes('Failed') ? 'danger' : 'success'} className="text-center">{alertMessage}</Alert>}
            {validationError && <Alert variant="danger" className="text-center">{validationError}</Alert>}
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
                  disabled
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
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
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
    </>
  );
};

export default UserProfile;
