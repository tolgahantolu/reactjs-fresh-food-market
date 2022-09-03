import AddRemoveItemBtn from "../AddRemoveItemBtn";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.items.img} alt="menu item image" />
      <div className={classes["item-head-desc"]}>
        <p>{props.items.title}</p>
        <p>
          <small> {props.items.desc} </small>
        </p>
      </div>

      <div className={classes["item-foot-desc"]}>
        <span>${props.items.price}</span>
        <AddRemoveItemBtn
          quantity={20}
          addItemHandler={1}
          removeItemHandler={1}
        />
      </div>
    </div>
  );
};

export default MenuItem;
