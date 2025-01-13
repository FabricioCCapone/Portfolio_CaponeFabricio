import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/Body.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <div id='about'>
          <Body />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
