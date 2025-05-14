import styles from './Card.module.css';

export default function Card({ title, value }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}