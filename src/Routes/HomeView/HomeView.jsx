import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../components/Assets/multiplePizzas.jpeg";
import { ButtonComponent } from "../../components/Button/ButtonComponent";
import "./HomeViewStyle.css";

export function HomeView() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Tsankov Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu" className="button-home">
          <ButtonComponent className="button-red">ORDER NOW</ButtonComponent>
        </Link>
      </div>
    </div>
  );
}
