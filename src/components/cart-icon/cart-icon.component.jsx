import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  CartItemCount,
  CartItemIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <CartItemIcon />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
