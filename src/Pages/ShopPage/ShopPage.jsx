import * as SC from "./ShopPageStyle";

import ShopList from "../../Components/ShopList/ShopList";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <SC.ShopPageContainer>
      <SC.SideBar>
        <ShopList />
      </SC.SideBar>
     <SC.Title>Choose Your Products!</SC.Title>
      <Outlet />
    </SC.ShopPageContainer>
  );
};

export default ShopPage;
