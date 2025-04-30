import React from 'react';
import { useNav } from '../../Components/CustomHooks/useNav';
import github_icon from '../../github_icon.png';
import '../../css/Pages.css';

const Projects = () => {
  const projectsRef = useNav('Projects');

  const featuredProjects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description:
        'A modern, responsive portfolio website built with React, featuring smooth animations and a clean design.',
      tech: ['React', 'CSS3', 'JavaScript'],
      link: 'https://github.com/canonal7/Personal-Web',
    },
    {
      id: 2,
      title: 'Vybe',
      description:
        'A mobile application that revolutionizes venue experiences by enabling real-time song requests, social interactions, and venue analytics. Built as a senior design project at Bilkent University.',
      tech: ['React Native', 'Spring Boot', 'TypeScript', 'Java'],
      link: 'https://github.com/YigitEkin/Vybe',
    },
    {
      id: 3,
      title: 'SQL Assistant AI',
      description:
        'Developed an AI-powered chatbot for a leading Dutch post company to optimize SQL queries and improve database performance. The system provides intelligent suggestions and automated query optimization.',
      tech: ['Python', 'LLMs', 'SQL', 'NLP', 'Database Optimization'],
      link: 'https://github.com/canonal7/DCiA',
    },
    {
      id: 4,
      title: 'PIPNet',
      description:
        'Implementation of PIP-Net: Patch-based Intuitive Prototypes Network for Interpretable Image Classification (CVPR 2023).',
      tech: ['Python', 'Deep Learning', 'Computer Vision', 'PyTorch'],
      link: 'https://github.com/canonal7/PIPNet',
    },
    {
      id: 5,
      title: 'RAGMeUp',
      description:
        'A generic RAG framework to apply the power of LLMs on any given dataset, enabling efficient information retrieval.',
      tech: ['Python', 'LLMs', 'RAG', 'NLP'],
      link: 'https://github.com/canonal7/RAGMeUp',
    },
    {
      id: 6,
      title: 'MERN E-commerce',
      description:
        'Full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/canonal7/mern-ecommerce',
    },
  ];

  return (
    <section ref={projectsRef} id='projectsCont'>
      <img
        src='https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600'
        alt='unsplash-img'
      />
      <div>
        <h3>My Projects</h3>
        <div className='projects-intro'>
          <p>
            I specialize in full-stack development, machine learning, and AI
            solutions for enterprise applications.
          </p>
          <p>Here are some of my featured projects:</p>
        </div>

        <div className='featured-projects'>
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='project-card'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className='tech-stack'>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className='github-section'>
          <p>Explore more of my work on GitHub</p>
          <a
            target='_blank'
            href='https://github.com/canonal7'
            className='github-link'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img className='icon' src={github_icon} alt='GitHub' />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
