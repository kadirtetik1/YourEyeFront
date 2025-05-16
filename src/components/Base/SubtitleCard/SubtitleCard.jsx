import React from 'react';
import styles from './SubtitleCard.module.css';

export default function SubtitleCard({ title, icon: IconComponent, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
  <div className={styles.iconContainer}>

  {IconComponent && <IconComponent className={styles.icon} />}
  </div>
  <div className={styles.title}>{title}</div>
  
</div>
  );
}
