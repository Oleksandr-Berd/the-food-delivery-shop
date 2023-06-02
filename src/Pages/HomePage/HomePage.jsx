import * as SC from "./HomePageStyled"
import css from "./HomePage.module.css"
import image from "../../assets/images/homepagefirst.jpeg";
import image2 from "../../assets/images/homepagesecond.webp";
import image3 from "../../assets/images/homepagethird.jpeg";
import image4 from "../../assets/images/homepagefourth.jpeg";
import image5 from "../../assets/images/homepagefifth.jpeg";
import image6 from "../../assets/images/homepagesix.jpeg";



const HomePage = () => {
    return (
    
    <div className={css.container}>
      <div className={css.panelFirst}>
        <div className={css.panelTall}>
          <img src={image} alt="fishing" />
        </div>
        <div className={css.panelSmall}>
          <img src={image2} alt="fishing" />
        </div>
      </div>

      <div className={css.panelSecond}>
        <div className={css.panelSmall}>
          <img src={image3} alt="fishing" />
        </div>
        <div className={css.panelTall}>
          <img src={image4} alt="fishing" />
        </div>
      </div>

      <div className={css.panelFirst}>
        <div className={css.panelTall}>
          <img src={image5} alt="fishing" />
        </div>
        <div className={css.panelSmall}>
          <img src={image6} alt="fishing" />
        </div>
      </div>
    </div>
 
    );
}
 
export default HomePage;