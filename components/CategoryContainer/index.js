import React from "react";
import styles from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryImg";

const CategoryContainer = () => {
    const data = [
        { category: "Coffee", amount: 10 },
        { category: "Food", amount: 20 },
        { category: "Groceries", amount: 30 },
        { category: "Shopping", amount: 40 },
    ];

    console.log("Data in CategoryContainer:", data);

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <CategoryItem key={index} data={item} />
            ))}
        </div>
    );
};

export default CategoryContainer;
