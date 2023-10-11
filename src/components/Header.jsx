import "../../index.css";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="menu-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li>test2</li>
      </div>
    </div>
  );
};

export default Header;
