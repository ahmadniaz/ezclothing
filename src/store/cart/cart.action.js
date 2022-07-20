import { SET_IS_CART_OPEN , SET_CART_ITEMS} from "../types";
import { createAction } from "../../utils/reducer/reducer.utils";


 const addCartItem = (cartItems, productToAdd) => {
    const cartItemExist = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (cartItemExist) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, productToRemove) => {
    const cartItemExist = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );
  
    if (cartItemExist.quantity === 1) {
      return cartItems.filter((item) => item.id !== productToRemove.id);
    } else {
      return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };
  
  const clearCartItems = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  };
 

  export const setIsCartOpen=(boolean)=>createAction(SET_IS_CART_OPEN, boolean)
 
 
 export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems= addCartItem(cartItems, productToAdd)
    return createAction(SET_CART_ITEMS, newCartItems)
  };

  export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems= removeCartItem(cartItems, productToRemove)
    return createAction(SET_CART_ITEMS, newCartItems)
  };

  export const removeItemFromCheckout = (cartItems, productToClear) => {
    const newCartItems= clearCartItems(cartItems, productToClear)
    return createAction(SET_CART_ITEMS, newCartItems)
  };