import styles from './UserInfoBar.module.css';
import { FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { getTokenStatus } from '../../../utils/tokenUtils';
import { apiBaseUrl } from '../../../utils/api';

const UserInfoBar = () => {

  // const apiBaseUrl = 'http://localhost:5059/api';

  const [user, setUser] = useState({
    fullName: '',
    role: '',
    company: '',
    branches: [],
    isAdmin: false,
  });

  const [tokenStatus, setTokenStatus] = useState({
    minutesLeft: 0,
    secondsLeft: 0,
    isExpired: false,
    decoded: null,
  });

  const [showBranches, setShowBranches] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('yourEyeToken');
    if (!token) return;

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error('Token çözümlenemedi:', err);
      return;
    }

    const userId = decoded.userId;
    const isAdmin = decoded.isAdmin === true || decoded.isAdmin === 'True';

    // Süreyi hesapla
    const updateTokenStatus = () => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, decoded.exp - now);
      setTokenStatus({
        isExpired: remaining === 0,
        minutesLeft: Math.floor(remaining / 60),
        secondsLeft: remaining % 60,
        decoded
      });
    };

    updateTokenStatus();
    const interval = setInterval(updateTokenStatus, 1000);
    const fetchDetails = async () => {
      try {
        if (isAdmin) {
          const res = await axios.get(`${apiBaseUrl}/AdminUser/${userId}`);
          const data = res.data;
          localStorage.setItem('companyName', 'Youreye');
          setUser({
            fullName: data.name,
            role: 'YourEye Teknik Birim',
            company: '',
            branches: [],
            isAdmin: true,
          });
        } else {
          const res = await axios.get(`${apiBaseUrl}/Users/${userId}`);
          const data = res.data;
          localStorage.setItem('companyName', data.companyName || '');
          setUser({
            fullName: `${data.name} ${data.lastName}`,
            role: data.roleName || '',
            company: data.companyName || '',
            branches: data.branchNames || [],
            isAdmin: false,
          });
        }
      } catch (err) {
        console.error('Kullanıcı bilgileri alınamadı:', err);
      }
    };

    fetchDetails();
    return () => clearInterval(interval);
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
                {' '}| <span>Firma: {user.company}</span>
                {user.branches.length === 1 ? (
                  <> | <span>Şube: {user.branches[0]}</span></>
                ) : (
                  <div className={styles.branchListWrapper}>
                    <button
                      className={styles.branchToggle}
                      onClick={() => setShowBranches(!showBranches)}
                    >
                      | Şubeler: {user.branches.length} {' '}
                      {showBranches ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {showBranches && (
                      <ul className={styles.branchDropdown}>
                        {user.branches.map((branch, index) => (
                          <li key={index} className={styles.multiItem}>{branch}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.tokenStatus}>
          {tokenStatus.isExpired
            ? "Oturum süresi doldu"
            : `Token geçerlilik süresi: ${tokenStatus.minutesLeft}dk ${tokenStatus.secondsLeft}s`}
        </div>
      </div>

      <button className={styles.userActions}>Kullanıcı Bilgileri</button>
    </div>
  );
};

export default UserInfoBar;
