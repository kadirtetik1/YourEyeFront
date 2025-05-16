import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { FaBars, FaChevronDown, FaChevronUp, FaHome, FaBuilding, FaUsers, FaTools, FaUserShield } from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiPresentationChart, PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';

import { routeMap } from '../../../routes/routeMap';

// İkon Eşleştirme Tablosu
export const iconMap = {
  "Anasayfa": FaHome,
  "Admin İşlemleri": FaUserShield,
  "Rol Ve Yetki İşlemleri": FaChalkboardUser,
  "Firma İşlemleri": FaBuilding,
  "Şube İşlemleri": AiOutlineApartment,
  "Kullanıcı İşlemleri": FaUsers,
  "Modüller": FaComputer,
  "Analizler": PiPresentationChart,
  "Kamera Yönetimi": PiSecurityCameraFill,
  "Log Raporları": TbReportSearch,
  "Sistem Ayarları": FaTools
};


const Sidebar = ({ panelName, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false); //default kapalı
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (title) => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setOpenDropdown(title), 300);
    } else {
      setOpenDropdown(openDropdown === title ? null : title);
    }
  };

  useEffect(() => { //
    const handleResize = () => {
      if (window.innerWidth < 768) {  // 768px altı için sidebar açıksa kapat
        setIsOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    // İlk yüklemede kontrol et
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {menuItems.map((menu, idx) => {
          const IconComponent = iconMap[menu.title] || FaHome;
          const path = `/admin/${routeMap[menu.title] || ''}`;
          const isActive = location.pathname.startsWith(path);

          return (
            <div key={idx} className={`${styles.dropdown} ${isActive ? styles.activeMenu : ''}`}>
              <div

                // onClick={() => {
                //   navigate(path);  // Önce ana başlık path'ine yönlendir
                //   if (menu.subItems.length > 0) {
                //     handleDropdownToggle(menu.title);  // Sonra dropdown'u aç
                //   }
                // }}

                onClick={() => {
                  if (menu.subItems.length === 0) {
                    navigate(path);
                  } else {
                    // State olarak subItems bilgisini gönder
                    navigate(path, { state: { subItems: menu.subItems, menuTitle: menu.title } });
                    handleDropdownToggle(menu.title);
                  }
                }}


                
                className={styles.dropdownToggle}
              >
                <IconComponent className={styles.icon} />
                <span className={`${styles.linkText} ${isOpen ? styles.show : styles.hide}`}>
                  {menu.title}
                </span>
                
                {isOpen && menu.subItems.length > 0 && (
                  openDropdown === menu.title
                    ? <FaChevronUp className={styles.chevron} />
                    : <FaChevronDown className={styles.chevron} />
                )}
              </div>

              {menu.subItems.length > 0 && openDropdown === menu.title && isOpen && (
                <div className={styles.dropdownMenu}>
                  {menu.subItems.map((subItem, subIdx) => {
                    const subPath = `/admin/${routeMap[subItem] || ''}`;
                    const isSubActive = location.pathname === subPath;

                    return (
                      <a
                        key={subIdx}
                        onClick={() => navigate(subPath)}
                        className={isSubActive ? styles.activeSubMenu : ''}
                      >
                        {subItem}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
