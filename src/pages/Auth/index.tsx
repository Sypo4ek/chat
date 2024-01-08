import React, { ChangeEvent, useCallback, useState } from 'react'
import { Form, Input, Label, Title, Wrapper } from './styled'
import { useContextToken } from '@/store/token'
import { useNavigate } from 'react-router-dom'

export default function Auth  () {
  const { token, setTokens} = useContextToken()
  const navigate = useNavigate()
  const [form, setForm] = useState<Record<string, string>>({
    login:'',
    password: ''
  })

  const handleInputChange:(e: ChangeEvent<HTMLInputElement>)=> void = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm(prev=>({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = useCallback((e?: any )=>{
    e?.preventDefault()
    setTokens((token?? '') + 1, 'refreshTestToken')
    navigate('/')
  },[form])
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="login"> Логин </Label>
        <Input 
          name="login" 
          value={form.login} 
          onChange={handleInputChange}
        />
        <Label htmlFor="password"> Пароль </Label>
        <Input 
          name="password" 
          type="password" 
          value={form.password} 
          onChange={handleInputChange}
        />
        <Input 
          type='submit' 
          value="Зайти"
        />
      </Form>
    </Wrapper>
  )
}