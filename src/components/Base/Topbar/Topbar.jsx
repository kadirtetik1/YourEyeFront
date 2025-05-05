import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './Topbar.module.css';
import userPhoto from '../../../assets/ai-robot-woman.png';
import arabicaLogo from '../../../assets/ArabicaCoffee_Logo.png';

const Topbar = ({ notificationCount = 3 }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        
        <div className={styles.time}>
          {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
        </div>
      </div>
      

      <div className={styles.right}>

      <div className={styles.user}>
        <img src={arabicaLogo} alt="firmaLogo" className={styles.firmaLogo} />
        </div>
        
        <div className={styles.notification}>
          <FaBell className={styles.icon} />
          {notificationCount > 0 && (
            <span className={styles.badge}>{notificationCount}</span>
          )}
        </div>

        <button className={styles.logoutBtn}>Çıkış Yap</button>
      </div>
    </div>
  );
};

export default Topbar;

