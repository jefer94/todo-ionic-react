import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Menu, { addMenuItem } from './Menu'
import lang from './lang'

export default function() {
  const items = [
    addMenuItem('/', lang.home)
  ]
  return (
    <Menu items={items}>
      <p>hhh</p>
    </Menu>
    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Ionic Blank</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent className="ion-padding">
    //     The world is your oyster.
    //     <p>
    //       If you get lost, the{' '}
    //       <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
    //         docs
    //       </a>{' '}
    //       will be your guide.
    //     </p>
    //   </IonContent>
    // </IonPage>
  )
}