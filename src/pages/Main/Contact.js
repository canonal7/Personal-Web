
import React from 'react';
import {useNav} from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css'
import github_icon from "../../github_icon.png"


const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactCont'>
			<img
				src='https://images.unsplash.com/photo-1559030623-0226b1241edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80'
				alt='unsplash-img'
			/>
			<div>
				<h3>CONTACT ME</h3>
					<a href="mailto:can.onal@ug.bilkent.edu.tr">
					<img className = "mailIcon"src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" />
					</a>
					<a target = "_blank" href = "https://www.linkedin.com/in/can-onal/">
					<img className="linkedInIcon my-5" src="https://img.icons8.com/fluency/2x/linkedin-circled.png" alt="" />
					</a>
				<a target="_blank" href="https://github.com/canonal7">
					<img className="icon" src={github_icon} alt="" />
				</a>
			</div>
		</section>
	);
};

export default Contact;