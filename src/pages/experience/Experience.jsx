import styles from './experience.module.css'
import { useState } from 'react';
import CaroCollide from '../../assets/images/caro_collide.png'
import CaroRecipe from '../../assets/images/caro_recipe.png'
import CaroNote from '../../assets/images/caro_note.png'
import Left from '../../assets/images/left.svg'
import Right from '../../assets/images/right.svg'

const Experience = () => {
    const experience = [
        {
            title: 'Collide',
            image: CaroCollide,
            description: 'An immersive platform connecting users with shared interests, enabling collaboration and networking through engaging features.'
        },
        {
            title: 'CookEase',
            image: CaroRecipe,
            description: 'A smart recipe finder that helps users create meals with ingredients they have on hand, offering an effortless cooking experience.'
        },
        {
            title: 'NoteNest',
            image: CaroNote,
            description: 'A secure note-taking app that lets users organize and manage personal notes, accessible anytime and anywhere.'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experience.length) % experience.length);
    };

    const getImageIndex = (index) => {
        return (index + experience.length) % experience.length;
    };

    return (
        <div className={styles.experienceContainer}>
            <h1 className={styles.heading}>Experience</h1>
            <h2 className={styles.subHeading}>Designing user-centered solutions with a modern edge and bold aesthetics</h2>
            <div className={styles.carouselSection}>
                <div className={styles.imageContainer}>
                    <img onClick={prevSlide} src={experience[getImageIndex(currentIndex - 1)].image} alt={experience[getImageIndex(currentIndex - 1)].title} />
                    <img src={experience[currentIndex].image} alt={experience[currentIndex].title} />
                    <img onClick={nextSlide} src={experience[getImageIndex(currentIndex + 1)].image} alt={experience[getImageIndex(currentIndex + 1)].title} />
                </div>
                <div className={styles.buttonContainer}>
                    <img onClick={prevSlide} className={styles.prevButton} src={Left} alt="left" />
                    <h4>{experience[currentIndex].title}</h4>
                    <img onClick={nextSlide} className={styles.nextButton} src={Right} alt="right" />
                </div>
                <p className={styles.description}>{experience[currentIndex].description}</p>
            </div>
        </div>
    )
}

export default Experience