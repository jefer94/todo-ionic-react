// @flow
import React, { createContext, useState } from 'react'

export const ToDoContext = createContext()

export function ToDoContextProvider({children}) {
  const key = '__TO_DO_ITEMS__'
  const keyId = '__TO_DO_LAST_ID__'
  const storeItems = JSON.parse(localStorage.getItem(key) || '[]')
  const storeId = JSON.parse(localStorage.getItem(keyId) || '0')
  const [items, setItems] = useState(storeItems)
  const [autoIncrementToDoId, setAutoIncrementToDoId] = useState(storeId)

  function addItem(label) {
    const id = autoIncrementToDoId + 1

    const newItems = [].concat(items, {id, label})

    setAutoIncrementToDoId(id)
    setItems(newItems)

    localStorage.setItem(keyId, JSON.stringify(id))
    localStorage.setItem(key, JSON.stringify(newItems))
  }

  function removeItem(id) {
    const newItems = items.filter(v => v.id !== id)

    setItems(newItems)

    localStorage.setItem(key, JSON.stringify(newItems))
  }



  return (
    <ToDoContext.Provider value={{addItem, removeItem, items}}>{children}</ToDoContext.Provider>
  )
}

export const ToDoContextConsumer = ToDoContext.Consumer