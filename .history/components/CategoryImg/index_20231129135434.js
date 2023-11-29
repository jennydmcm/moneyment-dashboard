import React from "react";
import styles from './CategoryImg.module.css';
import CoffeeImage from "public/Coffee.svg";
import FoodImage from "public/Food.jpeg";
import GroceriesImage from "public/Groceries.jpeg";
import ShoppingImage from "public/Shopping.jpeg";


export default function CategoryItem({ data }) {

    const { category, amount, size } = data;


    const imageSources = {
            Coffee: CoffeeImage,
            Food: FoodImage,
            Groceries: GroceriesImage,
            Shopping: ShoppingImage,
    };

    const iconStyle = size === "s" ? styles.s : styles.m;

    return (
        <div className={styles.container}>
            <img
                src={imageSources[category]}
                alt="categoryimage"
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
