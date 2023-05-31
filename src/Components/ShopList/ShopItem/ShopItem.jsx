import { NavLink } from "react-router-dom";

const ShopItem = ({ name, url}) => {
  return (
    <li>
      <NavLink to={url}>{name}</NavLink>
    </li>
  );
};

export default ShopItem;
