import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const { addToCart,cartList,removeFromCart } = useCart();
  const {name, price, thumbnail} = product;
  const [IsinCart,setIsincart]=useState(false);

  useEffect(()=>
  {
    const productisincart =cartList.find(cartitem=>cartitem.id===product.id)
    if(productisincart)
      {
        setIsincart(true)
      }
      else
      {
        setIsincart(false)
      }
  },[cartList,product.id])

  return (
    <div className="productCard">
      <img src={thumbnail} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          IsinCart?(<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>):(<button onClick={() => addToCart(product)}>Add To Cart</button>)
        }
      </div>
    </div>
  )
}