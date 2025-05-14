import { useRef, useState, useEffect } from "react";
import WidgetCard from "../Widgets/WidgetCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import styles from "./CardSlider.module.css";

export default function CardSlider({ title, items }) {
  const sliderRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!sliderRef.current) return;
      const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.clientWidth;
      setShowNavButtons(isOverflowing);

      if (!isOverflowing) {
        sliderRef.current.style.justifyContent = "space-between";
      } else {
        sliderRef.current.style.justifyContent = "flex-start";
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [items]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Mouse Drag Scroll State
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
          {items.map((item, index) => (
            <WidgetCard
              key={index}
              title={item.title}
              value={item.value}
              subtitle1={item.subtitle1}
              subtitle1Value={item.subtitle1Value}
              subtitle2={item.subtitle2}
              subtitle2Value={item.subtitle2Value}
              lastUpdated={item.lastUpdated}
              icon={item.icon}
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
