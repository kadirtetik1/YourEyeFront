import React, { useEffect, useState } from 'react';
import styles from './RowDataView.module.css';

export default function RowDataView({
  apiBaseUrl,
  data: externalData = null,
  visibleKeys = [],
  labelMap = {},
  onActionButtonClick = null,
  actionButtonLabel = "İşlem",
  showActionButton = false
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (externalData) {
      setData(externalData);  // Öncelikli olarak dışarıdan gelen veri kullanılacak
    } else if (apiBaseUrl) {
      fetch(apiBaseUrl)
        .then(res => res.json())
        .then(setData)
        .catch(err => console.error('Veri çekme hatası:', err));
    }
  }, [apiBaseUrl, externalData]);

  return (
    <div className={styles.container}>
{data.length > 0 ? (
  data.map((item, index) => (
    <div key={index} className={styles.row}>
      <div className={styles.rowContent}>
        {Object.entries(item)
          .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
          .map(([key, value]) => (
            <span key={key} className={styles.cell}>
              <span className={styles.cellTitle}>{labelMap?.[key] || key}:</span>
              <span className={styles.cellValue}>
                {Array.isArray(value) ? value.join(', ') : value}
              </span>
            </span>
          ))
        }
      </div>

      {showActionButton && onActionButtonClick && (
        <div className={styles.actionContainer}>
          <button
            className={styles.actionButton}
            onClick={() => onActionButtonClick(item)}
          >
            {actionButtonLabel}
          </button>
        </div>
      )}
    </div>
  ))
) : (
  <div className={styles.empty}>Liste boş.</div>
)}
    </div>
  );
}
