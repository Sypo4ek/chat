import { TMessage, currentId } from "@/index";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../notification";
import { Checkbox, Wrapper } from "./styled";
import { Form } from "../form";
import { List } from "../list";

const usersName:Record<number, string> = {
  0: 'Вы',
  1: "Николай",
  2: "Анна",
  3: "Ира",
  4: "Иван"
}
const soket = 'ws://localhost:9000'

export const Main = ():JSX.Element=> {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const socket = new WebSocket(soket);
  const [isAlwaysSendMain, setIsAlwaysSendMain] = useState<boolean>(false)
  const {inc} = useContext(Context)
  const checkboxLabel = isAlwaysSendMain ?  'Отправитель всегда я': 'Отправлять всегда от меня'

  function getRandomId():number {
    const min = 0
    const max = 4
    return Math.floor(Math.random() * (max - min) + min);
  } 
  
  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if(Array.isArray(data)){
        setMessages(data);
        return 
      }

      inc()
      setMessages(prev => ([...prev, data]));
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = useCallback((value:string) => {
    const id = isAlwaysSendMain ? currentId : getRandomId()
    socket.send(
      JSON.stringify({ message: value, user: usersName[id], id })
    );
  },[socket, isAlwaysSendMain])

  const handleCheckbox = ()=> setIsAlwaysSendMain(prev => !prev)
  
  return    ( 
    <Wrapper>
      <Checkbox isActive={isAlwaysSendMain} onClick={handleCheckbox}>
      {checkboxLabel}
      </Checkbox>
      <Form onSubmit={sendMessage}/>
      <List messages={messages}/> 
    </Wrapper>
  )
}