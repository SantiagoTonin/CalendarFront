import React from 'react'

export default function cellContent({dayEvent}) {
  const image = dayEvent[0]?.images[0]?.path
  const task = dayEvent[0]?.tasks[0]?.postMessage

  return (
    <div className="evento-marker">
      <span>{task}</span>
      <img src={image} alt=""></img>
  </div>
  )
}
