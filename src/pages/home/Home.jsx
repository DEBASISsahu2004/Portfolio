import styles from './home.module.css'
import { Link } from 'react-scroll'
import Mockimg1 from '../../assets/images/mockImage2.png'
import Mockimg2 from '../../assets/images/mockImage1.png'
import Mockimg3 from '../../assets/images/mockImage3.png'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.nameSection}>
                <h1>DEBASIS</h1>
                <p>Debasis</p>
            </div>

            <div className={styles.textSection}>
                <h1>Designing Digital Realities</h1>
                <p>With a focus on bold visuals and seamless usability, I design web interfaces that captivate and communicate. Explore my portfolio to see my approach to modern, impactful design.</p>
                <Link
                    className={styles.linkToExperience}
                    to="about"
                    smooth={true}
                    duration={500}
                >Explore My Craft</Link>
            </div>

            <div className={styles.imageSection}>
                <div className={styles.content}>
                    <img src={Mockimg1} alt="design 1" />
                </div>
                <div className={styles.content}>
                    <img src={Mockimg2} alt="design 2" />
                </div>
                <div className={styles.content}>
                    <img src={Mockimg3} alt="design 3" />
                </div>
            </div>
        </div>
    )
}

export default Home