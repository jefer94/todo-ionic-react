// import React, { useState } from 'react';
// import { IonToast, IonContent, IonButton } from '@ionic/react';

// export default function({color, message, show}) {
//   // const [internalShow, setInternalShow] = useState(false)
//   const duration = 2000
//   const color = color

//   // isOpen={showToast2}

//   // if (show)
//   //   setTimeout(() => )

//   return (
//       <IonToast
//         isOpen={show}
//         message={message}
//         // duration={duration}
//         color={color}
//       />
//   )
// }

export default function(message, color) {
  const toast = document.createElement('ion-toast')
  toast.message = message
  toast.duration = 2000
  toast.color = color

  document.body.appendChild(toast)
  return toast.present()
}