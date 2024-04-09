import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import  './style.css'
import { Checkbox, Wrapper } from './styled'
import { Form } from './components/form'
import { List } from './components/list'
import { Context, Notifications } from './components/notification'

const container = document.getElementById('root')
const root = container && createRoot(container)

export type TMessage = {
  user: string
  message: string
  id: number
}
  
export const currentId = 0
const usersName:Record<number, string> = {
  0: 'Вы',
  1: "Николай",
  2: "Анна",
  3: "Ира",
  4: "Иван"
}

const Main = ():JSX.Element=> {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const socket = new WebSocket('ws://localhost:9000');
  const [isAlwaysSendMain, setIsAlwaysSendMain] = useState<boolean>(false)
  const {inc} = useContext(Context)

  function getRandomId():number {
    const min = 0
    const max = 4
    return Math.floor(Math.random() * (max - min) + min);
  } 
  
  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if(!Array.isArray(data)){
        inc()
        setMessages(prev => ([...prev, data]));
      }else {
        setMessages(data);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = useCallback((value:string) => {
    const id = isAlwaysSendMain ? currentId : getRandomId()
    socket.send(JSON.stringify({ message: value, user: usersName[id], id }));
  },[socket, isAlwaysSendMain])
  return    ( 
    <Wrapper>
      <Checkbox isActive={isAlwaysSendMain} onClick={()=>setIsAlwaysSendMain(prev=> !prev)}>
      {isAlwaysSendMain ?  'Отправитель всегда я': 'Отправлять всегда от меня'}
      </Checkbox>
      <Form onSubmit={sendMessage}/>
      <List messages={messages}/> 
    </Wrapper>
  )
}

const App = () => {

  return (
    <Notifications> 
      <Main/>
    </Notifications>
  )
}

root?.render(<App />)