import styles from "./MainSection.module.css";
const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainSectionShadow}>
        <section className={`content ${styles.mainSectionContent}`}>
          <h1 className={styles.mainSectionProducts}>
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <div>Nie wierz nam na słowo - sprawdź</div>
          <div>
            <a href="#offer" className={styles.mainSectionOffer}>
              oferta
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MainSection;
