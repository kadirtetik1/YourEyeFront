import React, { Component } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SubtitleCard from '../../../components/Base/SubtitleCard/SubtitleCard';
import styles from '../ComponentDash.module.css';

import { routeMap } from '../../../routes/routeMap';

export default function BranchOperationsHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const subItems = location.state?.subItems || [];

  return (


        <div className={styles.cardsContainer}>

            
      {subItems.map((subItem, idx) => (
        <SubtitleCard
          key={idx}
          title={subItem}
          onClick={() => navigate(`/admin/${routeMap[subItem] || ''}`)}
        />
      ))}

        </div>

  );
}
