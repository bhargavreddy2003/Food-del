import React, { useContext } from "react";
import { StoreContext } from "../../Components/Contet/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { food_list, cartitem, removefromCart, getCartTotal } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" srcset="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price * cartitem[item._id]}</p>
                  <p
                    onClick={() => {
                      removefromCart(item._id);
                    }}
                    className="cross"
                  >
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Card Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getCartTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getCartTotal() === 0 ? 0 : getCartTotal() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/PlaceOrder")}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have promocode enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" name="" id="" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
