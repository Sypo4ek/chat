import React from 'react'
import { createRoot } from 'react-dom/client'
import  './style.css'
import { Notifications } from './components/notification'
import { Main } from './components/main'

const container = document.getElementById('root')
const root = container && createRoot(container)

export type TMessage = {
  user: string
  message: string
  id: number
}
  
export const currentId = 0

const App = () => (
  <Notifications> 
    <Main/>
  </Notifications>
)

root?.render(<App />)