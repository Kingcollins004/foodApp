import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

const FoodMenu = () => {
  return (
    <div className="menu">
      <header className="header">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="link-div">
          <Link to="/" className="link">
            Home
          </Link>
          <Link className="link">About</Link>
          <Link className="link">Food Menu</Link>
        </div>
        <div className="inp">
          <input type="text" placeholder="Search" name="search" />
          <button className="btn">Order Now</button>
        </div>
      </header>
      <div className="menu-div">
        <h1>Categories</h1>
        <div className="categories-div">
          <div className="cate1">
            <div>
              <h3>Rice</h3>
              <p>Explore different types of rice</p>
              <button className="btn">Explore</button>
            </div>
          </div>
          <div className="cate2">
            <div>
              <h3>Noodles</h3>
              <p>Explore different types of Noodles</p>
              <button className="btn">Explore</button>
            </div>
          </div>
          <div className="cate3">
            <div>
              <h3>Pizza</h3>
              <p>Explore different types of Pizza</p>
              <button className="btn">Explore</button>
            </div>
          </div>
          <div className="cate4">
            <div>
              <h3>Buggers</h3>
              <p>Explore different types of Buggers</p>
              <button className="btn">Explore</button>
            </div>
          </div>
        </div>
        <button className="btn">View More</button>

        <div className="menu-div">
          <h2>Popular Dishes you can order right now</h2>
          <div className="categories-div">
            <div className="cate1">
              <div>
                <h3>Rice</h3>
                <p>French styled rice</p>
                <button className="btn">Order Now</button>
              </div>
            </div>
            <div className="cate2">
              <div>
                <h3>Noodles</h3>
                <p>Japanese Noodles</p>
                <button className="btn">Order Now</button>
              </div>
            </div>
            <div className="cate3">
              <div>
                <h3>Pizza</h3>
                <p>Chicken Pizza</p>
                <button className="btn">Order Now</button>
              </div>
            </div>
            <div className="cate4">
              <div>
                <h3>Buggers</h3>
                <p>Danish Ham Buggers</p>
                <button className="btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn">
          <Link to="/foodpage">View More</Link>
        </button>
      </div>

      <div className="add">
        <h4>Go to cart</h4>
      </div>
    </div>
  );
};

export default FoodMenu;
