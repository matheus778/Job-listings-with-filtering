import { useContext } from 'react';
import { FilterContext } from '../../context/context';

import bgHeaderDesktop from '../../assets/bg-header-desktop.svg';
import iconRemove from '../../assets/icon-remove.svg'
import './style.css';

export function Header() {
  const {state, setState} = useContext(FilterContext)

  function handleRemoveFilter(index:number) {
      let newState:string[] = state.name
      newState.splice(index, 1);
      setState({name: newState});
  }

  function handleClearFilter() {
    let newState:string[] = [];
    setState({name: newState});
  }

  return (
    <>
      <header className="header">
        <img src={bgHeaderDesktop} alt="imagem de fundo" />
      </header>

      {state.name.length > 0 && (
        <div className="filter">
        <div className="filter-content">
          {state.name.length > 0 && state.name.map((filter, index) => {
            return (
              <div key={`${filter}${index}`} className="filter-selected">
                <span>{filter}</span>
                <div onClick={() => handleRemoveFilter(index)} className="remove">
                  <img src={iconRemove} alt="" />
                </div>
              </div>
            )
          })}
        
        </div>
  
        <a href="#" className="clear" onClick={handleClearFilter}>Clear</a>
        </div>
      )}
    </>
    
  );
}