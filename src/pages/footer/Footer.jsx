import styles from './footer.module.css'
import { Link } from 'react-scroll'
import Whatsapp from '../../assets/images/whatsapp.svg'
import Instagram from '../../assets/images/instagram.svg'
import Linkedin from '../../assets/images/linkedin.svg'
import Avatar from '../../assets/images/avatar.svg'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.links}>
                <div className={styles.navLinks}>
                    <h3>Quick Links</h3>
                    {['About', 'Service', 'Experience', 'Testimonials'].map((text, index) => (
                        <Link className={styles.sectionLink} key={index} to={text.toLowerCase()} smooth duration={500}>{text}</Link>
                    ))}
                </div>

                <div className={styles.socialHandles}>
                    <h3>Connect</h3>
                    <div>
                        {[
                            { name: Whatsapp, link: 'https://wa.me/917855032278' },
                            { name: Linkedin, link: 'https://www.linkedin.com/in/debasissahu07/' },
                            { name: Instagram, link: 'https://www.instagram.com/_.debasis_sahu._/' },
                            { name: Avatar, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=sahurocky524@gmail.com' },
                        ].map((social, index) => (
                            <a target='_blank' className={styles.socialLink} key={index} href={social.link}><img src={social.name} alt={social.name} /></a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.textSection}>
                <h1>Shaping Digital Realities for a Connected Era</h1>
                <h2>Debasis</h2>
            </div>
        </div>
    )
}

export default Footer