const ShopCartItem = ({id, name, image, price}) => {
    return (<li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
    </li> );
}
 
export default ShopCartItem;