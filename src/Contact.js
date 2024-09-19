import React from 'react';

function Home() {
  return (
    <section id="contact">
  <h2 className="header">Contact Me</h2>
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

    <button type="submit">Submit</button>
  </form>
</section>
  );
}

export default Home;