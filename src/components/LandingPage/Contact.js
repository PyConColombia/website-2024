import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div id="form-wrapper">
        <form id="form">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea name="message" id="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
