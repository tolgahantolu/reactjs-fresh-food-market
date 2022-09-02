import classes from "./Banner.module.css";
import bannerImage from "./banner.png";
import logoImage from "./logo.png";

const Banner = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src={logoImage} alt="logo" className={classes.logo} />
        <div>
          <h1>Delicious food for your cravings!</h1>
          <p> We made fresh and healty meals with different recipes. </p>
          <button>
            View Menu <span> &rarr; </span>
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="banner-img-source: hellofresh.co.nz" />
    </header>
  );
};

export default Banner;
