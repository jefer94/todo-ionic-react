import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react'
import lang from './lang'

export function addMenuItem(url, name) {
  return {url, name}
}

export default function({items, children}) {
  return (
    <>
      <IonMenu side="start" id="first" contentId="content-menu" className="menu_main">
      {/* <IonMenu side="start" id="first" contentId="content-menu"> */}
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>{lang.list}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {items.map(({url, name}, key) => (
              <IonItem routerLink={url} key={key}>{name}</IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar color="tertiary">
          <IonMenuButton slot="start"/>
          <IonTitle>{lang.list}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {children}
    </>
  )
}

// import React from 'react';
// import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

// export function addMenuItem(url, name) {
//   return {url, name}
// }

// export default function() {
//   return (
//     <>
//       <IonMenu side="start" menuId="first">
//         <IonHeader>
//           <IonToolbar color="primary">
//             <IonTitle>Start Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonList>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//           </IonList>
//         </IonContent>
//       </IonMenu>

//       <IonMenu side="start" menuId="custom" className="my-custom-menu">
//         <IonHeader>
//           <IonToolbar color="tertiary">
//             <IonTitle>Custom Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonList>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//           </IonList>
//         </IonContent>
//       </IonMenu>

//       <IonMenu side="end" type="push">
//         <IonHeader>
//           <IonToolbar color="danger">
//             <IonTitle>End Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonList>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//           </IonList>
//         </IonContent>
//       </IonMenu>
//       <IonRouterOutlet></IonRouterOutlet>
//     </>
//   )
// }