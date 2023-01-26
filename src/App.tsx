import './App.css'
import bgHeaderDesktop from './assets/bg-header-desktop.svg';
import { Card } from './components/Card';

function App() {

  return (
    <div className="App">
      <header className="header">
        <img src={bgHeaderDesktop} alt="imagem de fundo" />
      </header>
      
      <Card />
    </div>
  )
}

export default App