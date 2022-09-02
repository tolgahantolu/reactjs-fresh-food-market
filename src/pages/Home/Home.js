import CartButton from "../../components/common/CartButton";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu/Menu";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Menu />
      <Footer />
      <CartButton />
    </>
  );
};

export default Home;
