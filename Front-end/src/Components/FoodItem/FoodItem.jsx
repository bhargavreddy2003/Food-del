import React, { useContext } from "react";
import "./FootItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Contet/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartitem, addtocart, removefromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartitem[id] ? (
          <img
            className="add"
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt=""
            srcset=""
          />
        ) : (
          <div className="foot-item-count">
            <img
              onClick={() => removefromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              srcset=""
            />{" "}
            <p>{cartitem[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-description">
          {description}
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
