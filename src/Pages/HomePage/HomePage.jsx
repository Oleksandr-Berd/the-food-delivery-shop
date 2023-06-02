import * as SC from "./HomePageStyled"
import image from "../../assets/images/homepagefirst.jpeg";
import image2 from "../../assets/images/homepagesecond.webp";
import image3 from "../../assets/images/homepagethird.jpeg";
import image4 from "../../assets/images/homepagefourth.jpeg";
import image5 from "../../assets/images/homepagefifth.jpeg";
import image6 from "../../assets/images/homepagesix.jpeg";



const HomePage = () => {
    return (
    
    <SC.HomePage >
      <SC.GridPanelFirst >
        <SC.GridPanelTall >
          <SC.GridImg src={image} alt="homePageImage" />
        </SC.GridPanelTall>
        <SC.GridPanelSmall >
          <SC.GridImg src={image2} alt="homePageImage" />
        </SC.GridPanelSmall>
      </SC.GridPanelFirst>

      <SC.GridPanelSecond >
        <SC.GridPanelSmall >
          <SC.GridImg src={image3} alt="homePageImage" />
        </SC.GridPanelSmall>
        <SC.GridPanelTall >
          <SC.GridImg src={image4} alt="homePageImage" />
        </SC.GridPanelTall>
      </SC.GridPanelSecond>

      <SC.GridPanelFirst >
        <SC.GridPanelTall >
          <SC.GridImg src={image5} alt="homePageImage" />
        </SC.GridPanelTall>
        <SC.GridPanelSmall >
          <SC.GridImg src={image6} alt="homePageImage" />
        </SC.GridPanelSmall>
      </SC.GridPanelFirst>
    </SC.HomePage>
 
    );
}
 
export default HomePage;