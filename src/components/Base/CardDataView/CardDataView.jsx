import React, { useEffect, useState } from 'react';
import styles from './CardDataView.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function CardDataView({ title, apiEndpoint = '', renderItem }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!apiEndpoint) return;

    fetch(apiEndpoint) 
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Veri çekilemedi:', err);
        setItems([]);
        setLoading(false);
      });
  }, [apiEndpoint]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {loading ? (
        <div className={styles.loadingSpinner}>
          <ThreeDots height={50} width={60} color="#ff7f27" />
        </div>
      ) : items.length > 0 ? (
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Liste boş.</p>
      )}
    </div>
  );
}
