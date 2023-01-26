import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FilterContextProvider } from './context/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>,
)
