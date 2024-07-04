//Wrap the main componenet inside RecoilRoot
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, netwrokAtom, notificationAtom, totalNotificationSelector } from './atoms'


function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(netwrokAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >=100 ? "99+":networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount  >=100 ? "99+":jobsAtomCount})</button>
      <button>Notification ({notificationAtomCount >=100 ? "99+":notificationAtomCount})</button>
      <button>Messaging ({messagingAtomCount  >=100 ? "99+":messagingAtomCount})</button>


      <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App
