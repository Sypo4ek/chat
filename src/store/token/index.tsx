
import React, { 
  ReactNode, 
  createContext, 
  useCallback, 
  useContext, 
  useEffect, 
  useLayoutEffect, 
  useRef, 
  useState } from "react";
import { request } from "@/services/request";
import { useLocation, useNavigate } from "react-router-dom";


const TokenContext = createContext<{token:string | null, setTokens:(access?: string, refresh?: string)=> void}>({
  token: null,
  setTokens: (access, refresh)=> {}
})


export const Token = ({children}:{children: ReactNode}) =>{
  const [token, setToken] = useState<string| null>(null)
  const local = localStorage.getItem('pioneriaToken')
  const {pathname} = useLocation()
  const pathRef = useRef<string>('')
  const navigate = useNavigate()

  const getCookieToken = useCallback(()=>{ 
    const matches = document.cookie.match(/'pioneriaToken'=(.+?)(;|$)/)
    matches ? decodeURIComponent(matches[1]) : undefined
  },[])

  const setCookieToken = useCallback((data: string)=>{
    document.cookie = `pioneriaToken=${data}`
  },[])

  const removeCookieToken = useCallback(()=>{
    document.cookie = `sidebar=;expires=${new Date(0)}`
  },[])

  const setTokens = useCallback((access?: string, refresh?: string)=>{
    if(!access || !refresh){
      removeCookieToken()
      setToken(null)
      localStorage.removeItem('pioneriaToken')
    }
    else {
    setCookieToken(refresh)
    setToken(access)
    localStorage.setItem('pioneriaToken', access)}
  },[])

  useEffect(()=>{
    if(local){
      setToken(local)
    }
  },[])

  useEffect(()=>{
    if(!token && !local){
      pathRef.current = pathname
      navigate('/auth')
    }else {
      if(pathname.includes('auth')){
        navigate(pathRef.current.includes('auth') ? '/' : pathRef.current)
        pathRef.current = '/'
      }
    }
    
  },[token,local])


  return <TokenContext.Provider value={{token, setTokens}}>{children}</TokenContext.Provider>
}

export const useContextToken = () => {
  const context = useContext(TokenContext)
  return context
}

export const setTokens = () => {
  const context = useContext(TokenContext)
  return context.setTokens
}