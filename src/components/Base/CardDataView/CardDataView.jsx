import React from 'react';
import styles from './CardDataView.module.css';

export default function CardDataView({ title, items = [], renderItem }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className={styles.item}>
              {renderItem(item)}
            </div>
          ))
        ) : (
          <p className={styles.empty}>Liste boş.</p>
        )}
      </div>
    </div>
  );
}
