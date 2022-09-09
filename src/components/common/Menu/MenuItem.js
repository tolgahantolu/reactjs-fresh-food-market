import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import AddRemoveItemBtn from "../AddRemoveItemBtn";
import classes from "./MenuItem.module.css";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../redux/cart/cart-selector";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../redux/cart/cart-action";

const MenuItem = (props) => {
  const { cartCount, cartList, addItemToCart, removeItemFromCart } = props;

  const countItemHandler = () => {
    let quantity = 0;

    if (cartCount !== 0) {
      const foundItemInCart = cartList.find(
        (item) => item.id === props.items.id
      );

      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }

    return quantity;
  };

  return (
    <div className={classes.item}>
      <img src={props.items.img} alt="menu item" />
      <div className={classes["item-head-desc"]}>
        <p>{props.items.title}</p>
        <p>
          <small> {props.items.desc} </small>
        </p>
      </div>

      <div className={classes["item-foot-desc"]}>
        <span>${props.items.price}</span>
        <AddRemoveItemBtn
          quantity={countItemHandler()}
          addItemHandler={() => addItemToCart(props.items)}
          removeItemHandler={() => removeItemFromCart(props.items)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
