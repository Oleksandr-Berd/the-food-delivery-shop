
import * as SC from "../ShopListStyled"

const ShopItem = ({ name, url, index, id}) => {
  return (
    <SC.Item key={id}>
      <SC.Link to={url}>
        {name}
      </SC.Link>
    </SC.Item>
  );
};

export default ShopItem;
