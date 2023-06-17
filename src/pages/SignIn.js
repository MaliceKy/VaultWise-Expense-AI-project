import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { auth } from './firebase.js';
import { getAuth, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with email: ", email, "and password: ", password);
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      var user = userCredential.user;
      console.log("User signed in: ", user);
      setErrorMessage(""); // Clear any previous error messages on successful sign in
    } catch (error) {
      console.error("Error signing in: ", error);
      setErrorMessage("Incorrect email or password. Please try again."); // Set error message on unsuccessful sign in
    }
  };

  const handleGuestSignIn = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      var user = userCredential.user;
      console.log("User signed in as guest: ", user);
    } catch (error) {
      console.error("Error signing in as guest: ", error);
    }
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

                    <div className="Custom-Sign-Button-Block">
                      <button className="Custom-Sign-Button">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="Alt-SignIn">
                <button className="Signup">Sign up</button>
                <button className="Guest" onClick={handleGuestSignIn}>Guest login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

