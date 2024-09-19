import React from 'react';
import meCode from './images/meCode.jpeg';

function Home() {
  return (
    <section id="home">
      <div className="container">
        <h1 className="header">Welcome to My Portfolio</h1>
        <p>I'm a computer science major with a conentration in AI at North Carolina State University </p>
        <a href="#projects" className="btn btn-primary">See My Work</a>
      </div>
      <div className="image-content">
      <img 
  src={meCode} 
  alt="Description" 
  style={{ 
    maxWidth: '200px',  // Set maximum width
    height: 'auto',     // Maintain aspect ratio
    display: 'block',   // Remove any extra space below the image
    
  }} 
/>
      </div>
    </section>
    
  );
}

export default Home;