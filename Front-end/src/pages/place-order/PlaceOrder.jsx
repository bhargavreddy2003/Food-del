import React, { useContext } from "react";
import "./Place-order.css";
import { StoreContext } from "../../Components/Contet/StoreContext";

const PlaceOrder = () => {
  const { getCartTotal } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="number" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
      </div>
    </form>
  );
};

export default PlaceOrder;
