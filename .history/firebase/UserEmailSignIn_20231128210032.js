import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import styles from '@/styles/Login.module.css'
import { useRouter } from 'next/router';


export default function UserEmailSignIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const router = useRouter();

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
            router.push('../dashboard');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>

            <div className={styles.main}>

                <div className={styles.require}>
                    <p className={styles.p}>* required fields</p>
                </div>

                <div>
                    <div className={styles.inputTitle}>Email *</div>
                    <input
                        className={styles.email}
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <div className={styles.inputTitle}>Password </div>
                    <input
                        className={styles.password}
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                </div>
                <button
                    className={styles.register}
                    onClick={() => {
                        login()
                        setLoginEmail("")
                        setLoginPassword("")



                    }}>Login</button>
            </div>
        </>
    )
}