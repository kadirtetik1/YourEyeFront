import styles from './UserInfoBar.module.css';
import { FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { getTokenStatus } from '../../../utils/tokenUtils';

const UserInfoBar = () => {
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
    const decoded = token ? jwtDecode(token) : null;
    const status = getTokenStatus(token);
    setTokenStatus(status);

    if (!decoded) return;

    const isAdmin = decoded.isAdmin === true || decoded.isAdmin === 'True';
    const userId = decoded.userId;

    if (isAdmin) {
      const fetchAdminDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5059/api/AdminUser/${userId}`);
          const data = response.data;
          localStorage.setItem('companyName', 'Youreye');

          setUser({
            fullName: data.name,
            role: 'YourEye Teknik Birim',
            company: '',
            branches: [],
            isAdmin: true,
          });
        } catch (err) {
          console.error('Admin bilgileri alınamadı:', err);
        }
      };

      fetchAdminDetails();
    } else {
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

    const interval = setInterval(() => {
      setTokenStatus((prev) => {
        const total = prev.minutesLeft * 60 + prev.secondsLeft - 1;
        return {
          ...prev,
          minutesLeft: Math.floor(total / 60),
          secondsLeft: total % 60,
          isExpired: total <= 0
        };
      });
    }, 1000);

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
