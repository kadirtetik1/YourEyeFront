import styles from './ConfirmLogout.module.css';

export default function ConfirmLogout({ onConfirm, onCancel }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(styles.backdrop)) {
      onCancel();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <h2>Çıkış Yapmak Üzeresiniz</h2>
        <p>Emin misiniz ?</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm} className={styles.confirm}>Çıkış Yap</button>
          <button onClick={onCancel} className={styles.cancel}>Vazgeç</button>
        </div>
      </div>
    </div>
  );
}
