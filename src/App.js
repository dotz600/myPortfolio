import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "Shopping Store Management & Client Side",
      description: "Developed a comprehensive software solution for a shopping store using .NET (C# and WPF). Utilized Visual Studio and Git, applying software design principles including SOLID, OOP, LINQ, data binding, XML file handling, and multithreading.",
      technologies: [".NET", "C#", "WPF", "LINQ", "XML"],
      githubLink: "https://github.com/dotz600/ShoppingStoreManagement",
      demoLink: "#"
    },
    {
      title: "Ray Tracing Engine",
      description: "Developed an advanced ray tracing engine using Java that produces realistic 3D scene renderings. Implemented complex rendering algorithms with emphasis on software engineering principles including SOLID, design patterns, OOP, TDD, and Agile development (Scrum).",
      technologies: ["Java", "Ray Tracing", "Multithreading", "OOP"],
      githubLink: "https://github.com/dotz600/RayTracingEngine",
      demoLink: "#"
    },
    {
      title: "Snake Game",
      description: "A classic console-based Snake game developed in C# .NET. Demonstrates fundamental game development concepts and programming skills in a simple yet engaging implementation.",
      technologies: ["C#", ".NET", "Console Application"],
      githubLink: "https://github.com/dotz600/SnakeGame",
      demoLink: "#"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dotan Ziv - Software Developer</h1>
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
          <p>
            I'm a passionate software developer with expertise in .NET, Java, and modern software engineering practices. 
            I specialize in creating robust, efficient, and well-designed software solutions that solve real-world problems.
          </p>
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
            <a href="https://www.linkedin.com/in/dotan-ziv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dotan.ziv@example.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
