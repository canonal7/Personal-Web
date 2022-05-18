import React from 'react';
import {useNav} from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css'

const Projects = () => {
	const projectsRef = useNav('Projects');

	return (
		<section ref={projectsRef} id='projectsCont'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>PROJECTS</h3>
				<p>This is the projects section</p>
			</div>
		</section>
	);
}
export default Projects;