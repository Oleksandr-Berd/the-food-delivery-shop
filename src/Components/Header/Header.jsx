import * as SC from "./HeaderStyled";

import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (<SC.Header>
        <Logo/>
        <NavBar/>
    </SC.Header> );
}
 
export default Header;          