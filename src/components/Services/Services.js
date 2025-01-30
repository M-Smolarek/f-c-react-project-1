import { services } from "../../data/data";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services} id="offer">
      <section className={`content ${styles.servicesContent}`}>
        <h2 className={styles.servicesHeader}>Czym zajmuje się nasza firma?</h2>
        <div className={styles.servicesBoxes}>
          {services.map((item) => (
            <div className={styles.servicesBox} key={item.title}>
              <p>{item.title}</p>
              {item.isNew ? <p>(nowość)</p> : null}
              {item.isNew ? <div className={styles.serviceNew}></div> : null}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
