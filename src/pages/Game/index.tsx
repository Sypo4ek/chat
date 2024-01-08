import { useContextToken } from '@/store/token'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Auth'

export default function Game  () {
  const { token} = useContextToken()
  
  return <div>Game page token: {token}
  
    
      <Routes>
        <Route path='/auth' element={<Auth/>}></Route>
      </Routes>
    
  
  </div>
}