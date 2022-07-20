import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromCheckout,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutSpan,
  QuantitySpan,
  ArrowDiv,
  ValueSpan,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClearItem = () =>
    dispatch(removeItemFromCheckout(cartItems, cartItem));

  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <CheckoutSpan>{name}</CheckoutSpan>
      <QuantitySpan>
        <ArrowDiv onClick={handleRemoveItem}>&#10094;</ArrowDiv>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowDiv onClick={handleAddItem}>&#10095;</ArrowDiv>
      </QuantitySpan>
      <CheckoutSpan>{price}</CheckoutSpan>
      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
