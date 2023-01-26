import bgHeaderDesktop from '../../assets/bg-header-desktop.svg';
import iconRemove from '../../assets/icon-remove.svg'
import './style.css';

export function Header() {
  return (
    <>
      <header className="header">
        <img src={bgHeaderDesktop} alt="imagem de fundo" />
      </header>

      <div className="filter">
      <div className="filter-content">
        <div className="filter-selected">
          <span>Frontend</span>
          <div className="remove">
            <img src={iconRemove} alt="" />
          </div>
        </div>
      </div>

      <a href="#" className="clear">Clear</a>
      </div>
    </>
    
  );
}