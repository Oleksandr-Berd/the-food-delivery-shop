import deliveryLogo from "../../assets/icons/pngwing.com.png"
import * as SC from "./LogoStyled"

const Logo = () => {
    return (
      <SC.LogoContainer>
        <SC.LogoText>Products</SC.LogoText>
        <SC.Logo src={deliveryLogo} alt="logo" />
        <SC.LogoText>Delivery</SC.LogoText>
      </SC.LogoContainer>
    );
}
 
export default Logo;