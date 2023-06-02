import * as SC from "./HeaderStyled";

import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (<SC.Header>
        <Logo/>
        <NavBar />
        <SC.Title>Welcome to Our Food Delivery Service!</SC.Title>
    </SC.Header> );
}
 
export default Header;          