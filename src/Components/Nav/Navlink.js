import { NavContext } from "./NavContext";
import { useContext } from "react";
const Navlink = ({navLinkId, scrollToId}) => {
	const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext);
	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({behavior: 'smooth'});
	}

	return(
		<span
			className = {activeNavLinkId === navLinkId ? 'activeClass' : ''}
			id = {navLinkId}
			onClick = {handleClick}
		>
			{navLinkId}
		</span>
	)
}
export default Navlink;