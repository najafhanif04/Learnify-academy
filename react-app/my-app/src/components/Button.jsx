import React from 'react'

export default function Button({message, color}) {
  return (
    <div>
      <button className={`btn ${color}`}>{message}</button>
    </div>
  )
}
