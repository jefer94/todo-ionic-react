import React, { useState, useContext } from 'react';
import { IonList, IonItem, IonInput, IonButton, IonLabel, IonBadge } from '@ionic/react'
import alert from './Alert'
import lang from './lang'
import { ToDoContext } from './Contexts/ToDoContext';

import './ListCrud.css'

// export function addMenuItem(url, name) {
//   return {url, name}
// }

export function addToDoItem(id, label) {
  return {id, label}
}

export default function({children}) {
  const {addItem, removeItem, items} = useContext(ToDoContext)
  const [input, setInput] = useState('')

  function add() {
    addItem(input)
    setInput('')

    alert(lang.createMessage, 'success');
  }

  function remove(id) {
    removeItem(id)
    alert(lang.removeMessage, 'danger')
  }

  return (
    <div className="list-wrapper">
      <div className="list">
        <IonItem>
          <IonLabel position="floating">{lang.new}</IonLabel>
          <IonInput onIonChange={v => setInput(v.target.value)} value={input}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={add}>{lang.add}</IonButton>

        <IonList>
          {items.map(({id, label}, key) => 
            <IonItem key={key}>
              <IonLabel>{label}</IonLabel>
              <IonBadge slot="end" color="danger" onClick={() => remove(id)}>{lang.remove}</IonBadge>
            </IonItem>
          )}
        </IonList>
      </div>
    </div>
  )
}
