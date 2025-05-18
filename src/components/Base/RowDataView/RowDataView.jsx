import React, { useEffect, useState } from 'react';
import styles from './RowDataView.module.css';

export default function RowDataView({
  apiBaseUrl,
  visibleKeys = [],
  labelMap = {},
  onActionButtonClick = null,
  actionButtonLabel = "İşlem",
  showActionButton = false
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!apiBaseUrl) return;
    fetch(apiBaseUrl)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Veri çekme hatası:', err));
  }, [apiBaseUrl]);

  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className={styles.row}>
            {Object.entries(item)
              .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
              .map(([key, value]) => (
                <span key={key} className={styles.cell}>
                  <span className={styles.cellTitle}>{labelMap?.[key] || key}:</span>
                  <span className={styles.cellValue}>{value}</span>
                </span>
              ))
            }
            {showActionButton && onActionButtonClick && (
              <button
                className={styles.actionButton}
                onClick={() => onActionButtonClick(item)}
              >
                {actionButtonLabel}
              </button>
            )}
          </div>
        ))
      ) : (
        <div className={styles.empty}>Liste boş.</div>
      )}
    </div>
  );
}
