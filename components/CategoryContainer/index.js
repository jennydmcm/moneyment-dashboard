import React from "react";
import styles from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryImg";

const CategoryContainer = () => {
    const data = [
        { category: "Coffee", location: 'Starbucks', amount: 10.67 },
        { category: "Food", location: 'Subway', amount: 20.67 },
        { category: "Groceries", location: 'Safeway', amount: 30.54 },
        { category: "Shopping", location: 'Uniqlo', amount: 40.19 },
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
