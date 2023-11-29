import styles from '@/styles/LoginPage.module.css'
import GoogleSignIn from '@/firebase/GoogleSignIn'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import UserRegistrationSignIn from '@/firebase/UserRegistration'
import UserEmailSignIn from '@/firebase/UserEmailSignIn'
import UserLogout from '@/firebase/UserLogout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    const [user, setUser] = useState({});


    //you need this in order to get an update on the current user logged in
    // this will either show or hide the users information later on the screen.
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    }, [])



    return (
        <>
            <main className={styles.main}>

                <div className={styles.login}>
                    <Image className={styles.logo} src="/wordmark.svg" width={200} height={26} />
                    <div className={styles.title} >
                        <h2 className={styles.header}>Login</h2>
                        <h3 className={styles.subhead}>Enter your credentials to log in</h3>
                    </div>  
                    
                    <GoogleSignIn />

                    <div className={styles.divider}>
                        <hr className={styles.hr}/>
                        <p className={styles.p}>or</p>
                        <hr className={styles.hr}/>
                    </div>

                    <UserEmailSignIn className={styles.signIn} />

                    <h4 className={styles.link}>Don't have an account? <Link className={styles.href} href="/" >Sign up</Link></h4>
                </div >


            </main >
        </>
    )
}
