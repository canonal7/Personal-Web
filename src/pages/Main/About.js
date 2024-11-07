import React from 'react';
import {useNav} from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css'
const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutCont'>
			<img
				src='https://avatars.githubusercontent.com/u/55083192?v=4'
				alt='my-photo'
			/>
			<div>
				<h3>ABOUT ME</h3>
				<p id = 'Iam'>I am:</p>
				<ul>
					<li>a Computer Science graduate from Bilkent University</li>
					<li>a Master's student at JADS studying Data Science in Business and Entrepreneurship</li>					
					<li>a fullstack developer and Data Scientist/Engineer</li>
				</ul>
				<a target = "_blank" href="https://www.dropbox.com/scl/fi/kpe23bll17zdlisknmla8/Can-nal-Resume-3.pdf?rlkey=es1qubx9j5mtwl5xr3jhuglne&st=7ixmuvqz&dl=0">

					<p>You can view and download my resume here</p>
				</a>
			</div>
		</section>
	);
};

export default About;
