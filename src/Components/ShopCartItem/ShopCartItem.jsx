import * as SC from "./ShopCartItemStyle"

const ShopCartItem = ({ id, name, image, price }) => {
    return (
      <SC.Item>
        <SC.Image src={image} alt={name} />
        <SC.TextContainer>
          <h3>{name}</h3>
          <p>Price: {price}</p>
        </SC.TextContainer>
      </SC.Item>
    );
}
 
export default ShopCartItem;