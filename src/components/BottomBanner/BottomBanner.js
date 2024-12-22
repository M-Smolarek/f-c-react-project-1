import styles from "./BottomBanner.module.css";
import FacebookLogo from "../../assets/photos/facebook.jpg";
import InstagramLogo from "../../assets/photos/Instagram.jpg";

const BottomBanner = () => {
  return (
    <footer className={styles.bottomBanner}>
      <section className={`content ${styles.bottomBannerContent}`}>
        <div>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</div>
        <div className={styles.bottomNavigation}>
          <div className={styles.instagramLogo}>
            <img src={FacebookLogo} alt="" />
          </div>
          <div className={styles.facebookLogo}>
            <img src={InstagramLogo} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BottomBanner;
