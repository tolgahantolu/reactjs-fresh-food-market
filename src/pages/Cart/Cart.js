import Menu from "../../components/common/Menu/Menu";
import { DUMMY_MENU_ITEMS } from "../../components/common/Menu/data";
import Footer from "../../components/common/Footer";
import classes from "./Cart.module.css";
import CartEmpty from "../../components/Cart/CartEmpty";

const Cart = () => {
  return (
    <>
      <div className={classes["cart-header"]}>
        <h3>Fresh Food Market</h3>
      </div>
      <CartEmpty />
      <div className={classes.orders}>
        <h1>Your Orders</h1>
        <div>
          <Menu list={DUMMY_MENU_ITEMS} />
        </div>
        <h3>Total Amount $567</h3>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
