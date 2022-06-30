import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/users.context";
import { logOut } from "../../utils/firebase/Firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await logOut();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
