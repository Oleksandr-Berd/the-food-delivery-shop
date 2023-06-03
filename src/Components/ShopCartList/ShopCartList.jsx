import { useContext, useEffect, useState } from "react";

import * as SC from "./ShopcartListStyle";

import productsCartContext from "../../context/productsCartContext";
import ShopCartItem from "../ShopCartItem/ShopCartItem";

const ShopCartList = () => {
  const [finalOrder, setFinalOrder] = useState({});
const [orderCost, setOrderCost] = useState()
  const { chosenProducts, productsCart, calculateTotalPrice } =
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

  const sumsArray = Object.values(finalOrder);

  useEffect(() => {
   const accumCost =
      sumsArray.length > 0
        ? sumsArray
            .filter((el) => typeof el !== "object")
            .reduce((acc, el) => {
              return acc + Number(el);
            }, 0)
        : null;

    setOrderCost(accumCost);
  }, [sumsArray])

  useEffect(() => {
    calculateTotalPrice(orderCost);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderCost]);

  
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
};

export default ShopCartList;
