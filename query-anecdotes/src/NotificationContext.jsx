import { createContext, useContext, useReducer } from "react";

const NotificationReducer = (state, action) =>{
    switch(action.type){
        case "NEW_NOTICE":
            return action.payload
        case "CLEAR_NOTICE":
            return null
        default: return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [message, notificationDispatch] = useReducer(NotificationReducer, null)

    const dispatchNotification = (message) => {
        // console.log('FROM dispatchNotification', message)
        notificationDispatch({type: 'NEW_NOTICE', payload : message})
        setTimeout(()=> {
            notificationDispatch({type:'CLEAR_NOTICE'})
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={[message, dispatchNotification]}>
            {props.children}
        </NotificationContext.Provider>
    )
}


export const useNotificationMessage = () => {
    const messageAndDispatch = useContext(NotificationContext)
    return messageAndDispatch[0]
}
export const useNotificationDispatch = () => {
    const messageAndDispatch = useContext(NotificationContext)
    return messageAndDispatch[1]
}

export default NotificationContext