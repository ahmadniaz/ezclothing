import { CartItemContainer, CartItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <h2 className="name">{name}</h2>
        <span>
          {quantity} X ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
