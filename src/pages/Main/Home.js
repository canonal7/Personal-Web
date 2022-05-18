
import React from 'react';
import { useNav } from '../../Components/CustomHooks/useNav';
import '../../css/Pages.css'

const Home = () => {
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeCont'>
			<img
				src='https://source.unsplash.com/random/600x600/?code'
				alt='unsplash-img'
			/>
			<div>
				<h3>HOME</h3>
				<div className="typewriter">

					<p>Welcome to my home page, here you will find:</p>
					<p>Detailed information about me,</p>					
					<p>My projects</p>
					<p>And my contact information</p>
					<p>Enjoy</p>




				</div>
			</div>
		</section>
	);
};
export default Home;