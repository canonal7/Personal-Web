import {useContext, useState} from 'react'
import Navlink from './Navlink'
import { navLinks } from './navLinks'
import { NavContext } from './NavContext'
import '../../css/Nav.css'
const Nav = () => {
	const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext);
	return(
		<nav>
			{navLinks.map(({navLinkId, scrollToId},idx) => (
				<Navlink
					key = {idx}
					navLinkId={navLinkId}
					scrollToId = {scrollToId}
					
				/>
			))}
			<h3>Can Onal</h3>
		</nav>
	)
}
export default Nav;