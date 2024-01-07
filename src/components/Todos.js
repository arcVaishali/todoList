import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div>
      <h3>Todo List</h3>
      <TodoItem todo={props.todos[0]}/>
    </div>
  )
}



