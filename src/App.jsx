import './App.css'
import { Element } from 'react-scroll'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {

  return (
    <>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='service'>
        <Service />
      </Element>
      <Element name='experiece'>
        <Experience />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
      <Element name='footer'>
        <Footer />
      </Element>
    </>
  )
}

export default App
