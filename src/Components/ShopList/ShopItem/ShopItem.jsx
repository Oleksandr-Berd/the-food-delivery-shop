import { NavLink } from "react-router-dom";

const ShopItem = ({ name, url, index, id}) => {
  return (
    <li key={id}>
      <NavLink to={url}>
        {name}
      </NavLink>
    </li>
  );
};

export default ShopItem;
