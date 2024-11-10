import './App.css'
import { Element } from 'react-scroll'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'

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
    </>
  )
}

export default App
