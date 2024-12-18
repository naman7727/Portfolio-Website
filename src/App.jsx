import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
// import Experiences from './components/Experiences'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Technologies from './components/Technologies'

function App() {


  return (
    <>
      <div className='overflow-x-hidden bg-[#f7f0ef] text-b antialiased selection:bg-cyan-300 selection:text-cyan-300'>
        <div className='fixed top-0 -z-10 h-full w-full'></div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          {/* <Experiences /> */}
          <Education />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
