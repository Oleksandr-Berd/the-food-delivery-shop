
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import * as SC from "./ProductsStyled";

const ProductsItem = ({
  name,
  image,
  id,
  addProduct,
  price,
}) => {

const [isAdded, setIsAdded] = useState(false)

  const handleAddProductCart = () => {
    addProduct(id);
    setIsAdded(!isAdded)
  };

  return (
    <SC.ProductsItem key={id}>
      <SC.ProductsImage src={image} alt={name} />
      <SC.ProductsTitle>{name}</SC.ProductsTitle>
      <SC.Text>Price: {price} $</SC.Text>
      {!isAdded ? (
        <SC.Button onClick={handleAddProductCart} status="untouched">
          Add to the Cart
        </SC.Button>
      ) : (
        <SC.Button status="touched">
          <FaCheckCircle size={30} fill="green" />
        </SC.Button>
      )}
    </SC.ProductsItem>
  );
};

export default ProductsItem;
