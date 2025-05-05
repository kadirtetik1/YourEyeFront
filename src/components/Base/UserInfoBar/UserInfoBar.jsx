import styles from './UserInfoBar.module.css';
import userPhoto from '../../../assets/ai-robot-woman.png';
import {FaUser } from 'react-icons/fa';

const UserInfoBar = ({ user }) => {
  return (
    <div className={styles.userBar}>
      <div className={styles.left}>

      {/* <img src={userPhoto} alt="User" className={styles.avatar} /> */}
      <FaUser className={styles.icon} />
        <div className={styles.info}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.details}>
            <span>Rol: {user.role}</span> | 
            <span> Firma: {user.company}</span> | 
            <span> Şube: {user.branch}</span>
          </div>
        </div>
      </div>

      <button className={styles.userActions}>Kullanıcı Bilgileri</button>
    </div>
  );
};

export default UserInfoBar;
