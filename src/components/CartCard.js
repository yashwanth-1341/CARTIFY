import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();

  const {name, price, thumbnail} = product;

  return (
      <div className="cartCard">
        <img src={thumbnail} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
  )
}