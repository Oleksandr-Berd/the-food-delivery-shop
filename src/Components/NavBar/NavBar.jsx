import navLinks from "../../DataBase/nav.json";
import * as SC from "./NavBarStyled"

const NavBar = () => {
    return <nav>
      
        {navLinks.map(({id, destination, name})=>(<SC.Link to={destination} key={id}>{name}</SC.Link>)) }
  </nav>;
};

export default NavBar;


