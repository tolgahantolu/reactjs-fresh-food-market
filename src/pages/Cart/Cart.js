import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Menu from "../../components/common/Menu/Menu";
import Footer from "../../components/common/Footer";
import classes from "./Cart.module.css";
import CartEmpty from "../../components/Cart/CartEmpty";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart-selector";

const Cart = (props) => {
  const { cartCount, cartList, cartTotal } = props;
  return (
    <>
      <div className={classes["cart-header"]}>
        <h3>Fresh Food Market</h3>
      </div>
      {cartCount === 0 ? (
        <CartEmpty />
      ) : (
        <div className={classes.orders}>
          <h1>Your Orders</h1>
          <div>
            <Menu list={cartList} />
          </div>
          <h3>Total Amount ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
