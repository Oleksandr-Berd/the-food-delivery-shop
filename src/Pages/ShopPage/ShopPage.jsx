import * as SC from "./ShopPageStyle"

import ShopList from "../../Components/ShopList/ShopList";

const ShopPage = () => {
    return (<div>
        <SC.SideBar><ShopList/></SC.SideBar>
    </div> );
}
 
export default ShopPage;