import { useNavigate } from "react-router-dom";
import cartEmptyImg from "./cartEmptyIcon.png";
import classes from "./CartEmpty.module.css";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className={classes["empty-cart"]}>
      <img src={cartEmptyImg} alt="empty cart source: seekpng.com" />
      <button onClick={() => navigate("/")}>
        <span> &larr; </span> Shop Now!
      </button>
    </div>
  );
};

export default CartEmpty;
