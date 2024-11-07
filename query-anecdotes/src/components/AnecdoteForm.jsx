import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../services/request"
import { useNotificationDispatch } from "../NotificationContext"
const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()


  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess : (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      dispatch(`you added '${newAnecdote.content}'`)

    },
    onError: (error) => {
      if (error.response.data.error.includes('too short anecdote')) {
        // Dispatch an action to show an error message or handle the error in another way
        dispatch('too short anecdote, must have length 5 or more');
      } else {
        // Handle other types of errors
        console.error('Error creating anecdote:', error);
      }
  }
})

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})

}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
