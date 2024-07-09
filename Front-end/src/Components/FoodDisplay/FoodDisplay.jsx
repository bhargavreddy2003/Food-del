import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../Contet/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
    </div>
  );
};

export default FoodDisplay;
