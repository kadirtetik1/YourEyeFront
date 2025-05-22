import React, { useEffect, useState } from 'react';
import styles from './SelectableRowList.module.css';

import { ThreeDots  } from 'react-loader-spinner';


export default function SelectableRowList({
  apiBaseUrl,
  data: externalData = null,
  visibleKeys = [],
  labelMap = {},
  selectedIds = [],
  onSelectionChange = () => {},
  actionButtonLabel = 'Kaydet',
  onSubmit = () => {}
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (externalData) {
      setData(externalData);
      setLoading(false);
    } else if (apiBaseUrl) {
      fetch(apiBaseUrl)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          console.error('Veri çekme hatası:', err);
          setLoading(false);
        });
    }
  }, [apiBaseUrl, externalData]);

  const handleCheckboxChange = (itemId) => {
    const updated = selectedIds.includes(itemId)
      ? selectedIds.filter(id => id !== itemId)
      : [...selectedIds, itemId];

    onSelectionChange(updated);
  };

  return (
    <div className={styles.container}>
    {loading ? (
      <div className={styles.loadingSpinner}>
        <ThreeDots height={50} width={60} color="#ff7f27" />
      </div>
    ) : data.length > 0 ? (
      <>
        {data.map((item, index) => (
          <div key={index} className={`${styles.row} ${selectedIds.includes(item.id) ? styles.selected : ''}`}>
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
                ))}
            </div>

            <div className={styles.actionContainer}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedIds.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </div>
          </div>
        ))}

        <div className={styles.footer}>
          <button className={styles.actionButton} onClick={onSubmit}>
            {actionButtonLabel}
          </button>
        </div>
      </>
    ) : (
      <div className={styles.empty}>Liste boş.</div>
    )}
  </div>
  );
}
