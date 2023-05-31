import * as SC from "./ProductsStyled"

const ProductsItem = ({ name, image, id }) => {

const generateRandomPrice = () => {
  const min = 1; 
  const max = 100;

  const randomPrice = (Math.random() * (max - min) + min).toFixed(2);

  return randomPrice;
};

const price = generateRandomPrice();

  return (
    <SC.ProductsItem key={id}>
      <SC.ProductsImage src={image} alt={name} />
      <SC.ProductsTitle>{name}</SC.ProductsTitle>
      <p>Price: {price}  $</p>
      <button>Add to the Cart</button>
    </SC.ProductsItem>
  );
};

export default ProductsItem;
