import { useContext, useState } from "react";
import * as SC from "./ShopcartListStyle";
import productsCartContext from "../../context/productsCartContext";
import ShopCartItem from "../ShopCartItem/ShopCartItem";

const ShopCartList = () => {
const [finalOrder, setFinalOrder] = useState({})

const { chosenProducts, productsCart } =
  useContext(productsCartContext);
    const formedProducts = chosenProducts
      ? chosenProducts.filter(({ idMeal }) => productsCart.includes(idMeal))
        : null;
    
 const handleTotalPrice = (name, totalSum) => {
   setFinalOrder((prevTotalPrice) => ({
     ...prevTotalPrice,
     [name]: totalSum,
   }));
 };

console.log(finalOrder);
      return (
        <SC.CustomList>
          {formedProducts.length > 0 ? (
            formedProducts.map(({ idMeal, strMealThumb, strMeal, price }) => (
              <ShopCartItem
                key={idMeal}
                id={idMeal}
                image={strMealThumb}
                price={price}
                name={strMeal}
                handleTotalPrice={handleTotalPrice}
              />
            ))
          ) : (
            <h3>Your cart is empty now</h3>
          )}
        </SC.CustomList>
      );
}
 
export default ShopCartList;

  