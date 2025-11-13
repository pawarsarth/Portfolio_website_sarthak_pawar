import { Navbar } from './components/navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/skill'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { Achievements } from './components/achievemtn'
import { Contact } from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
