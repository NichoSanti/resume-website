import "./App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const resumeList = [
  {
    companyName: "Hubs",
    role: "Quality Control Technition",
    dates: "Jan 2020 - Present",
    description: [
      "Spearheaded web projects using Django, React, Node.Js, HTML, CSS, Bootstrap 5, and Tailwind, contributing to operations that generated over $1 million in product sales.",
      "Leveraged APIs and Vite for efficient development and PostgreSQL for data management in an RDBMS.",
      "Facilitated team collaboration through Git, maintained project timelines, and ensured master branch stability.",
      "Prioritized data security using CSRF tokens, honeypots, and environment variables."
    ]
  },
  {
    companyName: "Ebpman Tech Reviews",
    role: "Full-Stack Engineer",
    dates: "Jan 2018 - Dec 2019",
    description: [
      "Collaboratively engineered a novel inspection platform, successfully augmenting inspection efficiency by 20%, showcasing team synergy and innovative thinking.",
      "Executed comprehensive maintenance on 3D printers while crafting CAD models to enhance the work environment and facilitate knowledge transfer among colleagues.",
      "Facilitated team collaboration through Git, maintained project timelines, and ensured master branch stability.",
      "Prioritized data security using CSRF tokens, honeypots, and environment variables."
    ]
  }
];

const professionalSummary =
  "Motivated Junior Software Developer, adept in crafting and implementing diverse full stack solutions such as websites, bots, and video games. Proficient in leveraging technologies like React, Django, Flask, Node.js, and various APIs, with a focus on user-centered design. Demonstrated ability to transform complex ideas into functional and  appealing interfaces, consistently committed to delivering high-quality software projects.";

const education = {
  university: "University Of Illinois at Chicago",
  startDate: 2018,
  endDate: 2022,
  degree:
    "Bachelor of Science in Information and Decision Sciences, University of Illinois at Chicago",
  description: [
    "Accomplished Computer Science graduate with comprehensive knowledge of object-oriented programming in Java, Python, JavaScript, and Java.",
    "Skilled in developing dynamic, responsive websites leveraging HTML, CSS, and JavaScript as part of rigorous academic projects.",
    "Proficient in employing R and Python for advanced data analytics, demonstrating aptitude in cross-disciplinary applications within biology and economics fields.",
    "Acquired business acumen through extensive coursework, providing a unique intersection of technical proficiency and business understanding, beneficial in driving software solutions that align with business objectives."
  ]
};

const skillList = [
  {
    skillName: "Django",
    proficiency: 25
  },
  {
    skillName: "React",
    proficiency: 50
  },
  {
    skillName: "REST API",
    proficiency: 50
  },
  {
    skillName: "HTML/CSS",
    proficiency: 75
  }
];

function SocialMediaIcon({ svgPath }) {
  return (
    <svg
      aria-hidden="true"
      fill="white"
      stroke="currentColor"
      strokeWidth={1}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "30px", marginRight: "10px" }}
    >
      <path d={svgPath} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Milton Santiago</h1>
        <small>Full-Stack Developer</small>
      </header>
      <main>
        <div className="grid-container">
          <aside className="sidebar">
            <img src="/src/assets/me.jpeg" alt="Milton Santiago" />
            <section className="contact">
              <h1>Contacts</h1>
              <ul>
                <li>
                  <SocialMediaIcon
                    svgPath={
                      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    }
                  />
                  <a href="tel:+7082611401">+1 (708) 261-1401</a>
                </li>

                <li>
                  {" "}
                  <SocialMediaIcon
                    svgPath={
                      "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    }
                  />
                  <a href="https://www.linkedin.com/in/milton-santiago-202b94199/">
                    Linkedin{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <SocialMediaIcon
                    svgPath={
                      "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    }
                  />
                  <a href="https://github.com/NichoSanti">Github </a>
                </li>
              </ul>
            </section>
            <section className="skills">
              <h1>Proficiencies</h1>
              <div style={{ width: "100%", height: "100%" }}>
                <ul className="progress-bar-grid">
                  {skillList.map((skill, key) => (
                    <li key={key}>
                      <CircularProgressbar
                        text={skill.skillName}
                        value={skill.proficiency}
                        styles={{
                          text: {
                            fontSize: "15px"
                          }
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </aside>
          <div className="main-content">
            <section className="summary">
              <h1>Summary</h1>
              <p>{professionalSummary}</p>
            </section>
            <section className="resume">
              <h2>Employment History</h2>
              {resumeList.map((job, key) => (
                <ul key={key}>
                  <header className="resume-header">
                    <h3>{job.role}</h3>
                    <small>{job.companyName}</small>
                  </header>
                  {job.description.map((jobDesc, descKey) => (
                    <li key={descKey}>{jobDesc}</li>
                  ))}
                </ul>
              ))}
            </section>
            <section className="Education">
              <h2>Education</h2>
              <h3>{education.university}</h3>
              <p>{education.degree}</p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
              <ul>
                {education.description.map((educationStuff, educationKey) => (
                  <li>{educationStuff}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
