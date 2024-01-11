import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AuthService } from '@/services/auth'
import { useContextToken } from '@/store/token'


export default function Menu (){
  
  const { token, setTokens } = useContextToken()
  const authService  =  new AuthService()

  const handleClick  = useCallback(()=>{
    console.log('click')
    authService.logout()
  },[])
  if(!token){
    return null
  }
  
  return (
    <div>
        <Link to="/"> game</Link>
        <Link to="/inventory"> inventory </Link>
        <Link to="/settings"> settings </Link>
        <div onClick={handleClick}> logout </div>
    </div>
  )
}