import styles from './testimonials.module.css'
import { Marque } from '@/components/marquee/Marque'
import Clientavatar from '../../assets/images/clientavatar.svg'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rahul Sharma',
      email: 'rahulsharma@gmail.com',
      body: 'Creative, detail-oriented, and a joy to work with. They brought ideas to life better than I imagined!',
      img: Clientavatar
    },
    {
      name: 'Priya Roy',
      email: 'priyaroy@gmail.com',
      body: 'Their attention to detail and creativity exceeded my expectations. Highly recommend!',
      img: Clientavatar
    },
    {
      name: 'Amit Patel',
      email: 'amitpatel@gmail.com',
      body: 'Professional, innovative, and a pleasure to collaborate with. The results were outstanding!',
      img: Clientavatar
    }
  ];

  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.heading}>Testimonials</h1>
      <h2 className={styles.subHeading}>Bringing visions to life with design that resonates</h2>
      <div className={styles.reviews}>
        <Marque reviews={reviews} />
      </div>
    </div>
  )
}

export default Testimonials