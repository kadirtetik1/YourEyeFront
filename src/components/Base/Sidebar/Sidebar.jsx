import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { FaBars, FaChevronDown, FaChevronUp, FaHome, FaBuilding, FaUsers, FaTools, FaUserShield } from 'react-icons/fa';
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { PiPresentationChart, PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";
import { GrAndroid } from "react-icons/gr";


import { useNavigate, useLocation } from 'react-router-dom';
import { routeMap } from '../../../routes/routeMap';

export const iconMap = {
  "Anasayfa": FaHome,
  "Admin İşlemleri": FaUserShield,
  "Rol Ve Yetki İşlemleri": FaChalkboardUser,
  "Firma İşlemleri": FaBuilding,
  "Şube İşlemleri": AiOutlineApartment,
  "Kullanıcı İşlemleri": FaUsers,
  "Modül İşlemleri": GrAndroid,
  "Analizler Ve Raporlar": PiPresentationChart,
  "Kamera Yönetimi": PiSecurityCameraFill,
  "Log Raporları": TbReportSearch,
  "Sistem Ayarları": FaTools,
  "Üretilen Alarmlar": HiMiniBellAlert,
  "Sunucu İşlemleri": FaComputer,
};

  const Sidebar = ({ panelName, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.top}>
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <FaBars />
        </button>
        
        <div className={styles.TopContainer}>
          <div className={styles.logo}>YourEye</div>
          {isOpen && <div className={styles.subtext}>{panelName}</div>}
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((menu, idx) => {
          const IconComponent = iconMap[menu.title] || FaHome;
          const path = `/admin/${routeMap[menu.title] || ''}`;
          const isActive = location.pathname.startsWith(path);

          return (
            <div key={idx} className={`${styles.dropdown} ${isActive ? styles.activeMenu : ''}`}>
              <div
                onClick={() => {
                  navigate(path, { state: { subItems: menu.subItems, menuTitle: menu.title } });
                }}
                className={styles.dropdownToggle}
              >
                <IconComponent className={styles.icon} />
                <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>
                  {menu.title}
                </span>

              </div>

            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
