import styles from './SecondSection.module.css'

const SecondSection = () => {
    return (
        <div
        className={styles.container}
        >
            <div className={styles.left}>
              <h1>What is TEDx?</h1>
              <p>
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organised events that bring people together to share a TED-like experience. Our event is called TEDxUCL, where x = independently organised TED event. At our TEDxUCL event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organised.
              </p>
            </div>

          <div className={styles.right}>
            <img src='/images/whatIsTEDx.jpeg' alt=""/>
          </div>
        </div>
    )
}

export default SecondSection
