import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div>
      <div>
        <img src={props.img} className=""></img>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.price}</p>
        <button className="btn" onClick={() => addItem(props.item)}>
          <Link to="/cart">Order Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
