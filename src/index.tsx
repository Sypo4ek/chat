import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import  './style.css'
import { Token } from './store/token'
import { Main } from './pages/Main'

const container = document.getElementById('root')
const root = container && createRoot(container)

const App = () => {
  return (
      <StrictMode>  
        <BrowserRouter>
          <Token>
            <Main/>
          </Token>
        </BrowserRouter>    
      </StrictMode>
  )
}

root?.render(<App />)