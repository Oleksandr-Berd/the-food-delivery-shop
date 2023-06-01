import * as SC from "./ShopCartPageStyle"

import ShopCartOrderForm from "../../Components/ShopCartOrderForm/ShopCartOrderForm";

const ShopCart = () => {
    return (
      <div>
        <SC.ShopCartPage>
          <ShopCartOrderForm />

        </SC.ShopCartPage>
       
      </div>
    );
}
 
export default ShopCart;