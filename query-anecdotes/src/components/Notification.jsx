import { useNotificationMessage } from "../NotificationContext"
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const notice = useNotificationMessage()
  
  if (!notice) return null

  // console.log('this is notice ', notice)
  return (
    <div style={style}>
      {notice}
    </div>
  )
}

export default Notification
