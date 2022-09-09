import { useRef } from "react";
import CartButton from "../../components/common/CartButton";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu/Menu";
import { DUMMY_MENU_ITEMS } from "../../components/common/Menu/data";

const Home = () => {
  const menuButtonRef = useRef();

  const menuScrollHandler = () => {
    menuButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner onMenuScroll={menuScrollHandler} />
      <Menu list={DUMMY_MENU_ITEMS} ref={menuButtonRef} />
      <Footer />
      <CartButton />
    </>
  );
};

export default Home;
