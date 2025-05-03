import React, { Component } from 'react'
import styles from './TopNavbarAdmin.module.css';

import youreyelogo from '../../../assets/youreye-logo.png';

export default class TopNavbarAdmin extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>

         <div className={styles.logoContainer}>
          <img src={youreyelogo} alt="your-eye-logo" className={styles.youreyeLogo} />
          </div>

        <h2>NavbarAdmin</h2>
        <h2>NavbarAdmin</h2>
        <h2>NavbarAdmin</h2>
        </div>
    )
  }
}
