import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../styles/SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with email: ", email, "and password: ", password);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      var user = userCredential.user;
      console.log("User signed up: ", user);
      setErrorMessage(""); // Clear any previous error messages on successful sign up
    } catch (error) {
      console.error("Error signing up: ", error);
      setErrorMessage("Could not create account. Please try again."); // Set error message on unsuccessful sign up
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

                    {/* Render error message when sign up is unsuccessful */}
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