import React from 'react'
import { ToDoContextProvider } from './ToDoContext'

const Contexts = ({ children }) =>
  <ToDoContextProvider>
    {children}
  </ToDoContextProvider>

export default Contexts