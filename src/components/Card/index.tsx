import { FormEvent, useContext } from 'react';
import { FilterContext } from '../../context/context';

import './style.css';

export interface CardProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
}

export function Card (props: CardProps) {
  const {state, setState} = useContext(FilterContext);

  const locahost = 'http://localhost:5173/src/data';

  let featuredBorderColor = props.featured ? 'var(--primary)': 'var(--cyan-100)'
  
  function handleAddFilter(filter: string, event:FormEvent) {
    event.preventDefault()

    if(state.name.includes(filter) || state.name.length > 5) {
      return;
    }

    let newState = state.name;
    newState.push(filter)
    setState({name: newState})
  }

  return (
    <div className="card" style={{
      borderColor: featuredBorderColor
    }}>
      <div className="info">
        <img src={`${locahost}${props.logo}`} alt="" />
        <div className="details">
          <div>
            <span>{props.company}</span>

            {props.new && <a href="#">NEW</a> }
            {props.featured &&  <a href="#">FEATURED</a> }

          </div>

          <h2>{props.position}</h2>

          <div>
            <span>{props.postedAt}</span>
              <div className="dot"></div>
            <span>{props.contract}</span>
              <div className="dot"></div>
            <span>{props.location}</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <a href="#" onClick={(event) => handleAddFilter(props.role, event)}>{props.role}</a>

        <a href="#" onClick={(event) => handleAddFilter(props.level, event)}>{props.level}</a>

        {props.languages.map((lang, index) => {
          return (
            <a key={`${props.id}${index}`} href="#"
              onClick={(event) => handleAddFilter(lang, event)}>
                {lang}
            </a>
          )
        })}

        {props.tools.map((tool, index) => {
          return (
            <a key={`${props.id}${index}`} href="#" 
              onClick={(event) => handleAddFilter(tool, event)}
            >
              {tool}
            </a>
          )
        })}
      </div>
    </div>
    
  );
}