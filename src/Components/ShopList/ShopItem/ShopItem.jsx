import { NavLink } from "react-router-dom";

const ShopItem = ({ name}) => {
  return (
      <li>
          <NavLink>{name}</NavLink>
    </li>
  );
};

export default ShopItem;
