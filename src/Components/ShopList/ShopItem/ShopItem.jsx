import { NavLink } from "react-router-dom";

const ShopItem = ({ name, url, index}) => {
  return (
    <li>
      <NavLink to={url}>
        {name}
      </NavLink>
    </li>
  );
};

export default ShopItem;
