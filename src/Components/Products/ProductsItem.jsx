
import * as SC from "./ProductsStyled";

const ProductsItem = ({
  name,
  image,
  id,
  addProduct,
  price,
  formProductList,
  productsList,
}) => {
  const handleProductCart = () => {
    addProduct(id);
  };

  return (
    <SC.ProductsItem key={id}>
      <SC.ProductsImage src={image} alt={name} />
      <SC.ProductsTitle>{name}</SC.ProductsTitle>
      <p>Price: {price} $</p>
      <button onClick={handleProductCart}>Add to the Cart</button>
    </SC.ProductsItem>
  );
};

export default ProductsItem;
