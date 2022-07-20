import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { logOut } from "../../utils/firebase/Firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const  isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="logo" />
          EZclothing
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={logOut}>
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGNIN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
