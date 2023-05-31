import Description from "./ProductsDescription";
import * as SC from "./ProductsStyled"

const ProductsItem = ({ name, price, description, image }) => {

  console.log(description);
  return (
    <SC.ProductsItem>
      <SC.ProductsImage src={image} alt={name} />
      <SC.ProductsTitle>{name}</SC.ProductsTitle>
      <Description description={description}/>
      <p>Price: {price} USD</p>
    </SC.ProductsItem>
  );
};

export default ProductsItem;
