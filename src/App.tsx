import './App.css'
import { Card } from './components/Card';
import { Header } from './components/Header';
import jobList from './data/data.json'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="job-list">
        {jobList.map(job => {
          return (
            <Card 
              key={job.id} 
              id={job.id}
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App