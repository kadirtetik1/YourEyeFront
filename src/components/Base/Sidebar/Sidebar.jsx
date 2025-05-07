import { useState } from 'react';
import styles from './Sidebar.module.css';
import {
  FaBars, FaHome, FaChartPie, FaUser, FaCogs,
  FaCamera, FaBuilding, FaTools, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const Sidebar = ({ panelName }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [firmaOpen, setFirmaOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.top}>
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <FaBars />
        </button>

        <div className={styles.logoContainer}>
          <div className={styles.logo}>YourEye</div>
          {isOpen && <div className={styles.subtext}>{panelName}</div>}
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#">
          <FaHome className={styles.icon} />
          <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Anasayfa</span>
        </a>

        {/* Firma Dropdown */}
        <div className={styles.dropdown}>
          <div
            onClick={() => {
              if (!isOpen) {
                setIsOpen(true);
                setTimeout(() => setFirmaOpen(true), 300);
              } else {
                setFirmaOpen(!firmaOpen);
              }
            }}
            className={styles.dropdownToggle}
          >
            <FaBuilding className={styles.icon} />
            <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Firma İşlemleri</span>
            {isOpen && (firmaOpen ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />)}
          </div>

          {firmaOpen && isOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#">Bağlı Şubeleri Listele</a>
              <a href="#">Yeni Şube Ekle</a>
              <a href="#">Şube Bilgilerini Güncelle</a>
              
            </div>
          )}
        </div>

        {/* Kullanıcı Dropdown */}
        <div className={styles.dropdown}>
          <div
            onClick={() => {
              if (!isOpen) {
                setIsOpen(true);
                setTimeout(() => setUserOpen(true), 300);
              } else {
                setUserOpen(!userOpen);
              }
            }}
            className={styles.dropdownToggle}
          >
            <FaUser className={styles.icon} />
            <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Kullanıcı İşlemleri</span>
            {isOpen && (userOpen ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />)}
          </div>

          {userOpen && isOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#">Firmaya Bağlı Kullanıcıları Getir</a>
              <a href="#">Şubeye Bağlı Kullanıcıları Getir</a>
              <a href="#">Roller Bağlı Yetkileri Getir</a>
              <a href="#">Yeni Kullanıcı Ekle</a>
              <a href="#">Yeni Rol ve Yetkilendirme Oluştur</a>
              <a href="#">Kullanıcıya Rol Ata</a>
              <a href="#">Kullanıcıya Şube Ata</a>
              <a href="#">Kullanıcı Bilgilerini Düzenle</a>
              
              
            </div>
          )}
        </div>

        <a href="#">
          <FaCogs className={styles.icon} />
          <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Modüller</span>
        </a>

        <a href="#">
          <FaChartPie className={styles.icon} />
          <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Analizler</span>
        </a>

        <a href="#">
          <FaCamera className={styles.icon} />
          <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Kameralar</span>
        </a>

        <a href="#">
          <FaTools className={styles.icon} />
          <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>Ayarlar</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
