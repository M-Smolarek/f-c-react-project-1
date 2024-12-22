import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services} id="oferta">
      <section className={`content ${styles.servicesContent}`}>
        <h2 className={styles.servicesHeader}>Czym zajmuje się nasza firma?</h2>
        <div className={styles.servicesBoxes}>
          <div className={styles.servicesBox}>
            <p>Usługa 1</p>
            <p>(nowość)</p>
            <div className={styles.serviceNew}></div>
          </div>
          <div className={styles.servicesBox}>Usługa 2</div>
          <div className={styles.servicesBox}>Usługa 3</div>
          <div className={styles.servicesBox}>Usługa 4</div>
          <div className={styles.servicesBox}>Usługa 5</div>
          <div className={styles.servicesBox}>Usługa 6</div>
        </div>
      </section>
    </section>
  );
};

export default Services;
