import styles from './service.module.css'
import Webdesign from '../../assets/images/webdesign.jpg'
import Appdesign from '../../assets/images/appdesign.jpg'
import Development from '../../assets/images/development.jpg'

const Service = () => {
    const service = [
        {
            title: 'UI and Web Design',
            image: Webdesign,
            subtitle: 'Transforming Ideas into Seamless Digital Journeys',
            description: 'Creating visually captivating, responsive web layouts with user-friendly interfaces, designed to elevate brand identity and ensure memorable user experiences.'
        },
        {
            title: 'App Design',
            image: Appdesign,
            subtitle: 'Building Mobile Experiences that Engage and Inspire',
            description: 'Focused on delivering smooth, intuitive mobile interactions and thoughtfully crafted layouts for effortless navigation, enhancing user engagement on every app journey.'
        },
        {
            title: 'Development',
            image: Development,
            subtitle: 'Bringing Concepts to Life with Precision and Functionality',
            description: 'Implementing robust, scalable code and optimized workflows to build efficient, high-performance applications, ensuring a seamless and reliable user experience.'
        }
    ]
return (
    <div className={styles.serviceContainer}>
        <h1 className={styles.heading}>What I Create</h1>
        <h2 className={styles.subHeading}>Empowering Brands with Creative, Customized Solutions</h2>
        <div className={styles.serviceSection}>
            {service.map((item, index) => {
                return (
                    <div key={index} className={styles.serviceCard}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.subtitle}</h4>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default Service