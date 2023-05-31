import { NavLink } from "react-router-dom";
import navLinks from "../../DataBase/nav.json";

const NavBar = () => {
    return <nav>
      
        {navLinks.map(({id, destination, name})=>(<NavLink to={destination} key={id}>{name}</NavLink>)) }
  </nav>;
};

export default NavBar;


