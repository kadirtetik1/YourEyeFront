import React from 'react';
import styles from './ForgotPassword.module.css';
import SlideUpModal from '../../components/Base/SlideUpModal/SlideUpModal';

export default function ForgotPassword({ isVisible, onClose }) {
  return (
    <SlideUpModal isVisible={isVisible} onClose={onClose}>
      <div className={styles.container}>
        <h2>Şifre Yenileme</h2>
        <p>Lütfen kayıtlı e-posta adresinizi girin. Size bir şifre sıfırlama bağlantısı gönderilecektir.</p>
        <input
          type="email"
          placeholder="E-posta adresiniz"
          className={styles.emailInput}
        />
        <button className={styles.sendButton}>Gönder</button>
      </div>
    </SlideUpModal>
  );
}
