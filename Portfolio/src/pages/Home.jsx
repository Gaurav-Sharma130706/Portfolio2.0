import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects/Project'
import Aside from '../components/Aside'

function Home() {
  return (
    <div className="grid gap-5 m-5!"
      style={{
        gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)',
        gridTemplateAreas: `
          "about aside"
          "skills aside"
          "projects aside"
        `
      }}
    >
      <div style={{ gridArea: 'about' }}><About /></div>
      <div style={{ gridArea: 'skills' }}><Skills /></div>
      <div style={{ gridArea: 'projects' }}><Projects /></div>
      <div style={{ gridArea: 'aside' }}><Aside /></div>
    </div>
  )
}

export default Home;