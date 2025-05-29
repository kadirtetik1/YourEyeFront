import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import styles from './Topbar.module.css';
import { routeMap } from '../../../routes/routeMap';


import ConfirmLogoutModal from './ConfirmLogout';

const Topbar = ({ notificationCount = 0, isAdmin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [logoPath, setLogoPath] = useState('');
  const [frameShape, setFrameShape] = useState('square');
  const logoRef = useRef(null);

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Dinamik Sayfa Başlığı
  const path = location.pathname.replace(/^\/admin\//, '');
  const pageTitle = Object.keys(routeMap).find(key => routeMap[key] === path) || 'Anasayfa';

  // Firma Logosu Getirme
  useEffect(() => {
    const token = localStorage.getItem('yourEyeToken');
    const decoded = token ? jwtDecode(token) : null;

    if (!decoded) return;

    const userId = decoded.userId;



    const fetchCompanyLogo = async () => {
    try {
      if (isAdmin) {
        setLogoPath('/assets/logos/youreye_logo.png');
      } 
      else {
        const userResponse = await axios.get(`http://localhost:5059/api/Users/${userId}`);
        // const companyName = userResponse.data.companyName || '';
        const companyId = userResponse.data.companyId;

        const companyResponse = await axios.get(`http://localhost:5059/api/Companies/${companyId}`);
        const logoFromApi = companyResponse.data.logoPath;

          setLogoPath(logoFromApi);
        
      }
    } catch (err) {
      console.error('Firma logosu alınamadı:', err);
      setLogoPath('');
    }
  };

  fetchCompanyLogo();
}, [isAdmin]);


  // Zaman Güncelleme
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Logout Süreci
  const handleLogout = () => setShowLogoutConfirm(true);
  const confirmLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  const cancelLogout = () => setShowLogoutConfirm(false);

  // Logo Ölçüsüne Göre Şekil Belirleme
  const handleImageLoad = () => {
    const img = logoRef.current;
    if (!img) return;
    const { naturalWidth, naturalHeight } = img;
    setFrameShape(naturalWidth / naturalHeight > 1.3 ? 'rectangle' : 'square');
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.time}>
          {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
        </div>
      </div>

      <div className={styles.center}>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
      </div>

      <div className={styles.right}>
        <div className={styles.user}>
          {logoPath && (
            <div className={`${styles.firmaLogoWrapper} ${styles[frameShape]}`}>
              <img
                ref={logoRef}
                src={logoPath}
                alt="firmaLogo"
                className={styles.firmaLogo}
                style={{ objectFit: frameShape === 'rectangle' ? 'contain' : 'cover' }}
                onLoad={handleImageLoad}
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          )}
        </div>

        <div className={styles.notification}>
          <FaBell className={styles.icon} />
          {notificationCount > 0 && <span className={styles.badge}>{notificationCount}</span>}
        </div>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>

      {showLogoutConfirm && (
        <ConfirmLogoutModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
};

export default Topbar;
