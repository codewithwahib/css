import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import "@/app/styles/contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="grid">
        <div className="space-y-8">
          <h2 data-aos="zoom-in-left">To communicate</h2>
          <p data-aos="zoom-in-left">
            Send me a message and I will try to respond soon.
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-left">
            <MdAlternateEmail size={30} /> hassanjaffer043@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-left">
            <BiPhoneCall size={30} /> 03XX-XXXXXXX
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-left">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-left">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-left">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" rows={8}></textarea>
          </div>
          <button data-aos="zoom-in-left">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
