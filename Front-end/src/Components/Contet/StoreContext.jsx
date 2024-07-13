import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  //-------- add to cart logic----//
  const [cartitem, setCartItem] = useState({});
  const addtocart = (itemId) => {
    if (!cartitem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  //--------        remove from cart                --------///
  const removefromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //    ----            ------          ------      --//
  //--- Cart total amount--//
  const getCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item); //product id is matching with item, ie. product is availabale in cart
        totalAmount = totalAmount + itemInfo.price * cartitem[item];
      }
    }
    return totalAmount;
  };
  //----------//        //---------//

  const ContextValue = {
    food_list,
    cartitem,
    setCartItem,
    addtocart,
    removefromCart,
    getCartTotal,
    //----- we can access these in food item context---//
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
