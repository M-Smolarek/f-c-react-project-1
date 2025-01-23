import styles from "./BottomBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const BottomBanner = () => {
  return (
    <footer className={styles.bottomBanner}>
      <section className={`content ${styles.bottomBannerContent}`}>
        <div>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</div>
        <div className={styles.bottomNavigation}>
          <FontAwesomeIcon icon={faFacebook} color="white" />
          <FontAwesomeIcon icon={faTwitter} color="white" />
        </div>
      </section>
    </footer>
  );
};

export default BottomBanner;
