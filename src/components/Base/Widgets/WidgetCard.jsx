import { useRef } from 'react';
import styles from './WidgetCard.module.css';

const WidgetCard = ({ title, value, subtitle, icon }) => {
  const cardRef = useRef(null);

  const handleMouseMove = () => {
    cardRef.current.style.transform = 'scale(1.05)';
  };

  const resetTransform = () => {
    cardRef.current.style.transform = 'scale(1)';
  };

  // const handleMouseMove = (e) => {
  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();
  
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  
  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;
  
  //   const rotateX = ((y - centerY) / centerY) * -12;
  //   const rotateY = ((x - centerX) / centerX) * 12;
  
  //   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  // };

  // const resetTransform = () => { // tekrar eski hale gelmesi için
  //   cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  // };

  return (
    <div
      className={styles.card}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div className={styles.header}>
        <h3>{title}</h3>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      <div className={styles.value}>{value}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default WidgetCard;
