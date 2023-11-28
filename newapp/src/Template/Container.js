import React from "react";
// import Navbar from "./template/Navbar.js";
import sandwich from "../images/sandwich.jpg";
import cherries from "../images/cherries.jpg";
import croissant from "../images/croissant.jpg";
import chef from "../images/chef.jpg";
import sandwich1 from "../images/sandwich1.jpg";
import wine from "../images/wine.jpg";
import steak from "../images/steak.jpg";
// import workshop from "../images/workshop.jpg";
// import gondol from "../images/gondol.jpg";
import salmon from "../images/salmon.jpg";
import popsicle from "../images/popsicle.jpg";
import "./Navbar.css";

function Container() {
  return (
    <div>
      <div className="smallContainer">
        <h2>Product</h2>
        <div className="rows">
          <div className="col-3">
            <img src={sandwich} alt="" />
            <h4>The Perfect Sandwich, A Real NYC Classic</h4>
            <p>
              Just some random text, lorem ipsum text praesent tincidunt ipsum
              lipsum.
            </p>
          </div>
          <div className="col-3">
            <img src={steak} alt="" />
            <h4>Let Me Tell You About This Steak</h4>
            <p>
              Once again, some random text to lorem lorem lorem lorem ipsum text
              praesent tincidunt ipsum lipsum.
            </p>
          </div>
          <div className="col-3">
            <img src={cherries} alt="" />
            <h4>Cherries, interrupted</h4>3
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            <p> What else?</p>
          </div>
          <div className="col-3">
            <img src={wine} alt="" />
            <h4>Once Again, Robust Wine and Vegetable Pasta</h4>
            <p>lorem ipsum text praesent tincidunt ipsum lipum</p>
          </div>
          <div className="col-3">
            <img src={popsicle} alt="" />
            <h4>All I Need Is a Popsicle</h4>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="col-3">
            <img src={salmon} alt="" />
            <h4>Salmon For Your Skin</h4>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>{" "}
          <div className="col-3">
            <img src={croissant} alt="" />
            <h4>The Perfect Sandwich, A Real Classic</h4>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum</p>
          </div>
          <div className="col-3">
            <img src={sandwich1} alt="" />
            <h4>Le French</h4>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum</p>
          </div>
        </div>
        <div className="btn">
          <a href={11}>
            <i className="fa-solid fa-angles-left" />
          </a>
          <a href={1}>1</a>
          <a href={2}>2</a>
          <a href={3}>3</a>
          <a href={4}>
            <i className="fa-solid fa-angles-right" />
          </a>
        </div>
      </div>
      <h2 style={{ textAlign: "center", fontSize: 40, paddingTop: 20 }}>
        About Me ,The Food Man
      </h2>
      <div className="chef">
        <img src={chef} alt="" />
      </div>
      <h3 style={{ textAlign: "center", fontSize: 30 }}>I am Who I Am!</h3>
      <p style={{ textAlign: "center", fontSize: 25 }}>
        With Passion For Real, Good Food
      </p>
      <p style={{ textAlign: "center", paddingLeft: 20, paddingRight: 20 }}>
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla.
      </p>
    </div>
  );
}
export default Container;
