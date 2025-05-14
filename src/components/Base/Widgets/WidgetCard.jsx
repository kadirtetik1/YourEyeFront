import styles from './WidgetCard.module.css';

const WidgetCard = ({ 
  title, 
  value, 
  subtitle1, 
  subtitle1Value, 
  subtitle2, 
  subtitle2Value, 
  lastUpdated,  // <-- yeni alan
  icon 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleValueRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.value}>{value}</span>
        </div>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>

      <div className={styles.subtitleRow}>
        <span className={styles.subtitle1}>{subtitle1}</span>
        {subtitle1Value && <span className={styles.subvalue}>{subtitle1Value}</span>}
      </div>

      <div className={styles.subtitleRow}>
        <span className={styles.subtitle2}>{subtitle2}</span>
        {subtitle2Value && <span className={styles.subvalue}>{subtitle2Value}</span>}
      </div>

      {/* Son Güncelleme */}
      {lastUpdated && (
        <div className={styles.lastUpdated}>
          Son Güncelleme: {lastUpdated}
        </div>
      )}
    </div>
  );
};

export default WidgetCard;
