import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

import * as SC from "./ShopListStyled"
import { fetchShops } from "../../Utilities/helpers";

import ShopItem from "./ShopItem/ShopItem";

const ShopList = () => {
    const [shops, setShops] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      const getShops = () => {
          setIsLoading(true)
            fetchShops()
                .then((response) => {
                    setShops(response);
                })
                .catch((error) => setError(error.message)).finally(()=> setIsLoading(false))
        
        };

        getShops();
    }, [])

    return (
      <>
        {error && <h1>error.message</h1>}
        {isLoading && (
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="#F4442E"
          />
        )}
        <SC.Container>
          <SC.Title>Shops: </SC.Title>
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
        </SC.Container>
      </>
    );
}

export default ShopList