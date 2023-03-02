import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";

const FoodPage = () => {
  console.warn(data.productData);

  return (
    <div>
      <h2>Our Exciting Menu</h2>
      <p>Checkout our menu of mout watering dishes</p>
      <div>
        {data.productData.map((item, index) => {
          return (
            <ItemCard
              img={item.img}
              name={item.name}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodPage;
