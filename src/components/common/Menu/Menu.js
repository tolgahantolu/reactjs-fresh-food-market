import { DUMMY_MENU_ITEMS } from "./data";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <main className={classes.menu}>
      {props.list.map((item) => {
        return <MenuItem key={item.id} items={item} />;
      })}
    </main>
  );
};

export default Menu;
