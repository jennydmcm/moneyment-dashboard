import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import styles from '@/styles/Register.module.css'



export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);




    const register = async () => {
        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${registerFirstName} ${registerLastName}`,
            });

            const refreshedUser = await auth.currentUser;


            window.location.href = '../dashboard';


        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email is already in use. Please use a different email address.");
            } else if (error.code === "auth/missing-password") {
                setError("Password is required. Please provide a password.");
            } else if (error.code === "auth/invalid-email") {
                setError("Invalid email format. Please provide a valid email address.");
            } else if (error.code === "auth/weak-password") {
                setError("Password should be at least 6 characters.");
            } else {
                setError(error.message); // Use the error message directly or customize it
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <>

            <div className={styles.main}>
                <div className={styles.require}>
                    <p className={styles.require}>* required fields</p>
                </div>
                <div className={styles.name}>
                    <div>
                        <div className={styles.inputTitle}>First Name *</div>
                        <input
                            className={styles.firstName}
                            placeholder="First Name"
                            value={registerFirstName}
                            onChange={(event) => {
                                setRegisterFirstName(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <div className={styles.inputTitle}>Last Name *</div>
                        <input
                            className={styles.lastName}
                            placeholder="Last Name"
                            value={registerLastName}
                            onChange={(event) => {
                                setRegisterLastName(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className={styles.inputTitle}>Email *</div>
                    <input
                        className={styles.email}
                        placeholder="youremail@email.com"
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <div className={styles.inputTitle}>Password *</div>
                    <input
                        className={styles.password}
                        placeholder="min. 6 characters"
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                </div>
                <button
                    className={styles.register}
                    disabled={loading}
                    onClick={() => {
                        register();
                        setRegisterEmail("");
                        setRegisterPassword("");
                        setRegisterFirstName("");
                        setRegisterLastName("");
                    }}>{loading ? 'Registering...' : 'Register'}</button>
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </>
    )
}