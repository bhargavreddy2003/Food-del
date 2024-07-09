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
  useEffect(() => {
    console.log(cartitem);
  }, [cartitem]);

  const ContextValue = {
    food_list,
    cartitem,
    setCartItem,
    addtocart,
    removefromCart,
    //----- we can access these in food item context---//
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
