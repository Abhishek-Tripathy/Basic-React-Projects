import React from 'react'

function Cell({filled, onClick}) {
  return (
    <button className={`bg-transparent border border-black h-0 pb-[100%] ${filled ? "bg-green-500" : ""}`}
    type='button' onClick={onClick}></button>
  )
}

export default Cell