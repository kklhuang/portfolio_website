import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import myGif from '../images/icon.gif';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q304r2e', 'template_oh8rj96', form.current, 'cvnNNvMK7wiD5eakq')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        form.current.reset();
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="page contact">
      <header>Let's keep in touch!</header>
      <div className="content">
        <img src={myGif} alt="Karen Icon" className="gif-me" />
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/karenklhuang/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/kklhuang" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <i className="far fa-file"></i>
        </a>
        {/* <a href="https://dribbble.com/kklhuang" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-dribbble"></i>
        </a> */}
      </div>
    </div>
  );
}

export default Contact;
