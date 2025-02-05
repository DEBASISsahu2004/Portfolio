import styles from './experience.module.css'
import { useState } from 'react';
import Notenest from '../../assets/images/notenest.jpg';
import Cookease from '../../assets/images/cookease.jpg';
import Nomonday from '../../assets/images/nomonday.png';
import Left from '../../assets/icons/leftarrow.svg'
import Right from '../../assets/icons/rightarrow.svg'

const Experience = () => {
    const experience = [
        {
            title: 'NoteNest',
            image: Notenest,
            description: 'A secure note-taking app that lets users organize and manage personal notes, accessible anytime and anywhere.',
            designLink: 'https://drive.google.com/drive/folders/1k_sOqU0qC8ZWRQ38pD9EawRfAbq31_Dp?usp=drive_link',
            websiteLink: 'https://note-nest-beryl.vercel.app/',
        },
        {
            title: 'CookEase',
            image: Cookease,
            description: 'A smart recipe finder that helps users create meals with ingredients they have on hand, offering an effortless cooking experience.',
            designLink: 'https://drive.google.com/drive/folders/1nOp70XAstduFSa76lP1kt5XKX2gHteYK?usp=drive_link',
            websiteLink: '',
        },
        {
            title: 'NoMonday Studios',
            image: Nomonday,
            description: 'A visually striking and fully responsive website built for NoMonday Studios, designed to showcase their expertise in brand design, rebranding, and influencer relations.',
            designLink: 'https://drive.google.com/drive/folders/1DmykBAJVhu3Slt0ZQhSY_InDv5LwFqFv?usp=drive_link',
            websiteLink: 'https://www.nomondaystudios.com/',
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
            <h1 className={styles.heading}>Projects</h1>
            <h2 className={styles.subHeading}>Crafting user-centric solutions with modern design and functionality.</h2>

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

                <div className={styles.projectDetails}>
                    <p className={styles.description}>{experience[currentIndex].description}</p>
                    <div className={styles.linkContainer}>
                        {experience[currentIndex].designLink && <a target='_blank' href={experience[currentIndex].designLink}>Design</a>}
                        {experience[currentIndex].websiteLink && <a target='_blank' href={experience[currentIndex].websiteLink}>Website</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience