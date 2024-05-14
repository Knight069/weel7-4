// import { useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, notifications, totalNotificationSelector } from "./atoms"
import { notifications, totalNotificationSelector } from "./atoms"
import { useEffect } from "react"
import axios from "axios";

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>

}

function MainApp() {
  // const networkNotificatitonCount = useRecoilValue(networkAtom)
  // const jobsAtomCount = useRecoilValue(jobsAtom)
  // const messageAtomCount = useRecoilValue(messagingAtom)
  // const notificationAtomCount = useRecoilValue(notificationAtom)
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  //consolidated
  const networkCount = useRecoilValue(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  // useEffect(() => {
  //   //fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res => {
  //     setNetworkCount(res.data)
  //   })
  // }, [])

  


  return (
    <>
      <button>Home</button>

      {/* <button>
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

      <button>Me ({totalNotificationCount})</button> */}

      <button>
        My Network (
        {networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>
        Messaging ({networkCount.messaging})
      </button>
      <button>
        Notification (
        {networkCount.notifications})
      </button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App
