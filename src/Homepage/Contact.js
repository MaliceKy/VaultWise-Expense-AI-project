// Contact.js
import React from 'react';
import './styles/Contact.css';

function Contact() {
  return (
    <footer className="Contact py-5" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="text-title">Contact</h2>
            <p className="info mb-4">Here at VaultWise, we value every question, comment, and suggestion from our clients as it helps us shape your financial future better.</p>
            <p className="info mb-4">Our dedicated and friendly customer service team is ready to assist you with any inquiries you may have about our AI-powered financial management system. Whether it's about sorting your bank statements, understanding your expense pattern, or navigating through our platform, we're here to help.</p>
          </div>
          <div className="col-lg-4">
            <h2 className="text-title">Reach Us</h2>
            <p><span className="Contact-Desc fw-bold">Email:</span> <span className="info">support@vaultwise.com</span></p>
            <p><span className="Contact-Desc fw-bold">Phone:</span> <span className="info">+1 (800) 123-4567</span></p>
            <p className=" Contact-Desc mt-4 fw-bold">Office Hours:</p>
            <p className='info'>Monday-Friday, 9:00 am - 5:00 pm ET</p>
          </div>
          <div className="col-lg-4">
            <h2 className="text-title">Headquarters</h2>
            <p className="info mb-3">1234 Finance Street,</p>
            <p className="info mb-3">Moneyville, ZT 56789, USA</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className='Contact-Desc fw-bold'>&copy; {new Date().getFullYear()} VaultWise. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;