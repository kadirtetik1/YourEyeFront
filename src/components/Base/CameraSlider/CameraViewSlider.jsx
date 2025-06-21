import { useRef, useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import CameraView from "../CameraView/CameraView";
import styles from "./CameraViewSlider.module.css";

export default function CameraViewSlider({ title, cameras }) {
  const sliderRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!sliderRef.current) return;
      const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.clientWidth;
      setShowNavButtons(isOverflowing);

      sliderRef.current.style.justifyContent = isOverflowing ? "flex-start" : "space-between";
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [cameras]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Mouse Drag Scroll
  let isDown = false;
  let startX;
  let scrollLeftPos;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add(styles.active);
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftPos = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove(styles.active);
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove(styles.active);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>{title}</h2>
      <div className={styles.wrapper}>
        {showNavButtons && (
          <button onClick={scrollLeft} className={`${styles.navButton} ${styles.left}`}>
            <FaArrowCircleLeft />
          </button>
        )}
        <div
          ref={sliderRef}
          className={styles.cardRow}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {cameras.map((cam, index) => (
            <CameraView
              key={index}
              cameraName={cam.cameraName}
              streamUrl={cam.streamUrl}
              snapshotUrl={cam.snapshotUrl}
              isOffline={cam.isOffline}
            />
            
          ))}
        </div>
        {showNavButtons && (
          <button onClick={scrollRight} className={`${styles.navButton} ${styles.right}`}>
            <FaArrowCircleRight />
          </button>
        )}
      </div>
    </div>
  );
}
