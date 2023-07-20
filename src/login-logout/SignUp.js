import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './styles/SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Hook from 'react-router-dom'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage(""); // Clear any previous error messages on successful sign up
      navigate('/dashboard'); // Redirect to dashboard on successful sign up
    } catch (error) {
      console.error("Error signing up: ", error);
      setErrorMessage(error.message); // Set error message on unsuccessful sign up
    }
  };

  return (
    <div className="SignUpPage">
      <div className="container">
        <div className="row">
          <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
            <div className="signUpPage-Container">
              <div className="signUpPage-Card">
                <div className="signUpPageTitleBlock">
                  <p className="signUpPage-Title">Sign Up</p>
                </div>
                <div className="SignUpForm">
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

                    <div className="Custom-Sign-Button-Block">
                      <button className="Custom-Sign-Button">
                        Sign up
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
