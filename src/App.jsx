import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Element } from 'react-scroll'

function App() {

  return (
    <>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
    </>
  )
}

export default App
