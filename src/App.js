import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "Shopping Store",
      description: "Developed a comprehensive software solution for a shopping store using .NET (C# and WPF). Utilized Visual Studio and Git, applying software design principles including SOLID, OOP, LINQ, data binding, XML file handling, and multithreading.",
      technologies: [".NET", "C#", "WPF","multithreading", "OOP", "LINQ", "XML", "Git", "Visual Studio"],
      githubLink: "https://github.com/dotz600/dotNet5783_1523_2008",
      demoLink: "#"
    },
    {
      title: "Ray Tracing Engine",
      description: "Developed an advanced ray tracing engine using Java that produces realistic 3D scene renderings. Implemented complex rendering algorithms with emphasis on software engineering principles including SOLID, design patterns, OOP, TDD, and Agile development (Scrum).",
      technologies: ["Java", "Multithreading", "OOP", "TDD", "Agile", "OOD", "IntelliJ", "Solid", "Design Patterns", "Graphics"],
      githubLink: "https://github.com/dotz600/RayTracing1523_2008",
      demoLink: "#"
    },
    {
      title: "Snake Game",
      description: "A classic console-based Snake game developed in C# .NET. Demonstrates fundamental game development concepts and programming skills in a simple yet engaging implementation.",
      technologies: ["C#", ".NET", "OOP", "Visual Studio"],
      githubLink: "https://github.com/dotz600/SnakeGame",
      demoLink: "#"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>David Ohev Tzion - Software Developer</h1>
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
          <div className="about-content">
            <p>
              I'm a passionate software developer with a robust background in creating innovative and efficient software solutions. 
              My journey in technology is driven by a deep curiosity and a commitment to solving complex problems through clean, 
              well-structured code.
            </p>
            <div className="skills-container">
              <h3>Core Competencies</h3>
              <div className="skills-grid">
                {[
                  "C++", 
                  "C#", 
                  "Java", 
                  "Python", 
                  "SQL Server",
                  ".NET Development", 
                  "Agile Methodologies", 
                  "Problem Solving", 
                  "Object-Oriented Programming", 
                  "Multithreading", 
                  "Software Testing", 
                  "Data Structures", 
                  "Algorithms", 
                  "Version Control",
                ].map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
            <p>
              With a strong foundation in software engineering principles and a passion for creating robust, 
              scalable applications, I thrive on turning complex challenges into elegant, efficient solutions. 
              My approach combines technical expertise with creative problem-solving.
            </p>
          </div>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Get in touch with me via:</p>
          <div className="contact-links">
            <a href="https://github.com/dotz600" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/david-ohev-tzion-9a947325a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ohev.david@gmail.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
