import React from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Redux Toolkit Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
