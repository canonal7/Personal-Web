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
			<span id ='nameTag'>CAN ONAL</span>
		</nav>
	)
}
export default Nav;