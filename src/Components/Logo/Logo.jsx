import deliveryLogo from "../../assets/icons/pngwing.com.png"
import * as SC from "./LogoStyled"

const Logo = () => {
    return (
      <SC.LogoContainer>
        <p>The Food</p>
        <SC.Logo src={deliveryLogo} alt="logo" />
        <p>Delivery</p>
      </SC.LogoContainer>
    );
}
 
export default Logo;