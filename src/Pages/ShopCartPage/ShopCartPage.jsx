import * as SC from "./ShopCartPageStyle"

import ShopCartList from "../../Components/ShopCartList/ShopCartList";
import ShopCartOrderForm from "../../Components/ShopCartOrderForm/ShopCartOrderForm";

const ShopCart = () => {
    return (<SC.ShopCartPage>
        <ShopCartOrderForm/>
        <ShopCartList/>
    </SC.ShopCartPage> );
}
 
export default ShopCart;