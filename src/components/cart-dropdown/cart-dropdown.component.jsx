import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-items/cart-item.component";
import Button from "../button/button.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  CartItemsDiv,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
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
