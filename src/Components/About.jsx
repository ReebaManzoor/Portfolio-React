import { useState } from "react";

function About() {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-img">
          <img src="../images/img 2-Photoroom.png" alt="About Me" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <div className="tabs">
          <button 
  className={tab === "skills" ? "active" : ""}
  onClick={() => setTab("skills")}
>
  Skills
</button>

<button 
  className={tab === "projects" ? "active" : ""}
  onClick={() => setTab("projects")}
>
  Projects
</button>

<button 
  className={tab === "education" ? "active" : ""}
  onClick={() => setTab("education")}
>
  Education
</button>
          </div>

          <div className="tab-content">
            {tab === "skills" && (
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js Development</li>
                <li>Problem Solving</li>
                <li>Git, Figma</li>
              </ul>
            )}

            {tab === "projects" && (
              <ul>
                <li>Portfolio Website</li>
                <li>Landing Page UI</li>
                <li>JS Calculator</li>
                <li>React Dashboard</li>
              </ul>
            )}

            {tab === "education" && (
              <ul>
                <li>BS Software Engineering</li>
                <li>Intermediate (Pre-Engineering)</li>
                <li>Matric Science</li>
              </ul>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;