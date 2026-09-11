import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const projects={trainsense:{label:'INDEPENDENT PROJECT / iOS',title:'TrainSense',body:'A fitness coaching app I built for iOS. Working across the interface, subscriptions, and supporting services gave me the opportunity to own a product from idea to release.',extra:'Built with SwiftUI, StoreKit 2, Firebase, SwiftData, and Sentry.',url:'https://apps.apple.com/nl/app/trainsense/id6757302645?l=en-GB',link:'View on the App Store'},vybe:{label:'SENIOR PROJECT / BILKENT UNIVERSITY',title:'A shared soundtrack with Vybe.',body:'I worked across the full stack on a collaborative music experience. Guests join with a QR code, search for songs, add them to the queue, and vote to shape a live ranking.',extra:'The project received Bilkent’s Best Marketability Award.',url:'https://vybemusic.netlify.app',link:'Visit the original project'},research:{label:'MSc THESIS / APPLIED AI',title:'Natural language meets policy as code.',body:'My thesis explored using large language models to generate Rego policies for Open Policy Agent. The work connects natural-language requirements with executable authorization policies.',extra:'Part of the thesis work was accepted to IEEE SANER-C 2026.',url:'https://ieeexplore.ieee.org/abstract/document/11664957',link:'Read the paper on IEEE Xplore'}};

export default function App() {
  const [project, setProject] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (project && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [project]);
  const close = () => dialogRef.current.close();
  const closeOnBackdrop = event => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
  };
  return <>

<a className="skip" href="#main">Skip to content</a>
<header className="wrap"><a className="wordmark" href="#" aria-label="Can Önal home">can önal<span> / </span></a><nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#experience">Experience</a></nav><span className="location">Amsterdam, NL <span aria-hidden="true"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></span></span></header>
<main id="main">
<section className="hero wrap" aria-labelledby="hero-title">
<div className="eyebrow"><span className="tiny-square"></span> SOFTWARE ENGINEER & INDEPENDENT BUILDER</div>
<h1 id="hero-title">A curious mind.<br />A builder’s <em>instinct.</em></h1>
<div className="hero-bottom"><p>I’m Can, a software engineer based in Amsterdam.<br className="desktop" /> I build payment systems at Picnic and turn ideas<br className="desktop" /> into apps in my own time.</p><a className="round-link" href="#work"><span>Explore my work</span><span className="circle" aria-hidden="true"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 5v14m-7-7 7 7 7-7"></path></svg></span></a></div>
<div className="hero-foot"><span>BACKEND ENGINEERING / PRODUCT BUILDING / APPLIED AI</span><span>SCROLL TO EXPLORE</span></div>
</section>
<section id="work" className="work wrap" aria-labelledby="work-title"><div className="section-top"><h2 id="work-title">Selected work<span> / 01</span></h2><span>A few things I’ve built.</span></div>
<div className="project-grid">
<article className="project featured"><div className="project-top"><span>01 / MOBILE APP</span><span className="badge">iOS</span></div><div className="project-word">Train<span>Sense</span><span className="word-dot">.</span></div><div className="project-description"><h3>A little structure. A stronger routine.</h3><p>A fitness coaching app built for iOS, bringing my interest in training together with hands-on product development.</p></div><div className="project-bottom"><a className="project-text-link" href="https://apps.apple.com/nl/app/trainsense/id6757302645?l=en-GB" target="_blank" rel="noopener noreferrer">View on the App Store <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></a><button type="button" onClick={() => setProject(projects.trainsense)} aria-label="Read about TrainSense"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></button></div></article>
<article className="project vybe"><div className="project-top"><span>02 / COLLABORATIVE MUSIC</span><span className="badge">Web</span></div><div className="project-word">vybe<span className="word-dot">.</span></div><div className="project-description"><h3>One room. A shared soundtrack.</h3><p>Scan a QR code, add a song, and vote for what plays next. A collaborative music experience built with my senior project team.</p></div><div className="project-bottom"><span>Full-stack development</span><button type="button" onClick={() => setProject(projects.vybe)} aria-label="Read about Vybe"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></button></div></article>
</div>
<article className="research"><span className="research-label">RESEARCH / APPLIED AI</span><div><h3>From natural language to policy.</h3><p>Exploring LLM-based generation of Rego policies for Open Policy Agent.</p><a className="research-meta paper-link" href="https://ieeexplore.ieee.org/abstract/document/11664957" target="_blank" rel="noopener noreferrer">IEEE SANER-C 2026 · Read the paper <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></a></div><button onClick={() => setProject(projects.research)} aria-label="Read about the research"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></button></article>
</section>
<section id="about" className="about wrap" aria-labelledby="about-title"><div><div className="eyebrow">THE PERSON BEHIND THE CODE / 02</div><h2 id="about-title">Curiosity is<br />the common <em>thread.</em></h2></div><div className="about-copy"><p>I enjoy understanding how things work, then building something useful with that knowledge.</p><p>My background connects computer science with data science and entrepreneurship. Today, I’m focused on reliable backend systems, while independent projects keep me close to the whole product.</p><p className="personal">Away from the keyboard: guitar, a good book, and finding somewhere new to explore.</p><div className="stack" aria-label="Technologies"><span>Java</span><span>Spring</span><span>Kafka</span><span>PostgreSQL</span><span>AWS</span><span>SwiftUI</span></div></div></section>
<section id="experience" className="experience wrap" aria-labelledby="experience-title"><div className="section-top"><h2 id="experience-title">The path so far<span> / 03</span></h2><span>Work & education</span></div><div className="timeline"><div className="timeline-row"><span className="timeline-category">NOW</span><div><h3>Picnic Technologies</h3><p>Java Developer · Payments</p></div><span>Amsterdam, NL</span></div><div className="timeline-row"><span className="timeline-category">PREVIOUSLY</span><div><h3>Yapı Kredi</h3><p>Part-time Java Developer</p></div><span>Türkiye</span></div><div className="timeline-row"><span className="timeline-category">EDUCATION</span><div><h3>JADS · TU/e & Tilburg University</h3><p>MSc Data Science in Business & Entrepreneurship</p></div><span>Netherlands</span></div><div className="timeline-row"><span className="timeline-category">EDUCATION</span><div><h3>Bilkent University</h3><p>BSc Computer Science</p></div><span>Ankara, Türkiye</span></div></div></section>
<section id="contact" className="contact wrap" aria-labelledby="contact-title"><div><div className="eyebrow">GET IN TOUCH / 04</div><h2 id="contact-title">Let’s talk.</h2></div><a href="mailto:jcanonal@gmail.com">jcanonal@gmail.com <span aria-hidden="true"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></span></a></section>
</main>
<footer className="wrap"><a className="wordmark" href="#">can önal<span> / </span></a><span>Always curious. Always building.</span><a href="#">Back to top <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 19V5m-7 7 7-7 7 7"></path></svg></a></footer>

    <dialog ref={dialogRef} id="project-dialog" aria-labelledby="dialog-title" onClose={() => setProject(null)} onClick={closeOnBackdrop}>
      <button className="close" onClick={close} aria-label="Close project details"><svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M6 18 18 6"></path></svg></button>
      {project && <>
        <span className="eyebrow">{project.label}</span>
        <h2 id="dialog-title">{project.title}</h2>
        <p>{project.body}</p>
        <div id="dialog-extra"><p>{project.extra}</p>
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{project.link}<svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10"></path></svg></a>}
        </div>
      </>}
    </dialog>
  </>;
}
