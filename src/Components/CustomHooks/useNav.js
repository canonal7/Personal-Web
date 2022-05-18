import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../Nav/NavContext";
export const useNav = navLinkId => {
	const ref = useRef(null);
	const {setActiveNavLinkId} = useContext(NavContext);
	const isOnScreen = useOnScreen(ref);

	useEffect(()=>{
		if(isOnScreen){
			setActiveNavLinkId(navLinkId);
		}
	},[isOnScreen, navLinkId, setActiveNavLinkId]);
	return ref;

}