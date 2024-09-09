import Bio from './components/Bio/Bio'
import ContactForm from './components/ContactForm/ContactForm'
import EducationSection from './components/EducationSection/EducationSection'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/skills/skills'
import WorkExperience from './components/WorkExperience/WorkExperience'

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
      <Hero/>
      <Navbar/>
      <Projects/>
      <Bio/>
      <Skills/>
      <WorkExperience/>
      <EducationSection/>
      <ContactForm/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
