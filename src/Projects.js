import React from 'react';

function Home() {
  return (
    <section id="projects">
    <h2 classname="header">Projects</h2>
  
    <div className="project">
      <h3>Project 1: Financial Literacy App</h3>
      <p>Developed an app to enhance women's financial literacy using Swift. Integrated Firebase for authentication and data storage.</p>
    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  
    <div className="project">
      <h3>Project 2: MERN Stack Web App</h3>
      <p>Created a full-stack web app using MongoDB, Express, React, and Node.js. Implemented user authentication and dynamic content management.</p>
      /<a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </section>
  );
}

export default Home;