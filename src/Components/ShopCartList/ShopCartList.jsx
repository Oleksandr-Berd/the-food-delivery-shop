import { useContext } from "react";
import * as SC from "./ShopcartListStyle";
import productsCartContext from "../../context/productsCartContext";
import ShopCartItem from "../ShopCartItem/ShopCartItem";

const ShopCartList = () => {
const { chosenProducts, productsCart } = useContext(productsCartContext);
    const formedProducts = chosenProducts
      ? chosenProducts.filter(({ idMeal }) => productsCart.includes(idMeal))
        : null;
    
  const listHeight = window.innerHeight - 150;
  
      return (
        <SC.CustomList
          width={600}
          height={listHeight}
          rowCount={formedProducts.length}
          rowHeight={200}
          rowRenderer={({ index, key, style }) => (
            <div key={key} style={style}>
              <ShopCartItem
                id={formedProducts[index].idMeal}
                image={formedProducts[index].strMealThumb}
                price={formedProducts[index].price}
                name={formedProducts[index].strMeal}
              />
            </div>
          )}
        />
      );
}
 
export default ShopCartList;