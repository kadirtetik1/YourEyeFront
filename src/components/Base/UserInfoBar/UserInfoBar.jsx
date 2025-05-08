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

    // Admin ise: sadece isim-soyisim göster, API'ye gerek yok
    if (isAdmin) {
      const fullName = `${decoded.name || ''} ${decoded.lastName || ''}`.trim();
      setUser({
        fullName,
        role: 'YourEye Teknik Birim',
        company: '',
        branches: [],
        isAdmin: true,
      });
      return;
    }

    // Normal kullanıcı ise API'den detay çek
    const userId = decoded.userId;

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5059/api/Users/${userId}`);
        const data = response.data;

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
                {' '}| <span>Firma: {user.company}</span> | 
                <span>Şube(ler): {user.branches.join(', ')}</span>
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
