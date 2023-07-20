import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './styles/SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showGuestMessage, setShowGuestMessage] = useState(false);

  const navigate = useNavigate(); // Hook from 'react-router-dom'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage(""); // Clear any previous error messages on successful sign in
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error("Error signing in: ", error);
      setErrorMessage("Incorrect email or password. Please try again."); // Set error message on unsuccessful sign in
    }
  };

  const handleGuestAccess = () => {
    setShowGuestMessage(true);
  };

  const handleOkButton = () => {
    navigate('/dashboard'); // Redirect to dashboard
  };

  const handleCancelButton = () => {
    setShowGuestMessage(false);
  };

  return (
    <div className="SignInPage">
      <div className="container">
        <div className="row">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
            <div className="signInPage-Container">
              <div className="signInPage-Card">
                <div className="signInPageTitleBlock">
                  <p className="signInPage-Title">Sign In</p>
                </div>
                <div className="SignInForm">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="Email-Prompt">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label className="Pass-Prompt">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    {/* Render error message when credentials are incorrect */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {showGuestMessage && (
                      <div className="info-message-container">
                        <p className="info-message">
                          Guest information are not saved for future refrences.
                          <div className="button-container">
                            <button onClick={handleOkButton} className="okay-button">Okay</button>
                            <button onClick={handleCancelButton} className="cancel-button">Cancel</button>
                          </div>
                        </p>
                      </div>
                    )}

                    <div className="Custom-Sign-Button-Block">
                      <button className="Custom-Sign-Button">
                        Sign in
                      </button>
                    </div>
                  </Form>

                  <div className="Alt-SignIn">
                    <button className="Guest" onClick={handleGuestAccess}>
                      Access as Guest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
