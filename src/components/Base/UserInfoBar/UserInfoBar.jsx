import styles from './UserInfoBar.module.css';
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const UserInfoBar = () => {
  const [user, setUser] = useState({
    fullName: '',
    role: '',
    company: '',
    branches: [],
    isAdmin: false,
  });

  useEffect(() => {
  const token = localStorage.getItem('yourEyeToken');
  const decoded = token ? jwtDecode(token) : null;

  if (!decoded) return;

  const isAdmin = decoded.isAdmin === true || decoded.isAdmin === 'True';
  const userId = decoded.userId;

  if (isAdmin) { // admin için
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5059/api/AdminUser/${userId}`);
        const data = response.data;
        localStorage.setItem('companyName', "Youreye");


        setUser({
          fullName: data.name,  // Admin DTO'da lastName yoksa sadece name kullanılabilir
          role: "YourEye Teknik Birim",
          company: '',
          branches: '',
          isAdmin: true,
        });
      } catch (err) {
        console.error('Admin bilgileri alınamadı:', err);
      }
    };

    fetchAdminDetails();
  } 
   else { // normal kullanıcılar için
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5059/api/Users/${userId}`);
        const data = response.data;
        localStorage.setItem('companyName', data.companyName || '');


        setUser({
          fullName: `${data.name} ${data.lastName}`,
          role: data.roleName || '',
          company: data.companyName || '',
          branches: data.branchNames || [],
          isAdmin: false,
        });
      } catch (err) {
        console.error('Kullanıcı bilgileri alınamadı:', err);
      }
    };

    fetchUserDetails();
  }
}, []);

  return (
    <div className={styles.userBar}>
      <div className={styles.left}>
        <FaUser className={styles.icon} />
        <div className={styles.info}>
          <div className={styles.name}>{user.fullName}</div>

          <div className={styles.details}>
            <span>Rol: {user.role}</span>
            {!user.isAdmin && (
              <>
                {' '}| <span>Firma: {user.company}</span>| 
                <span> Şube(ler): {user.branches.join(', ')}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <button className={styles.userActions}>Kullanıcı Bilgileri</button>
    </div>
  );
};

export default UserInfoBar;
