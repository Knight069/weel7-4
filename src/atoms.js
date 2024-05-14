import { atom, selector } from "recoil";


// export const networkAtom = atom ({
//     key: "networkAtom",
//     default: 104
// });

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 0,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 0,
// });

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 14,
// });

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({get}) => {
//     const networkAtomCount = get(networkAtom)
//     const jobsAtomCount = get(jobsAtom)
//     const messagingAtomCount = get(messagingAtom)
//     const notificationAtomCount = get(notificationAtom)
//     return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount
//   }
// });

// consolidated all atoms into a single atom and has 

// normal query
// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 0,
//         jobs: 0,
//         messaging: 0,
//         notifications: 0,
//     }
// });

import axios from "axios";
//asynchrounous functino data qwueeires
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get(
              "https://sum-server.100xdevs.com/notifications"
            )
            return res.data
        }
    })
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging
    }
})