'use client'

import { useState } from "react"

type User = {
  username: string,
  token: string
}

export default function Auth() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {

      const response = await fetch('/api/auth', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
      })
      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      setUser(data)
      setError('')    
    } catch (error: any) {

      setError(error.message)
      setUser(null)
      
    }
  }




  return (
    <div>
      
      <h1>Login</h1>

      <input type="text" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} />

      <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />


      <button onClick={handleLogin}>Login</button>


      {error && <p>{error}</p>}
      
      {user && (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>Token: {user.token}</p>
        </div>
      )}


    </div>
  )
}
