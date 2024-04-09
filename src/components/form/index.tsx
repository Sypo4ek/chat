import React, { useCallback, useState } from "react";
import { FormStyled } from './styled'

type TForm = {
  onSubmit:(value:string)=> void
}

export const Form  = ({onSubmit}:TForm) :JSX.Element => {
  const [state, setState] = useState<string>('');
  const handleSubmit = useCallback((e?: any)=>{
    e?.preventDefault()
    if(!!state.trim().length){
      onSubmit(state)
    }
    setState('')
  },[state])
  return  ( 
    <FormStyled onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Send</button>
    </FormStyled>
  )
}