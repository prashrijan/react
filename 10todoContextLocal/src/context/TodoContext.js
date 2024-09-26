import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Read react",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const ToDoContextProvider = ToDoContext.Provider

export const useTodo = () => {
    return useContext(ToDoContext)
}