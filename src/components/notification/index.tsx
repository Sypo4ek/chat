import React, { ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Counter, Wrapper } from "./styled";

export const Context  = createContext({
  count: 0,
  inc: ()=>{}
})

export const Notifications =  ({children}:{children: ReactNode}):JSX.Element => {
  const [state, setState] = useState(0)
  const refTimer = useRef<any>()

  const inc = useCallback(()=>{
    refTimer.current && clearTimeout(refTimer.current)
    refTimer.current = setTimeout(()=> setState(prev=> prev - 1), 3000)
    setState(prev=> prev+1)
  },[state])

  const handleClear = ()=>{
    refTimer.current && clearTimeout(refTimer.current)
    setState(0)
  }

  return <Context.Provider value={{count: state, inc}}>
    <Wrapper>
     {!!state &&  <Counter onClick={handleClear}>{state}</Counter>}
    </Wrapper>
    {children}
  </Context.Provider>
}
