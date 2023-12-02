import React from "react";
import Image from "next/image";
import styles from './BudgetItems.module.css';
import CoffeeImage from "public/Coffee.jpeg";
import FoodImage from "public/Food.jpeg";
import EntertainmentImage from "public/Entertainment.png";

export default function BudgetItems({ data }) {
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

<div className={styles.container}>

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
