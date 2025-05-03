import React, { Component } from 'react'
import TopNavbarAdmin from '../../components/Admin/Navbar/TopNavbarAdmin'
import styles from './AdminDash.module.css';
import WelcomeComponent from '../../components/Admin/Welcome/WelcomeComponent';
import LeftNavbarAdmin from '../../components/Admin/Navbar/LeftNavbarAdmin';

export default class AdminDashBoard extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
         <TopNavbarAdmin/>
         <div className={styles.contentAndLeftNavbarContainer}>
         <LeftNavbarAdmin/>

         <div className={styles.contentContainer}>
          123
          
         </div>

         </div>
         
         {/* <WelcomeComponent/> */}
        
      </div>
    
    )
  }
}
