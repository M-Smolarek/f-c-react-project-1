import styles from "./TopBanner.module.css";

const TopBanner = () => {
  return (
    <header className={styles.topBanner}>
      <section className={`content ${styles.topBannerContent}`}>
        <div>moja firma</div>
        <nav className={styles.navigation}>
          <a href="#aboutUs" className={styles.navigationItem}>
            o nas{" "}
          </a>
          <a href="#offer" className={styles.navigationItem}>
            oferta
          </a>
          <div
            className={`${styles.navigationItem} ${styles.navigationItemDisabled}`}
          >
            kontakt
          </div>
        </nav>
      </section>
    </header>
  );
};

export default TopBanner;
