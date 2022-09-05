import logoImage from "./logo.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        We're a team of Professional Cook Services. We have amazing skills and
        experience in cooking, lorem ipsum dolor sit amet. <br />
        <i> @freshfoodmarketteam </i>
      </p>
      <img src={logoImage} alt="logo" />
    </footer>
  );
};

export default Footer;
