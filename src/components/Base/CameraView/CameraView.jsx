import React, { useState } from 'react';
import styles from './CameraView.module.css';
import SlideUpModal from '../SlideUpModal/SlideUpModal';

const CameraView = ({ cameraName, snapshotUrl, streamUrl, isOffline }) => {
  const [showModal, setShowModal] = useState(false);
  const [streamStarted, setStreamStarted] = useState(false);

  const handleClick = () => {
    if (!isOffline) {
      setStreamStarted(true); // sadece tıklanınca stream başlasın
      setShowModal(true);
    }
  };

  console.log('snapshotUrl:', snapshotUrl)

  return (
    <>
      <div
        className={`${styles.cameraContainer} ${!isOffline ? styles.clickable : ''}`}
        onClick={handleClick}
      >
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
          src={snapshotUrl}
          alt={`Önizleme - ${cameraName}`}
          className={styles.videoFeed}
          onError={(e) => e.currentTarget.classList.add(styles.error)}
          />
        )}
      </div>

      <SlideUpModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 style={{ color: '#fff', marginBottom: '1rem' }}>{cameraName}</h3>
        {streamStarted ? (
          <img
            src={streamUrl}
            alt={`Canlı Yayın - ${cameraName}`}
            style={{
              width: '90%',
              maxHeight: '60vh',
              objectFit: 'contain',
              borderRadius: '12px',
              backgroundColor: '#000',
              border: '1px solid #333'
            }}
            
          />
        ) : (
          <p style={{ color: '#ccc' }}>Canlı yayın yükleniyor...</p>
        )}
      </SlideUpModal>
    </>
  );
};

export default CameraView;
