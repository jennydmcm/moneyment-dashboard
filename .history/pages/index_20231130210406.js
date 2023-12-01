import styles from '@/styles/Home.module.css'
import GoogleSignIn from '@/firebase/GoogleSignIn'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import UserRegistrationSignIn from '@/firebase/UserRegistration'
import UserEmailSignIn from '@/firebase/UserEmailSignIn'
import UserLogout from '@/firebase/UserLogout'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] });


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
          <Image className={styles.logo} src="/wordmark.svg" width={400} height={26} />
          <div className={styles.title} >
            <h2 className={styles.header}>Register</h2>
            <h3 className={styles.subhead}>Enter your credentials to register</h3>
          </div>  
 
          <GoogleSignIn />

          <div className={styles.divider}>
            <hr className={styles.hr}/>
            <p className={styles.p}>or</p>
            <hr className={styles.hr}/>
          </div>
          
          <UserRegistrationSignIn className={styles.signIn} />

          <h4 className={styles.link}>Already have an account? <Link className={styles.href} href="/login" >Login</Link></h4>
        </div >

        <div className={styles.graphicContainer}>
          <Image className={styles.leaf} src="/leaf-bg.svg" width={700} height={600} /> 

          <h2 className={styles.h1}>
            Greater Control of Your Finances
          </h2>

          <Image className={styles.computer} src="/computer.png" width={570} height={329} />

          <Image className={styles.icon} src="/logo.svg" width={48} height={48} />

          <h3 className={styles.description}>
            Empower your student journey, simplifying finances 
            for greater control and focus on what matters most
          </h3>

          <h4 className={styles.warning}>
            Moneyment provides AI-generated financial suggestions 
            and should be used for informational purposes only. All 
            financial decisions remain ultimately your responsibility.
          </h4>
        </div>
      </main >
    </>
  )
}
