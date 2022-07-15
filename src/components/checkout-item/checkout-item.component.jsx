import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

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
  const { removeItemFromCheckout, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, price, imageUrl, quantity } = cartItem;

  const handleClearItem = () => removeItemFromCheckout(cartItem);

  const handleRemoveItem = () => removeItemFromCart(cartItem);

  const handleAddItem = () => addItemToCart(cartItem);

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
