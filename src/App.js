import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my portfolio! I'm a passionate developer who loves creating amazing web applications.</p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {/* Project cards will go here */}
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project</p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Get in touch with me via:</p>
          <div className="contact-links">
            <a href="https://github.com/[your-github-username]" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/[your-linkedin]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
