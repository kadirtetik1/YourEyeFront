import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SubtitleCard from '../../../components/Base/SubtitleCard/SubtitleCard';
import styles from '../ComponentDash.module.css';
import { routeMap } from '../../../routes/routeMap';



import { iconMap } from '../../../components/Base/Sidebar/Sidebar';

export default function AdminOpsHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const subItems = location.state?.subItems || [];
  const menuTitle = location.state?.menuTitle || '';

  const MainIcon = iconMap[menuTitle] || null;

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {subItems.map((subItem, idx) => (
          <SubtitleCard
            key={idx}
            title={subItem}
            icon={MainIcon}  // icon prop olarak gönderildi
            onClick={() => navigate(`/admin/${routeMap[subItem] || ''}`)}
          />
        ))}
      </div>
    </div>
  );
}