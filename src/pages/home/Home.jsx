import styles from './home.module.css'
import { Link } from 'react-scroll'
import Arrow from '../../assets/icons/arrow.svg';
import Pc from '../../assets/icons/pc.svg';
import Message from '../../assets/icons/message.svg';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.nameSection}>
                <h1>DEBASIS</h1>
                <p>Debasis</p>
            </div>

            <div className={styles.textSection}>
                <h1>Crafting Engaging Web Experiences</h1>
                <p>
                    As a Web Developer & Designer, I blend creativity with functionality to build
                    visually striking and user-friendly digital experiences. Explore my portfolio
                    to see how I bring ideas to life.
                </p>
                <Link
                    className={styles.linkToExperience}
                    to="experiece"
                    smooth={true}
                    duration={500}
                >Explore My Work <img src={Arrow} alt="arrow" /></Link>
            </div>

            <div className={styles.serviceSection}>
                <div className={styles.imageContainer}>
                    <img src={Pc} alt="pc" />
                </div>
                <p className={styles.text}>Need a website or UI design? I offer tailored solutions for businesses and individuals.</p>
            </div>

            <div className={styles.contactSection}>
                <p className={styles.text}>Got something to have a conversation on. Ping Me!</p>
                <div className={styles.imageContainer}>
                    <img src={Message} alt="message" />
                </div>
            </div>
        </div>
    )
}

export default Home