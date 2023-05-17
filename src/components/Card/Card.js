import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <span className={styles.cardContent}>
        <span className={styles.cardHead}>
          <span>
            <span className={styles.cardSubType}>Basic</span>
            <span className={styles.cardName}></span>
          </span>
          <span>
            <span className={styles.cardHp}>
              <span>HP</span>
            </span>
            <span>
              <span className="sr-only"></span>
              <span></span>
            </span>
          </span>
        </span>
        <span className={styles.cardImage}></span>
        <span className={styles.cardAttributes}></span>
        <span className={styles.cardPower}>
          <strong></strong>
        </span>
        <span className={styles.cardAttack}>
          <span>
            <strong></strong>
          </span>
          <span className={styles.cardAttackHp}></span>
        </span>
        <span className={styles.cardInteractions}>
          <span className={styles.cardWeakness}>
            <span className={styles.cardInteractionTitle}>Weakness</span>
            <span className={styles.cardWeaknessIcon}>
              <span className="sr-only"></span>
            </span>
          </span>
          <span className={styles.cardResistance}>
            <span className={styles.cardInteractionTitle}>Resistance</span>
            <span className={styles.cardResistanceIcon}>
              <span className="sr-only"></span>
            </span>
          </span>
          <span className={styles.cardRetreatCost}>
            <span className={styles.cardInteractionTitle}>Retreat Cost</span>
            <span className="sr-only"></span>
            <div></div>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Card;
