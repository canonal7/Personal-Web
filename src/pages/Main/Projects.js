import React from 'react';
import {useNav} from '../../Components/CustomHooks/useNav';
import github_icon from "../../github_icon.png"
import '../../css/Pages.css'

const Projects = () => {
	const projectsRef = useNav('Projects');

	return (
		<section ref={projectsRef} id='projectsCont'>
			<img
				src='https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600'
				alt='unsplash-img'
			/>
			<div>
				<h3>PROJECTS</h3>
				<p>For my projects you can view my GitHub profile</p>
				<a target = "_blank" href="https://github.com/canonal7">
					<img className = "icon" src={github_icon} alt="" />
				</a>
			</div>
		</section>
	);
}
export default Projects;