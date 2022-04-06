import Events from '../Events'
import Hero from '../Hero'
import SecondSection from '../SecondSection'
import SignUp from '../SignUp'
import styles from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Hero />
            <SecondSection />
            <Events />
            <SignUp />
        </div>
    )
}

export default LandingPage