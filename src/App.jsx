import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Section from './components/Section'
import Project from './components/Project'
import { projectList, bodytextList } from './content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="px-1 mb-9">
        <h1 className="text-center text-2xl sm:text-5xl">Jerm Estes</h1>
        <Hero />
      </header>

      <main className="px-5">
        <Section heading="About Me" body={bodytextList.about}/>

        <Section heading="Projects" body={bodytextList.projects}>
          {projectList.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Section>
        
        <Section heading="Contact"body={bodytextList.contact}>
          <ul className="list-disc list-inside">
            <li><a href="mailto:estesjeremy96@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/jeremy-estes/">LinkedIn</a></li>
            <li><a href="https://github.com/jermestes">Github</a></li>
          </ul>
        </Section>
      </main>

      <footer className="bg-darkblue text-white text-center py-3">
        <p>© 2025 Jeremy Estes</p>
      </footer>
    </>
  )
}

export default App
