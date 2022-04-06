import styles from './Hero.module.css'
import Countdown from 'react-countdown'
import Link from 'next/link'

const Intro = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.conainerTop}>
                <div className={styles.heroLeft}>
                    <img className={styles.countdownGif} src="/images/countdown.gif" alt="COUNTDOWN GIF"/>   
                    <Countdown 
                        date={Date.parse('Fri, 10 Dec 2021 17:00:00 GMT')}
                        className={styles.timer}
                    />
                </div>
                <div className={styles.heroRight}>
                        <h2>TEDxUCL Conference Coming Live</h2>
                        <h3>10 December, 5-9PM</h3>
                        <h3>Cruciform Lecture Theatre 1</h3>
                        <Link href="/about">
                            <a >Meet Our Speakers!</a>
                        </Link>
                        <div className={styles.containerBottom}>
                            <a href="https://studentsunionucl.org/whats-on/clubs-societies/tedxucl-2021" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Intro;