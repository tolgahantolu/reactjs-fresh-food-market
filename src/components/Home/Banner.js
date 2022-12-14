import classes from "./Banner.module.css";
import bannerImage from "./banner.png";
import logoImage from "./logo.png";

const Banner = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <img src={logoImage} alt="logo" />
        <div>
          <h1>
            Delicious food for your
            <span className="color-gradient"> cravings! </span>
          </h1>
          <p> We made fresh and healty meals with different recipes. </p>
          <button onClick={props.onMenuScroll}>
            View Menu <span> &rarr; </span>
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="banner-img-source: hellofresh.co.nz" />
    </header>
  );
};

export default Banner;
