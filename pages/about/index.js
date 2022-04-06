import styles from './About.module.scss'
import Layout from '../../components/layout/'

const About = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Meet Our Speakers</h1>
                <div className={styles.DualSquareContainer}>
                    <div className={styles.WhiteSquare}>
                        <h1>IMRAN MANNAN</h1>
                        <h3>Prosumption - another way to produce, store and consume electricity.</h3>
                        <p>Imran is a Data Analyst for a clean energy infrastructure company. He is primarily interested in projects
                            that can reduce emissions while also empowering local communities.
                        <br /> <br/>
                        Imran has researched multiple topics within Energy Studies, including zero-emission cooking, urban micro-grids 
                        and the ambition of international climate policies. His work has explored how achieving net zero will depend 
                        on contributions from all actors, including governments, businesses, and consumers.
                        <br /><br />
                        Imran’s current role involves maximising the performance of battery energy storage systems and electric vehicle 
                        infrastructure. He hopes to help decarbonise global energy supply through innovative projects with system-wide 
                        impact.
                        </p>             
                    </div>
                    <div className={styles.GreenGradientSquare}>
                        <img src="/images/imann.jpeg" className={styles.PhoneImg}></img>
                    </div>
                </div>
                <div className={styles.DualSquareContainer}>
                    <div className={styles.GreenGradientSquare}>
                        <img src="/images/georgia.jpeg" className={styles.PhoneImg}></img>
                    </div>
                    <div className={styles.WhiteSquare}>
                        <h1>GEORGIA ELLIOTT-SMITH</h1>
                        <h3>A disruptive new model for corporate sustainability and ESG.</h3>
                        <p>An environmental engineer and Chartered Environmentalist, Georgia started her career as one of UK 
                            construction’s first Environment Managers. Following an Antarctic expedition, she became UN Special 
                            Junior Envoy for Youth & the Environment, speaking to young people around the world on environmental issues.
                        <br /> <br/>
                        As the current Managing Director of sustainability consultancy Element Four, Georgia works with organisations 
                        such as the Bank of England, Nike and Deloitte to deliver more sustainable projects and business practices. A critic 
                        of traditional approaches, Georgia promotes “disruptive sustainability” – a combination of best practice and activism 
                        that generates purpose and drives actions necessary to achieve meaningful change in industry.
                        </p>             
                    </div>
                </div>
                <div className={styles.DualSquareContainer}>
                    <div className={styles.WhiteSquare}>
                        <h1>OLIVER HEATH</h1>
                        <h3>Restoring our connection to nature: Creating happier, healthier spaces to live in.</h3>
                        <p>Oliver Heath is an architectural and interior designer whose eponymously named sustainable design practice 
                            focuses on health and wellbeing in the built environment with a focus on Biophilic Design - how we enhance 
                            the human connection with nature in our cities and buildings.
                        <br /> <br/>
                        As an alumnus of The Bartlett School of Architecture at UCL, Oliver has used his longstanding media career for 
                        the likes of the BBC and the Discovery Channel, along with the four books he has written, to discuss the environmental 
                        issues that we face and how design can be used to not just mitigate them, but also create regenerative spaces for 
                        both people and planet.
                        <br /><br />
                        Imran’s current role involves maximising the performance of battery energy storage systems and electric vehicle 
                        infrastructure. He hopes to help decarbonise global energy supply through innovative projects with system-wide 
                        impact.
                        </p>             
                    </div>
                    <div className={styles.GreenGradientSquare}>
                        <img src="/images/Oliver.jpeg" className={styles.PhoneImg} style={{marginBottom:"-100px"}}></img>
                    </div>
                </div>
                <div className={styles.DualSquareContainer}>
                    <div className={styles.GreenGradientSquare}>
                        <img src="/images/michael.jpeg" className={styles.PhoneImg} style={{width:"60%"}}></img>
                    </div>
                    <div className={styles.WhiteSquare}>
                        <h1>MICHAEL PINSKY</h1>
                        <h3>Buy less, bin less: the culture of consuming</h3>
                        <p>Michael Pinsky is an artist, urban planner, activist, researcher and resident, whose work has been showcased at 
                            distinguished galleries and museums around the world. He explores issues which shape and influence the use of 
                            the public realm to create ambitious and provocative installations in galleries and public spaces, challenging 
                            the status quo on climate change, urban design, and societal well-being. His recent installation, Pollution 
                            Pods, has been a resounding success, touring globally and being visited by the likes of Greta Thunberg.
                            Michael’s work was also listed in the 100 Works of Art That Defined the Decade from Artnet.
                        </p>           
                    </div>
                </div>
                <div className={styles.DualSquareContainer}>
                    <div className={styles.WhiteSquare}>
                        <h1>CRAIG BENNETT</h1>
                        <p>Craig has been described as “one of the UK&apos;s top environmental campaigners”, by The Guardian as “the very 
                            model of a modern eco-general” and has been listed as one of the UK’s top “social media CEOs”. He 
                            regularly appears in the print and broadcast media, and is well known as a public speaker, adviser, and 
                            contributor to Executive Education programmes.
                        <br /> <br/>
                        Craig currently serves as Chief Executive of The Wildlife Trusts, with the ambition of putting a third of the 
                        UK’s land and sea into nature recovery by 2030. Earlier in his career, Craig was Deputy Director at The 
                        University of Cambridge Institute for Sustainability Leadership (CISL), and Director of The Prince of Wales’s 
                        Corporate Leaders Group on Climate Change (from 2007 to 2010). 
                        </p>             
                    </div>
                    <div className={styles.GreenGradientSquare}>
                        <img src="/images/craig.jpeg" className={styles.PhoneImg}></img>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About