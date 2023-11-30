import BudgetItems from "../BudgetItems";
import styles from './BudgetContainer.module.css'

const BudgetContainer = () => {
    const data = [
        { category: "Coffee", budget: 500, spent: 550, left: '', overspent: 50 },
        { category: "Entertainment", budget: 700, spent: 600, left: 100 },
        { category: "Dine Out", budget: 300, spent: 50, left: 250 },

    ];

    console.log("Data in BudgetContainer:", data);

    return (
        <div >
            <div className={styles.titles}>
                <p className={styles.name}>Name</p>
                <div className={styles.budgetTitles}>
                    <p className={styles.budget}>Budget</p>
                    <p className={styles.budget}>Spent</p>
                    <p className={styles.budget}>Overspent</p>
                    <p className={styles.budget}>Left</p>
                    <p className={styles.budget}>Status</p>
                </div>
            </div>

            {data.map((item, index) => (
                <BudgetItems key={index} data={item} />
            ))}
        </div>
    );
};

export default BudgetContainer;
