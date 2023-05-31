import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as SC from "./ProductsStyled"

import { fetchProducts } from "../../Utilities/helpers";
import ProductsItem from "./ProductsItem";

const ProductsList = () => {    
    const {name} = useParams()
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)


 useEffect(() => {
   fetchProducts(name).then(setProducts).catch(error => setError(error))
 }, [name]);
    

    return (
      <SC.ProductsList>
        {error && <h1>{error.message}</h1>}
        {!!products && products.length > 0
          ? products.map(({ idMeal, strMealThumb, strMeal }) => (
              <ProductsItem
                key={idMeal}
                name={strMeal}
                image={strMealThumb}
                id={idMeal}
              />
            ))
          : null}
      </SC.ProductsList>
    );
}
 
export default ProductsList;