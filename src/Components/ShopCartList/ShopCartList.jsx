import { useContext } from "react";
import productsCartContext from "../../context/productsCartContext";
import ShopCartItem from "../ShopCartItem/ShopCartItem";

const ShopCartList = () => {
const {chosenProducts} = useContext(productsCartContext)
console.log(chosenProducts);    
    return (
      <div>
        <ul>
          {!!chosenProducts && chosenProducts.length > 0 ? (
                    chosenProducts.map(({ strMeal, strMealThumb, idMeal, price }) => (
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