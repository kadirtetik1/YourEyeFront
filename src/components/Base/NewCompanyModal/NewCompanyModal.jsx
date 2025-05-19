import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './NewCompanyModal.module.css';

export default function NewCompanyModal({ isVisible, logoPath, companyName }) {
  const [animateState, setAnimateState] = useState('enter');

  useEffect(() => {
    if (isVisible) {
      setAnimateState('enter');
      const timer = setTimeout(() => {
        setAnimateState('exit');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible && animateState !== 'exit') return null;

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modalContent}
        initial={{ y: '100%', opacity: 0 }}
        animate={animateState === 'enter' ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <div className={styles.logoContainer}>
          <img src={logoPath} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.textSection}>
          <h2 className={styles.companyName}>{companyName}</h2>
          <p className={styles.message}>Yeni firma başarıyla eklendi.</p>
        </div>
      </motion.div>
    </div>
  );
}
