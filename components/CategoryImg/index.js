import React from "react";
import styles from './CategoryImg.module.css';

export default function CategoryItem({ data }) {

    const { category, amount, size } = data;


    const imageSources = {
        Coffee: "/public/Coffee.png",
        Food: "/public/Food.png",
        Groceries: "/public/Groceries.png",
        Shopping: "/public/Shopping.png",

    };

    const iconStyle = size === "s" ? styles.s : styles.m;

    return (
        <div className={styles.container}>
            <img
                src={imageSources[category]}
                alt=""
                width={size === "s" ? 24 : 28}
                height={size === "s" ? 24 : 28}
                className={iconStyle}
            />
            <div className={styles.textContainer}>
                <p className={styles.title}>{category}</p>
                <p className={styles.amount}>Amount: ${amount}</p>
            </div>
        </div>
    );
}
