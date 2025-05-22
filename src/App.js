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
      title: "UAV Path Simulation",
      description: "Advanced Pathfinding Simulation Using A* and GBFS Algorithms, Enhanced with Dynamic Node Generation in 2D Space and Python-Based Path Visualization",
      technologies: ["C++", "Python", "A*", "GBFS", "Algorithms", "Graphs", "Animation"],
      githubLink: "https://github.com/dotz600/UAVPathSimulation",
      demoLink: "#" // Replace with your demo link if available
    },
    {
      title: "Custom Test Runner",
      description: "A custom C# test runner built from scratch that demonstrates test discovery, execution, and result reporting without external frameworks. Features include discovery of methods marked with custom attribute, parameterized test execution, validation against expected results, exception handling, and comprehensive test reporting.",
      technologies: ["C#", ".NET", "Unit Testing", "Reflection", "Software Design", "Test Framework"],
      githubLink: "https://github.com/dotz600/TestRunner",
      demoLink: "#"
    },
    {
      title: "Snake Game",
      description: "A classic console-based Snake game developed in C# .NET. Demonstrates fundamental game development concepts and programming skills in a simple yet engaging implementation.",
      technologies: ["C#", ".NET", "OOP", "Visual Studio"],
      githubLink: "https://github.com/dotz600/SnakeGame",
      demoLink: "#"
    },
    {
      title: "Daily Job Notifier",
      description: "A serverless solution that monitors job listings, filters by posting date, and delivers daily email notifications with new opportunities. Built using Google Cloud Functions, this automated system scrapes job listings, identifies positions posted within the last 24 hours, and sends concise email summaries with direct application links.",
      technologies: ["Python", "Google Cloud Functions", "Google Cloud Scheduler", "BeautifulSoup4", "SMTP", "Web Scraping", "Serverless"],
      githubLink: "https://github.com/dotz600/JobFilter",
      demoLink: "#"
    }
  ];

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

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
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <GitHubIcon /> View on GitHub
                  </a>
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
