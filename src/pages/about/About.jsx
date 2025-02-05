import styles from './about.module.css'
import { useState } from 'react'
import Mypic from '../../assets/images/profilepic.jpg'

const About = () => {

  const faqs = [
    {
      question: "Who I am?",
      answer: "I'm a passionate web developer and designer with a focus on creating user-friendly and visually appealing digital experiences. I blend creativity with technical skills to bring unique ideas to life."
    },
    {
      question: "What I Provide?",
      answer: "I specialize in web development and UI/UX design for websites and apps, creating clean, responsive, and user-friendly solutions tailored to each client's needs."
    },
    {
      question: "How I do it?",
      answer: "I start with understanding your vision, then combine thoughtful design with precise development. I use modern tools and frameworks to ensure each project is efficient, functional, and visually appealing."
    },
    {
      question: "What I learnt?",
      answer: "Through each project, I've learned the importance of user-centric design, adaptability, and continuous improvement. My journey has taught me that attention to detail and a dedication to quality make all the difference."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About Me</h1>
      <h2 className={styles.subHeading}>Wanna Know Me?</h2>
      
      <div className={styles.aboutNavbar}>
        {faqs.map((faq, index) => (
          <p className={`${styles.question} ${activeIndex === index ? styles.activeQuestion : ""}`} key={index} onClick={() => setActiveIndex(index)}>
            {faq.question}
          </p>
        ))}
      </div>

      <div className={styles.displayContent}>
        <div className={styles.imageContainer}>
          <img src={Mypic} alt="My Image" />
        </div>
        <div className={styles.infoContainer}>
          {faqs.map((faq, index) => (
            activeIndex === index && (
              <p key={index} className={styles.answer}>
                {faq.answer}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default About