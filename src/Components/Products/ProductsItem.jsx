import Description from "./ProductsDescription";
import * as SC from "./ProductsStyled"

const ProductsItem = ({ name, price, description, image }) => {

  return (
    <SC.ProductsItem>
      <SC.ProductsImage src={image} alt={name} />
      <SC.ProductsTitle>{name}</SC.ProductsTitle>
      <Description description={description}/>
      <p>Price: {price} USD</p>
      <button>Add to the Cart</button>
    </SC.ProductsItem>
  );
};

export default ProductsItem;
