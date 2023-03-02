import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    item,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your Cart is empty</h1>;
  return (
    <section>
      <div>
        <div>
          <h5>
            Cart ({totalUniqueItems}) totalItems: ({totalItems})
          </h5>
          <table>
            <tbody>
              {item.map((item, index) => {
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: "6rem" }}></img>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.desc}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.Quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.Quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      Remove Item
                    </button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2>Total Price: {cartTotal}</h2>
      </div>
      <div>
        <button className="btn" onClick={() => emptyCart()}>
          Clear cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
