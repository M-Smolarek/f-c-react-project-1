import styles from "./MainSection.module.css";
// import MainSectionBackgroundPhoto from "../../assets/photos/fog-over-woods.jpg";
const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      {/* <img
        src={MainSectionBackgroundPhoto}
        background-repeat="no-repeat"
        background-size="cover"
        alt=""
      /> */}
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
