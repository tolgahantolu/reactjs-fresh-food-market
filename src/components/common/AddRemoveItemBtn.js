import classes from "./AddRemoveItemBtn.module.css";

const AddRemoveItemBtn = (props) => {
  return (
    <div className={classes["add-remove-btn"]}>
      {props.quantity !== 0 ? (
        <div className={classes["addRemoveItem-positive"]}>
          <span onClick={props.removeItemHandler}> - </span>
          <span>{props.quantity}</span>
          <span onClick={props.addItemHandler}> + </span>
        </div>
      ) : (
        <div
          className={classes["addRemoveItem-negative"]}
          onClick={props.addItemHandler}
        >
          <span> ADD + </span>
        </div>
      )}
    </div>
  );
};

export default AddRemoveItemBtn;
