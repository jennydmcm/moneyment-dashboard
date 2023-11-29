import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase.config";
import { useRouter } from "next/router";
import styles from '@/styles/Google.module.css'
import Image from "next/image";

export default function GoogleSignIn() {
    const router = useRouter();

    const GoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const authorization = auth;
            const result = await signInWithPopup(authorization, provider);

            // If the login is successful, navigate to the dashboard page
            if (result.user) {
                router.push("/dashboard");
            }

            console.log(result);
        } catch (error) {
            console.error("Google login error:", error);
        }
    }

    return (
        <>
            <button className={styles.button} onClick={() => GoogleLogin()}>
                <Image className={styles.logo} src="/google.svg" width={32} height={32}></Image>
                Log In with Google
            </button>
        </>
    )
}
