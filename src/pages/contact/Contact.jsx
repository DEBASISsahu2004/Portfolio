import styles from './contact.module.css'
import { useState } from 'react'
import Input from '../../components/input/Input'
import Sideimage from '../../assets/images/contactImg.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.name === '' || formDetails.email === '' || formDetails.message === '') {
      toast.error('All fields are required');
      return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwP4pGV_hs2hJsQ7gxwM8p-6zygOIZ-Dki6La8wGKCsW51v5vX7D-ZCAi95goDczhj2/exec';

    const formData = new FormData(e.target);

    await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
      .then(() => {
        // Since 'no-cors' mode is used, we cannot access the response directly
        console.log('Form submitted successfully');
        toast.success('Form Submitted Successfully');
        setFormDetails({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error!', error.message);
        toast.error('Form submission failed');
      });
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