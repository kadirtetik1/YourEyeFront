import { useState } from 'react';
import styles from './Sidebar.module.css';
import { FaBars, FaChevronDown, FaChevronUp, FaHome, FaBuilding, FaUser, FaTools } from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiPresentationChart, PiSecurityCameraFill } from "react-icons/pi";

// İkon Eşleştirme Tablosu
const iconMap = {
  "Anasayfa": FaHome,
  "Firma İşlemleri": FaBuilding,
  "Kullanıcı İşlemleri": FaUser,
  "Modüller": FaComputer,
  "Analizler": PiPresentationChart,
  "Kamera Yönetimi": PiSecurityCameraFill,
  "Sistem Ayarları": FaTools
};

const Sidebar = ({ panelName, menuItems }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (title) => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setOpenDropdown(title), 300);
    } else {
      setOpenDropdown(openDropdown === title ? null : title);
    }
  };

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
          return (
            <div key={idx} className={styles.dropdown}>
              <div
                onClick={() => {
                  if (menu.subItems.length === 0) {
                    alert(menu.title);
                  } else {
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
                  {menu.subItems.map((subItem, subIdx) => (
                    <a href="#" key={subIdx} onClick={() => alert(subItem)}>
                      {subItem}
                    </a>
                  ))}
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
