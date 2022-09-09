import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import { forwardRef } from "react";

const Menu = forwardRef((props, ref) => {
  return (
    <main className={classes.menu} ref={ref}>
      {props.list.map((item) => {
        return <MenuItem key={item.id} items={item} />;
      })}
    </main>
  );
});

export default Menu;
