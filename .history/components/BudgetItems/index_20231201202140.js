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

    return (
        <div className={styles.container}>
            <Image
                src={imageSources[category]}
                alt="categoryimage"
                width={size === "s" ? 22 : 20}
                height={size === "s" ? 20 : 20}
                className={iconStyle}
            />
            <p className={styles.category}>{category}</p>
            <div className={styles.textContainer}>
                <div className={styles.budgetMoney}>
                    <p className={styles.budget}>{budget !== undefined ? `$${budget}` : "-"}</p>
                    <p className={styles.spent}>{spentValue}</p>
                    <p className={styles.left}>{leftValue}</p>
                    <p className={styles.overspent}>{overspentValue}</p>

                    <p className={styles.status}>{status}</p>

                </div>
            </div>
        </div>
    );
}
