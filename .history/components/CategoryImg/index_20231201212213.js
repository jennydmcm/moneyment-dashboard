import React from "react";
import Image from "next/image";
import styles from './CategoryImg.module.css';
import CoffeeImage from "public/Coffee.jpeg";
import FoodImage from "public/Food.jpeg";
import GroceriesImage from "public/Groceries.jpeg";
import ShoppingImage from "public/Shopping.jpeg";


export default function CategoryItem({ data }) {

    const { category, amount, size, location } = data;

    const imageSources = {
        Coffee: CoffeeImage,
        Food: FoodImage,
        Groceries: GroceriesImage,
        Shopping: ShoppingImage
    };

    const iconStyle = size === "s" ? styles.s : styles.m;

    return (
        <div className={styles.container}>
            <Image
                src={imageSources[category]}
                alt="categoryimage"
                width={size === "s" ? 24 : 24}
                height={size === "s" ? 24 : 24}
                className={`${styles.cate} ${iconStyle}`}
            />
            <div className={styles.textContainer}>
                <p className={styles.store}>{location}</p>
                <p className={styles.title}>{category}</p>
            </div>
            <p className={styles.amount}>-${amount}</p>

        </div>
    );
}
