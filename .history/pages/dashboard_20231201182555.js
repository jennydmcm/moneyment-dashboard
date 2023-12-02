import Image from "next/image";
import styles from '@/styles/Dashboard.module.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { useRouter } from 'next/router';
import { Bar } from "react-chartjs-2";
import BarChart from "@/components/BarGraph";
import BudgetContainer from "@/components/BudgetContainer";
import CategoryContainer from "@/components/CategoryContainer";
import UserLogout from "@/firebase/UserLogout";


export default function Dashboard() {
    const [user, setUser] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        console.log('Logging out...');
        try {
            await signOut(auth);
            console.log('User Logged Out');
            setUser({});
            setShowDropdown(false);
            console.log('Before push');
            router.push('/login');
            console.log('After push');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };


    return (
        <div className={styles.main}>
            <div className={styles.navBar}>

                <Image className={styles.wordmark} src="/wordmark.svg" width={221} height={34} />

                <div className={styles.user}>
                    <Image className={styles.pfp} src="/pfp-placeholder.png" width={40} height={40} />
                    
                    Hello, {user?.displayName}
                    <Image
                        className={styles.icon}
                        src="/logoutArrow.svg"
                        width={16}
                        height={9}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                </div>

                {showDropdown && (
                    <div className={styles.dropdown}>
                        {/* Pass the onClick prop to UserLogout */}
                        <UserLogout onLogout={handleLogout} />
                    </div>
                )}
            </div>

            <hr className={styles.divider}></hr>

            <div />
            <div className={styles.header}>
                <h1 className={styles.title}>Budget Dashboard</h1>
                <div className={styles.warning}>
                    <Image className={styles.info} src="/info.svg" width={14} height={14} />
                    <p className={styles.warningText}>We are not financial advisors</p>
                </div>
            </div>
            <div className={styles.contents}>
                <div className={styles.vertical}>
                    <div className={styles.overview}>
                        <h1 className={styles.overviewTitle}>Overview</h1>
                        <div className={styles.chart}>
                            <BarChart />
                        </div>
                    </div>
                    <div className={styles.budgets}>Budgets
                        <BudgetContainer className={styles.budgetContainer} />

                    </div>
                </div>
                <div className={styles.transactions}>Transactions
                    <div className={styles.transactionInfo}>
                        <p className={styles.date}>Today</p>
                        <CategoryContainer />
                        <hr class="solid" />
                        <p className={styles.date}>Oct, 15 2023</p>
                        <CategoryContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}
