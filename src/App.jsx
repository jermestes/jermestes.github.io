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
      <header className="px-1">
        <img src="/h1-temp-lettering.svg" alt="" className='m-auto text-2xl m2t:text-5xl pt-2.5 m2t:w-[18.25rem] t2d:w-[24.4375rem]'/>
        <h1 className="sr-only">Jerm Estes</h1>
        <Hero />
      </header>

      <main className="px-5 m2t:px-[10%]">
        <Section heading="About Me" body={bodytextList.about}/>

        <Section heading="Projects" body={bodytextList.projects}>
          <div className="flex flex-row flex-wrap gap-5">
            {projectList.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </Section>
        
        <Section heading="Contact"body={bodytextList.contact}>
          <ul className="list-disc *:text-darkblue list-inside *:underline *:hover:text-altblue *:text-sm *:m2t:text-lg *:t2d:text-2xl">
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
