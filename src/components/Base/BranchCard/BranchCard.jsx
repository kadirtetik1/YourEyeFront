import React, { useEffect } from 'react';
import { AiOutlineApartment } from 'react-icons/ai';
import styles from './BranchCard.module.css';

export default function BranchCard({ branch, visibleKeys = [], labelMap = {}, logoPath = null }) {
  useEffect(() => {
    console.log('BranchCard - Gelen logoPath:', logoPath);
  }, [logoPath]);

  const isValidImagePath = logoPath && /\.(png|jpg|jpeg|webp)$/i.test(logoPath);

  const renderLogo = () => {
    if (isValidImagePath) {
      return <img src={logoPath} alt="Şube Logosu" className={styles.logo} />;
    }
    return <AiOutlineApartment className={styles.iconFallback} />;
  };

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        {renderLogo()}
      </div>
      <div className={styles.detailsContainer}>
        {visibleKeys.map((key) => (
          <div key={key} className={styles.detailRow}>
            <span className={styles.label}>{labelMap?.[key] || key}:</span>{' '}
            <span className={styles.value}>{branch[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
