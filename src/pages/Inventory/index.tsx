import { useContextToken } from '@/store/token'
import React from 'react'

export default function Inventory () {
  const { token} = useContextToken()
  
  return <div>inventory page token: {token}</div>
}