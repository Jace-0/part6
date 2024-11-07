import { NotificationContextProvider, useNotificationDispatch } from "../NotificationContext";
const notificationMiddleware = (request, response, next) => {
    const NotificationComponent = () => {
        const dispatch = useNotificationDispatch();
  
      const { content } = request.body;
  
      if (request.method === 'POST' && (!content || content.length < 5)) {
        dispatch('too short anecdote, must have length 5 or more');
        return response.status(400).json({
          error: 'too short anecdote, must have length 5 or more',
        });
      } else {
        next();
      }
    };
  
    // return (
    //   <NotificationContextProvider>
    //     <NotificationComponent />
    //   </NotificationContextProvider>
    // );
  };
  
  export default notificationMiddleware;