import React from 'react';
import { motion } from 'framer-motion';
import styles from './SlideUpModal.module.css';
import { ImCross } from "react-icons/im";

export default function SlideUpModal({ isVisible, onClose, children }) {
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
          {children}
        </div>
      </motion.div>
    </div>
  );
}
