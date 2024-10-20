
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'

function App() {

  const [value, setValue] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setValue(val => val+1)
    }, 100)
  }, [])

  return (
    <div className='flex flex-col items-center gap-1'>
      <h1>Progress Bar</h1>
      <ProgressBar value={value} />
    </div>
  )
}

export default App
