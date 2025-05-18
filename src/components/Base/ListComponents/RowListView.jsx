import React from 'react';
import styles from './RowListView.module.css';

export default function RowListView({ data, visibleKeys = [], onDetail, labelMap }) {
  if (!data || data.length === 0) {
    return <div className={styles.empty}>Hiç veri bulunamadı.</div>;
  }

  return (
    <div className={styles.listContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.row}>
          {Object.entries(item)
            .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
            .map(([key, value]) => (
              <span key={key} className={styles.cell}>
                <strong>{labelMap?.[key] || key}:</strong> {value}
              </span>
            ))}
          <button className={styles.detailButton} onClick={() => onDetail(item)}>Detay</button>
        </div>
      ))}
    </div>
  );
}
