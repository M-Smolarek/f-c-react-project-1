import styles from "./Coworkers.module.css";
const Coworkers = () => {
  return (
    <section id="aboutUs">
      <section className={`content ${styles.coworkersContent}`}>
        <h2 className={styles.coworkersHeader}>Nasi specjaliści</h2>
        <div className={styles.coworker}>
          <img
            className={styles.coworkerPic}
            src="/images/silhouette.jpg"
            alt="coworker"
          />
          <div className={styles.coworkerDescription}>
            <div className={styles.coworkerDescriptionName}>
              Imię Nazwisko [ dział ]
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, dicta inventore minima velit quibusdam laborum beatae
              quo sit ullam quod et! Doloremque nemo laboriosam quae dignissimos
              necessitatibus. Excepturi, sint facere!
            </p>
          </div>
        </div>
        <div className={styles.coworker}>
          <img
            className={styles.coworkerPic}
            src="/images/silhouette.jpg"
            alt="coworker"
          />
          <div className={styles.coworker2Description}>
            <div className={styles.coworkerDescriptionName}>
              Imię Nazwisko [ dział ]
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, dicta inventore minima velit quibusdam laborum beatae
              quo sit ullam quod et! Doloremque nemo laboriosam quae dignissimos
              necessitatibus. Excepturi, sint facere!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Coworkers;
