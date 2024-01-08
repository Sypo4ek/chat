import { useContextToken } from '@/store/token'
import React from 'react'

export default function Settings () {
  const { token} = useContextToken()
  
  return <div>settings page token: {token}</div>
}