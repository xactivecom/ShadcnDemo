import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="p-8 text-red-600">Demo of Shadcn Components</h1>

      <div className="grid w-full max-w-sm items-center gap-1.5 p-8">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Name" />

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" />
      </div>

      <div className="p-8">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
