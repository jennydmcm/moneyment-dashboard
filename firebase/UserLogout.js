import { signOut } from 'firebase/auth'
import { auth } from './firebase.config'
import styles from '@/styles/Logout.module.css'
import Image from 'next/image';




export default function UserLogout({ onLogout }) {
    const logoutUser = async () => {
        await signOut(auth);
        console.log("User Logged Out");

        // Trigger the onLogout function passed from the parent component
        if (onLogout) {
            onLogout();
        }
    };

    return (
        <>
            <div>
                <button className={styles.button} onClick={() => logoutUser()}>Log out
                    <Image className={styles.icon} src="/logoutButton.svg" width={20} height={20}></Image>
                </button>
            </div>
        </>
    )
}