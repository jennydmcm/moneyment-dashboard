import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

export default function CustomProgressBar({ progress }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress * 100);
  }, [progress]);

  const getBarColor = (progress) => {
    if (progress >= 1) {
      return '#B04121'; // Red when progress is 100%
    } else if (progress >= 0.7) {
      return '#E58331'; // Orange when progress is between 70% and 99%
    } else {
      return '#6AB4AC'; // Blue when progress is below 70%
    }
  };

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{
          width: `${width}%`,
          backgroundColor: getBarColor(progress),
        }}
      ></div>
    </div>
  );
}
