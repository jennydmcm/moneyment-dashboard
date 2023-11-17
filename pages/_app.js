import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
const monst = Montserrat({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {


  return (
    <>
      <style jsx global>{`
    html {
      font-family: ${monst.style.fontFamily};
    }
  `}</style>
      <Component {...pageProps} />
    </>)
}
