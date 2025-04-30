import React from 'react';
import { useNav } from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css';

const Home = () => {
  const homeRef = useNav('Home');

  return (
    <section ref={homeRef} id='homeCont'>
      <img
        src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='unsplash-img'
      />
      <div>
        <h3>Welcome to My Portfolio</h3>
        <div className='typewriter'>
          <p>Hi, I'm Can Önal</p>
          <p>Full Stack Developer & Data Scientist</p>
          <p>Passionate about creating solutions</p>
          <p>Let's build something together</p>
          <p>Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};
export default Home;
