import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    const [isTop, setIsTop] = useState(true)
    const router = useRouter()

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const top = window.scrollY < 150
            if (top !== isTop) {
                setIsTop(top)
            }
          })
    },)

    const handleCountdownClick = () => {
        router.push('https://countdown.ted.com/')
    }

    return (
        <div
            className={styles.container}
        >
            <Link href="/">
                <a>
                    <img className={styles.logo} src="/images/logo.png" />
                </a>            
            </Link>
            <img className={styles.gif} onClick={handleCountdownClick} src="/images/countdown.gif" />
        </div>
    )
}

export default Header