import React from 'react'

export default function TodoItem({todo}) {
  return (
    <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
    </div>
  )
}
