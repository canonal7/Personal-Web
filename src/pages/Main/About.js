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
				src='../../../public/my_photo.jpg'
				alt='my-photo'
			/>
			<div>
				<h3>ABOUT ME</h3>
				<p id = 'Iam'>I am:</p>
				<ul>
					<li>a junior Computer Science student at Bilkent University</li>
					<li>interested and experienced in Frontend Development</li>
				</ul>
				<a target = "_blank" href="https://www.dropbox.com/s/irhu60573ex0xb4/CanOnalResume-4.pdf?dl=0">

					<p>You can view and download my resume here</p>
				</a>
			</div>
		</section>
	);
};

export default About;