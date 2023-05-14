import React from "react";

import ContactForm from "../Components/Contact/Form";
import ContactRVone from "../Components/Contact/ContactRVone";
import "../Components/Contact/ContactFormat.css";
import Contacttxt from "../Components/Contact/Contacttxt";

export default function ContactUs() {
  return (
    <div>
      <Contacttxt />
      <div className="contact-row">
        <ContactForm />
        <ContactRVone />
      </div>
    </div>
  );
}
