import styles from './Part3.module.css'
import {FaUser} from "react-icons/fa";
import {FcConferenceCall}from "react-icons/fc";
import { FaBeer } from 'react-icons/fa';

const Events = () => {
    return (
       
       <div className={styles.container}>
           <h1>Events</h1>
           <div className={styles.events}>
            <div className={styles.card}>
                <img src="/images/circles.svg" />
                    <div className={styles.text}>
                        <h1>TED CIRCLES</h1>
                        <p>TED Circles hosted by TEDxUCL is an open community of small groups that discuss big ideas. Hosted by volunteers, Circles discuss a TED Talk about a monthly theme, the climate crisis (Countdown) or issues of urgent importance (Here and now). By considering each other’s perspectives, they create a global conversation</p>
                    </div>
                </div>
                <div className={styles.card}>
                <img src="/images/salon.jpeg"/>
                    <div className={styles.text}>
                        <h1>Salon Events</h1>
                        <p>Salon events are often small weekly or monthly events that keeps a TEDx community engaged between regular TEDx events. It’s a unique kind of gathering that TEDx organisers hold which allows the conversation to continue, in person.</p>
                    </div>
                </div>
                <div className={styles.card}>
                <img src="/images/studio.jpeg" />
                    <div className={styles.text}>
                        <h1>Studio</h1>
                        <p>Our Studio initiative produces standalone TEDx talks unaffiliated with an in-person or virtual TEDx event.</p>
                    </div>
                </div>
            </div>                    
        </div>

      
           
    )
}

export default Events