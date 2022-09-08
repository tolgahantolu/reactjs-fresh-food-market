import CartButton from "../../components/common/CartButton";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu/Menu";
import { DUMMY_MENU_ITEMS } from "../../components/common/Menu/data";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Menu list={DUMMY_MENU_ITEMS} />
      <Footer />
      <CartButton />
    </>
  );
};

export default Home;
