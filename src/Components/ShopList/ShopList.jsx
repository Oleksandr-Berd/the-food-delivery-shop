import { useEffect, useState } from "react";

import { fetchShops } from "../../Utilities/helpers";
import ShopItem from "./ShopItem/ShopItem";

const ShopList = () => {
    const [shops, setShops] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getShops = () => {
            fetchShops()
                .then((response) => {
                    setShops(response);
                })
                .catch((error) => setError(error.message))
        
        };

        getShops();
    }, [])
    
    let shopName
    
    


    return (
      <>
        {error && <h1>error.message</h1>}
        <div>
          <h2>Shops: </h2>
          <ul>
            {!!shops && shops.length > 0
                        ? shops.map((el, idx) => 
                            {
                            switch (el) {
                              case "men's clothing":
                                    shopName = "MachoStyle Ltd.";
                                    break
                              case "women's clothing":
                                    shopName = "Cinderella Ltd.";
                                    break
                              case "electronics":
                                    shopName = "NanoTetris Ltd.";
                                    break
                              case "jewelery":
                                    shopName = "SuccessfulSuccess Ltd.";
                                    break
                                default:
                                    throw new Error()
                            }
                          return (<ShopItem key={el} name={shopName} url={el} index={idx} />)
                            
                        })
              : null}
          </ul>
        </div>
      </>
    );
}

export default ShopList