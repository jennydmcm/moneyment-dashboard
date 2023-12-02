import React, { useState, useEffect } from 'react';
import styles from './MobileCard.module.css';

export function ProgressBar({ progress }) {
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

export default function MobileCard({ data }) {
    const { category, budget, size, spent, left, overspent } = data;
    const imageSources = {
        Coffee: CoffeeImage,
        "Dine Out": FoodImage,
        Entertainment: EntertainmentImage,
    };

    const iconStyle = size === "s" ? styles.s : styles.m;

    const spentValue = spent || spent === 0 ? `$${spent}` : "-";
    const leftValue = left || left === 0 ? `$${left}` : "-";

    const overspentValue = overspent || overspent === 0 ? `$${overspent}` : "-";

    const status = overspent > 0 ? "Overspent" : "On Budget";
    const statusClassName = status === "Overspent" ? styles.overspent : styles.onBudget;

    return (
        <div className={styles.container}>
            <

            <div className={styles.textContainer}>

                <div className={styles.budgetMoney}>
                    <Image
                        src={imageSources[category]}
                        alt="categoryimage"
                        width={size === "s" ? 24 : 24}
                        height={size === "s" ? 24 : 24}
                        className={iconStyle}
                        style={{ marginLeft: '1em' }}
                    />
                    <p className={styles.category}>{category}</p>
                    <p className={styles.budgetItem}>{budget !== undefined ? `$${budget}` : "-"}</p>
                    <p className={styles.budgetItem}>{spentValue}</p>
                    <p className={styles.budgetItem}>{leftValue}</p>
                    <p className={styles.budgetItem}>{overspentValue}</p>
                    <p className={`${styles.status} ${statusClassName}`}>{status}</p>
                </div>
                <hr className={styles.divider}></hr>
            </div>
        </div>
    );
}