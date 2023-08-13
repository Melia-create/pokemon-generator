import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <span className={styles.cardContent}>
        <span className={styles.cardHead}>
          <span>
            <span className={styles.cardSubType}>Basic</span>
            <span className={styles.cardName}>Card Name</span>
          </span>
          <span>
            <span className={styles.cardHp}>
              <span>HP</span>
            </span>
            <span className={styles.cardType}>
              <span className="sr-only"></span>
              <span className={styles.cardTypeIcon}>Icon Here</span>
            </span>
          </span>
        </span>
        <span className={styles.cardImage}>Image</span>
        <span className={styles.cardAttributes}>Attributes</span>
        <span className={styles.cardPower}>
          <strong>Attack Name</strong> Attack Desc
        </span>
        <span className={styles.cardAttack}>
          <span>
            <strong>Pow Name</strong> Pow Desc
          </span>
          <span className={styles.cardAttackHp}>Attack HP</span>
        </span>
        <span className={styles.cardInteractions}>
          <span className={styles.cardWeakness}>
            <span className={styles.cardInteractionTitle}>Weakness</span>
            <span className={styles.cardWeaknessIcon}>
              <span className="sr-only"></span>
              Weakness Icon
            </span>
          </span>
          <span className={styles.cardResistance}>
            <span className={styles.cardInteractionTitle}>Resistance</span>
            <span className={styles.cardResistanceIcon}>
              <span className="sr-only"></span>
              Resistance Icon
            </span>
          </span>
          <span className={styles.cardRetreatCost}>
            <span className={styles.cardInteractionTitle}>Retreat Cost</span>
            <div></div>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Card;
