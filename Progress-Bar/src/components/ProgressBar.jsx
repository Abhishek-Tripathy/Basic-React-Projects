import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ProgressBar({value}) {

   const [percent, setPercent] = useState(value)


   useEffect(() => {
      setPercent(Math.min(100, Math.max(value, 0)))
   }, [value])

  return (
    <div className='relative h-[20px] w-[80%] bg-gray-300 border border-black rounded-lg'>
      <span className={`flex absolute inset-0 items-center justify-center ${percent > 49 ? "text-white" : "text-black"}`}>{percent.toFixed()}%</span>
      <div className='h-full bg-orange-400 rounded-lg' style={{ width: `${percent}%` }} />
    </div>
  )
}

export default ProgressBar 