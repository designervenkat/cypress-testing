import { useState } from "react"

type FormsProps = {
  onSubmit: (data: {name: string, email: string}) => void
}

export default function Forms({ onSubmit }: FormsProps) {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({name, email})
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      
      <label htmlFor="email">Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

      <button type="submit">Submit</button>


    </form>
  )
}
