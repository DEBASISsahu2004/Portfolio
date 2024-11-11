import styles from './contact.module.css'
import { useState } from 'react'
import Input from '../../components/input/Input'
import Sideimage from '../../assets/images/contactImg.jpg'

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
    console.log('Form Submitted')
    setFormDetails({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Contact Me</h1>
        <h2 className={styles.subHeading}>Have a project in mind? Let&apos;s bring it to life</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={formDetails.name} placeholder="Whom should I reach out?" name="name" labelText="Name" onChange={handleChange} />
          <Input type="text" value={formDetails.email} placeholder="Where should I reply?" name="email" labelText="Email" onChange={handleChange} />
          <Input type="text" value={formDetails.message} placeholder="How can i help?" name="message" labelText="Message" onChange={handleChange} />
          <button type="submit">Let&apos;s Connect</button>
        </form>
      </div>
      <div className={styles.imageSection}>
        <img src={Sideimage} alt="random image" />
      </div>
    </div>
  )
}

export default Contact