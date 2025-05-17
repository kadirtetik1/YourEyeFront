import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SubtitleCard from '../../../components/Base/SubtitleCard/SubtitleCard';
import { routeMap } from '../../../routes/routeMap';
import { adminRoutes } from '../../../routes/adminRoutes'; 
import { iconMap } from '../../../components/Base/Sidebar/Sidebar';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal'; // Modalı dahil ettik
import styles from '../ComponentDash.module.css';
import { motion } from 'framer-motion';

export default function CameraManagementHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const subItems = location.state?.subItems || [];
  const menuTitle = location.state?.menuTitle || '';
  const MainIcon = iconMap[menuTitle] || null;

  const [selectedPath, setSelectedPath] = useState(null);

  const openModal = (subItem) => {
    const routePath = `/admin/${routeMap[subItem] || ''}`;
    setSelectedPath(routePath);
  };

  const closeModal = () => {
    setSelectedPath(null);
  };

  const ActiveRouteComponent = adminRoutes.find(r => `/admin/${r.path}` === selectedPath)?.element; //userpanelde user route oalrak değiştir

  return (
    <div className={styles.cardsContainer}>
      {subItems.map((subItem, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 125, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
        >
          <SubtitleCard
            title={subItem}
            icon={MainIcon}
            onClick={() => openModal(subItem)}
          />
        </motion.div>
      ))}

      <SlideUpModal isVisible={!!selectedPath} onClose={closeModal}>
        {ActiveRouteComponent || <p>Yükleniyor...</p>}
      </SlideUpModal>
    </div>
  );
}
