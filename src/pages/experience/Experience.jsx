import styles from './experience.module.css'
import { useState } from 'react';

const Experience = () => {
    const experience = [
        {
            title: 'p1',
            image: '',
            description: 'description'
        },
        {
            title: 'p2',
            image: '',
            description: 'description'
        },
        {
            title: 'p3',
            image: '',
            description: 'description'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experience.length) % experience.length);
    };

    return (
        <div className={styles.experienceContainer}>
            <h1 className={styles.heading}>Experience</h1>
            <h2 className={styles.subHeading}>Designing user-centered solutions with a modern edge and bold aesthetics</h2>
            <div className={styles.experienceSection}>
                <div className={styles.carousel}>
                    <h3>{experience[currentIndex].title}</h3>
                    <img src={experience[currentIndex].image} alt={experience[currentIndex].title} />
                    <p>{experience[currentIndex].description}</p>
                </div>
                <div>
                    <button onClick={prevSlide} className={styles.prevButton}>Previous</button>
                    <h4></h4>
                    <button onClick={nextSlide} className={styles.nextButton}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Experience