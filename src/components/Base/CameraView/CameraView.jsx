import React from 'react';
import styles from './CameraView.module.css';

const CameraView = ({ cameraName, streamUrl, isOffline }) => {
  return (
    <div className={styles.cameraContainer}>
      <div className={styles.header}>
        <h3>{cameraName}</h3>
        <span className={`${styles.status} ${isOffline ? styles.red : styles.green}`}>
          {isOffline ? 'Offline' : 'Online'}
        </span>
      </div>
      {isOffline ? (
        <div className={styles.offlineNotice}>
          Kamera şu anda çevrimdışı.
        </div>
      ) : (
        <img
          src={streamUrl}
          alt={`Live stream for ${cameraName}`}
          className={styles.videoFeed}
          onError={(e) => e.currentTarget.classList.add(styles.error)}
        />
      )}
    </div>
  );
};

export default CameraView;
