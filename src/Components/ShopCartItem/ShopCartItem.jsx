import * as SC from "./ShopCartItemStyle"
import {useState, useEffect } from "react";

const ShopCartItem = ({ id, name, image, price, handleTotalPrice }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState({});

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (
      inputValue === "" ||
      inputValue === "-" ||
      parseFloat(inputValue) >= 0
    ) {
      setTotalAmount(inputValue);
      setTotalPrice((inputValue * price).toFixed(2));
    }
   
  };

  useEffect(() => {
   
    handleTotalPrice(name, totalPrice);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[name, totalPrice])

  return (
    <SC.Item>
      <SC.Image src={image} alt={name} />
      <SC.TextContainer>
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <input
          type="number"
          value={totalAmount}
          onChange={handleChange}
          min="0"
        />
      </SC.TextContainer>
    </SC.Item>
  );
};
 
export default ShopCartItem;