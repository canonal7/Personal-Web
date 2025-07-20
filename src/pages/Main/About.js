import React from 'react';
import { useNav } from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css';

const About = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const aboutRef = useNav('About');

  return (
    <section ref={aboutRef} id='aboutCont'>
      <img src='/prof_photo.jpg' alt='my-photo' />
      <div>
        <h3>About Me</h3>
        <p id='Iam'>I am:</p>
        <ul>
          <li>🎓 A Computer Science graduate from Bilkent University</li>
          <li>
            📚 A Master's graduate from JADS in Data Science in Business and
            Entrepreneurship
          </li>
          <li>
            💻 A Full Stack Developer specializing in React, Node.js, and Python
          </li>
          <li>
            📊 A Data Scientist/Engineer passionate about machine learning and
            data analytics
          </li>
          <li>
            🌍 Fluent in English and Turkish, with experience in international
            projects
          </li>
        </ul>
        <div className='skills-section'>
          <h4>Technical Skills</h4>
          <div className='skills-grid'>
            <div className='skill-category'>
              <h5>Frontend</h5>
              <p>React, JavaScript, HTML5, CSS3, SwiftUI</p>
            </div>
            <div className='skill-category'>
              <h5>Backend</h5>
              <p>Node.js, Python, SQL, MongoDB</p>
            </div>
            <div className='skill-category'>
              <h5>Data Science</h5>
              <p>Machine Learning, Data Analysis, TensorFlow, Pandas</p>
            </div>
          </div>
        </div>
        <a
          target='_blank'
          href='https://www.dropbox.com/scl/fi/kpe23bll17zdlisknmla8/Can-nal-Resume-3.pdf?rlkey=es1qubx9j5mtwl5xr3jhuglne&st=7ixmuvqz&dl=0'
          className='resume-link'
        >
          <p>📄 View My Resume</p>
        </a>
      </div>
    </section>
  );
};

export default About;
