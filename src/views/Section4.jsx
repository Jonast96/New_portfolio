import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/sectionFour/sectionFour.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkjwloz");

  if (state.succeeded) {
    return alert("Message successfully sent");
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className="submit-btn">
        Submit
      </button>
    </form>
  );
}

const ContactSection = () => {
  return (
    <section className="sectionFour">
      <div className="contact-section">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-text">
          If you'd like to discuss potential projects, collaborations, or simply
          have any questions, please don't hesitate to get in touch. Fill out
          the form below, and I'll respond as soon as possible.
        </p>
        <p className="contact-additional">
          Alternatively, you can reach me on{" "}
          <a
            href="https://www.linkedin.com/in/Jon-Aastveit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or email me at{" "}
          <a href="mailto:jon.aastveit@gmail.com">jon.aastveit@gmail.com</a>.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
