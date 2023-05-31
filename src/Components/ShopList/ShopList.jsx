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
    
    
    


    return (
      <>
        {error && <h1>error.message</h1>}
        <div>
          <h2>Shops: </h2>
          <ul>
            {!!shops && shops.length > 0
              ? shops.map(({ strCategory, idCategory }, idx) => {
                  return (
                    <ShopItem
                      key={idCategory}
                      name={strCategory}
                      url={strCategory}
                      index={idx}
                      id={idCategory}
                    />
                  );
                })
              : null}
          </ul>
        </div>
      </>
    );
}

export default ShopList