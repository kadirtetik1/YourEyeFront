import React from 'react';
import { motion } from 'framer-motion';
import styles from './ConfirmModal.module.css';

export default function ConfirmModal({
  isVisible,
  onClose,
  title = "Onaylıyor musunuz?",
  subtitle = "Kullanıcı X siliniyor..",
  onConfirm = () => {},
  confirmLabel = "Onayla",
  cancelLabel = "Vazgeç"
}) {
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
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <div className={styles.buttonGroup}>

        <button className={styles.confirmButton} onClick={onConfirm}>
            {confirmLabel}
          </button>
          
          <button className={styles.cancelButton} onClick={onClose}>
            {cancelLabel}
          </button>
          
        </div>
      </motion.div>
    </div>
  );
}
