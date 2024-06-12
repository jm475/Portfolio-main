import './App.css'

/**
 * Navbar component
 * @returns 
 */
const Navbar: React.FC = () => {
  return (
      <nav id="navbar">
          <ul className="nav-list">
              <li><a href="#welcome-section">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
  );
};

/**
 * Welcome Section component
 * @returns 
 */
const WelcomeSection: React.FC = () => {
  return (
      <section id="welcome-section">
          <h1>Welcome to my Portfolio!</h1>
          <p>Hi I'm John, take a look at some of my projects</p>
      </section>
  );
};

/**
 * Project Section component
 * @returns 
 */
const ProjectsSection: React.FC = () => {
  return (
      <section id="projects">
          <h2>Project Showcase</h2>
          <div className="project-grid">
              <a className="project-tile" href="https://pomodoro-lockin.netlify.app/" target="_blank">
                  <img className="project-image" src="src\assets\PomodoroTimerScreenshot.png" alt="project" />
                  <p className="project-title">Pomodoro Timer</p>
              </a>
              <a className="project-tile" href="https://www.figma.com/proto/qNBZ99xiI7UUhvjJJa7XXh/Mobile-Application-Prototype?type=design&node-id=3-34&t=Iifr6VuHWyf6mK2p-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A34" target="_blank">
                  <img className="project-image" src="src\assets/MobileApplicationPrototypeScreenshot.png" alt="project" />
                  <p className="project-title">Mobile Food Application Prototype</p>
              </a>
              <p>More to come...</p>
          </div>
      </section>
  );
};

/**
 * Contact Section Component
 * @returns 
 */
const ContactSection: React.FC = () => {
  return (
      <section id="contact">
          <h2>Find me on:</h2>
          <div className="contact-list">
              <a id="profile-link" href="https://github.com/jm475" target="_blank"><i className="fab fa-github"></i> <span>GitHub</span></a>
          </div>
      </section>
  );
};


/**
 * App
 * @returns 
 */
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}


export default App
