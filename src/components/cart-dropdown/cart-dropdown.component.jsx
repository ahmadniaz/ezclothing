import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-items/cart-item.component";
import Button from "../button/button.component";

import {
  CartDropdownContainer,
  CartItemsDiv,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsDiv>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItemsDiv>
      <Button onClick={goToCheckoutHandler}> Go to Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
