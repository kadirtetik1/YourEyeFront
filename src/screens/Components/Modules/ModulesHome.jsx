import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SubtitleCard from '../../../components/Base/SubtitleCard/SubtitleCard';
import styles from '../ComponentDash.module.css';
import { routeMap } from '../../../routes/routeMap';
import { iconMap } from '../../../components/Base/Sidebar/Sidebar';

import { motion } from 'framer-motion';


export default function ModulesHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const subItems = location.state?.subItems || [];
  const menuTitle = location.state?.menuTitle || '';
  const MainIcon = iconMap[menuTitle] || null;

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
              onClick={() => navigate(`/admin/${routeMap[subItem] || ''}`)}
            />
          </motion.div>
        ))}
      </div>

  );
}