import React, { useState } from "react";
import "./Form.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_PUBLIC_KEY`,
      },
      body: JSON.stringify({
        serviceId: "YOUR_SERVICE_ID",
        templateId: "YOUR_TEMPLATE_ID",
        variables: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
      }),
    });
  };

  return (
    <div className="formBackground">
      <form className="formBox">
        {/*creates input box to input Name */}
        <text className="formtxt"> Have Questions? Send us a message</text>
        <div className="fieldHolder">
          <input type="text" id="name" required />
          <label for="name">Name</label>
        </div>
        {/*creates input box to input Name */}
        <div className="fieldHolder">
          <input type="email" id="email" required />
          <label for="email">Email</label>
        </div>
        {/*creates input box to input Name */}
        <div className="fieldHolder">
          <input type="text" id="message" required />
          <label for="message">Message</label>
        </div>
        <div className="btncenter">
          <a className="contactBtn" href="./">
            Send
          </a>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
