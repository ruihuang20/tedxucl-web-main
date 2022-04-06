import styles from './Footer.module.css'
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
    return (
        <div 
        className={styles.container}
        >
            <div className={styles.socialsContainer}>
                <a href="https://www.instagram.com/ucltedx/" className={styles.socialContainer} >
                    <FiInstagram className={styles.social} />
                </a>
                <a href="https://twitter.com/tedxuclofficial" className={styles.socialContainer}>
                    <FiTwitter className={styles.social} />
                </a>
                <a href="https://www.facebook.com/UCLTEDx/" className={styles.socialContainer}>
                    <FiFacebook className={styles.social} />
                </a>
                <a href="https://www.linkedin.com/company/tedxucl2021" className={styles.socialContainer}>
                    <FiLinkedin className={styles.social} />
                </a>
            </div>
            <div className={styles.text}>
                <p>THIS INDEPENDENT TEDx EVENT IS OPERATED UNDER LICENSE FROM TED</p>
            </div>
        </div>
    )
}

export default Footer