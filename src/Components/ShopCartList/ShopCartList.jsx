import { useContext } from "react";
import productsCartContext from "../../context/productsCartContext";
import ShopCartItem from "../ShopCartItem/ShopCartItem";

const ShopCartList = () => {
const { chosenProducts, productsCart, clear } = useContext(productsCartContext);
    const formedProducts = chosenProducts
      ? chosenProducts.filter(({ idMeal }) => productsCart.includes(idMeal))
        : null;
    // if (productsCart.length > 0 && formedProducts) {
    //     clear()
    // }
      return (
        <div>
          <ul>
            {!!formedProducts && formedProducts.length > 0 ? (
              formedProducts.map(({ strMeal, strMealThumb, idMeal, price }) => (
                <ShopCartItem
                  key={idMeal}
                  id={idMeal}
                  image={strMealThumb}
                  price={price}
                  name={strMeal}
                />
              ))
            ) : (
              <>
                <h1>Sorry, Your Cart is empty now!</h1>
              </>
            )}
          </ul>
        </div>
      );
}
 
export default ShopCartList;