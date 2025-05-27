import React from 'react';
import styles from './ForgotSlideUp.module.css';
import { ImCross } from 'react-icons/im';
import { motion } from 'framer-motion';

export default function ForgotSlideUp({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <motion.div
        className={styles.modal}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'tween', duration: 0.5, ease: 'backOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <ImCross className={styles.crossIcon} />
        </button>
        <div className={styles.content}>
          <h2>Şifre Yenileme</h2>
          <p>Lütfen kayıtlı e-posta adresinizi girin.</p>
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className={styles.emailInput}
          />
          <button className={styles.sendButton}>Gönder</button>
        </div>
      </motion.div>
    </div>
  );
}
