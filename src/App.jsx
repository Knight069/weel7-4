// import { useState } from "react"
import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>

}

function MainApp() {
  const networkNotificatitonCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messageAtomCount = useRecoilValue(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector)


  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificatitonCount >= 100 ? "99+" : networkNotificatitonCount})
      </button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>
        Messaging ({messageAtomCount >= 100 ? "99+" : messageAtomCount})
      </button>
      <button>
        Notification (
        {notificationAtomCount >= 100 ? "99+" : notificationAtomCount})
      </button>

      <button>Me ()</button>
    </>
  );
}

export default App
