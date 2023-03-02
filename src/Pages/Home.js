import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import image1 from "../Images/image1.svg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="link-div">
          <Link className="link">Home</Link>
          <Link className="link">About</Link>
          <Link to="menu" className="link">
            Food Menu
          </Link>
        </div>
        <div className="inp">
          <input type="text" placeholder="Search" name="search" />
          <button className="btn">Order Now</button>
        </div>
      </header>
      <section>
        <div>
          <h1>
            Stay Healthy and <br />
            Choose Your Taste
          </h1>
          <p>Food is a symbol of love when words become inadequate</p>
          <button>Order Now</button>

          <div>
            <p>Explore our menu of delicious meals</p>
            <div>
              <button>Rice</button>
              <button>Bugger</button>
              <button>Noodles</button>
              <button>Pizza</button>
            </div>
          </div>
          <div>
            <p>Join our social media platforms</p>
          </div>
        </div>
        <div>
          <img src={image1}></img>
        </div>
      </section>
    </div>
  );
}

export default Home;
