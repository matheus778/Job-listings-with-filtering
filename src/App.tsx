import { useContext, useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { FilterContext, FilterContextProvider } from './context/context';
import { CardProps } from './components/Card';
import jobsData from './data/data.json'
import './App.css'

function App() {
  const [jobList, setJobList] = useState<CardProps[]>([])
  const {state, setState} = useContext(FilterContext);

  useEffect(() => {
    if(state.name.length == 0) {
      setJobList(jobsData);
    }
    else {
      let newState:CardProps[];
      for(const i of state.name){
       newState = [... jobsData.filter(fill => fill.languages.includes(i) || fill.tools.includes(i) || fill.role.includes(i) || fill.level.includes(i))]
       setJobList(newState)
      }
    }
    
  }, [state])


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