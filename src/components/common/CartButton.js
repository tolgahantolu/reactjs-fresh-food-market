import { useNavigate } from "react-router-dom";
import shoppingCart48 from "./shopping-cart-48.png";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes["cart-count-btn"]}
      onClick={() => navigate("/cart")}
    >
      <div className={classes.count}>
        {props.cartCount >= 100 ? "99+" : props.cartCount}
      </div>
      <img src={shoppingCart48} alt="shopping cart" />
    </div>
  );
};

export default CartButton;
