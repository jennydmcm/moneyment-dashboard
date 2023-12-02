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


export default function MobileCard({ budget, onPress }) {
    const totalSpent = budget.totalBudget - budget.totalPrice;
    const totalSpentFixed = totalSpent.toFixed(2);

    const spent = budget.totalPrice;
    const spentFixed = spent.toFixed(2);
    
    const spentText = totalSpent >= 0 ? "on budget" : "overspent";
    const spentTextStyle = totalSpent >= 0 ? styles.greenText : styles.redText;

    return (
            <View style={isDarkMode ? styles.containerDark : styles.container}>
                <View style={styles.main_container}>
                    <View style={styles.top_content}>
                        <View style={styles.text_content}>
                            <Image
                                source={require("../../../assets/graphics/category/Coffee.png")} // make this dynamic
                                alt=''
                                style={styles.img}
                                contentFit="contain"
                                width={24}
                                height={24}
                            />
                            <View>
                                <Text style={styles.budget_name}>{budget.budgetTitle}</Text>
                                {/* <Text style={styles.budget_recurrence}>Weekly</Text> */}
                            </View>
                        </View>
                        <View style={styles.budget_status}>
                            <Text style={[styles.budget_recurrence, spentTextStyle]}>{spentText}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderTopColor: isDarkMode ? '#535353' : '#DDDDDD',
                            borderTopWidth: 1,
                            width: "100 %",
                            marginTop: 12,
                            marginBottom: 5
                        }}
                    />
                    <View style={styles.bottom_content}>
                        <View style={styles.container_price_text_one}>
                            <Text style={styles.bottom_content_price}>${(budget.totalBudget + 0).toFixed(0)}</Text>
                            <Text style={isDarkMode ? styles.bottom_content_text_Dark : styles.bottom_content_text}>Budget</Text>
                        </View>
                        <View
                            style={{
                                borderLeftColor: isDarkMode ? '#535353' : '#DDDDDD',
                                borderLeftWidth: 1,
                                height: "100 %",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.container_price_text_two}>
                            <Text style={styles.bottom_content_price}>${spentFixed}</Text>
                            <Text style={styles.bottom_content_text}>Spent</Text>
                        </View>

                        <View
                            style={{
                                borderLeftColor: isDarkMode ? '#535353' : '#DDDDDD',
                                borderLeftWidth: 1,
                                height: "100 %",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.container_price_text_two}>
                            <Text style={styles.bottom_content_price}>${totalSpentFixed}</Text>
                            <Text style={styles.bottom_content_text}>Left</Text>
                        </View>
                    </View>
                </View>
                <HorizontalProgressBar progress={budget.progress} />
            </View>
    );
}

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
    );
}





