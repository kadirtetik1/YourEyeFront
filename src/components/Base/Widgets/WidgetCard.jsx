import styles from './WidgetCard.module.css';

const WidgetCard = ({ 
  title, 
  value, 
  subtitle1, 
  subtitle1Value, 
  subtitle2, 
  subtitle2Value, 
  icon 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      
      <div className={styles.value}>{value}</div>

      <div className={styles.subtitleRow}>
        <span className={styles.subtitle}>{subtitle1}</span>
        {subtitle1Value && <span className={styles.subvalue}>{subtitle1Value}</span>}
      </div>

      <div className={styles.subtitleRow}>
        <span className={styles.subtitle}>{subtitle2}</span>
        {subtitle2Value && <span className={styles.subvalue}>{subtitle2Value}</span>}
      </div>
    </div>
  );
};

export default WidgetCard;
