import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"
import Notification from './Notification'




const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)   
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))

    dispatch(setNotification(`you voted '${anecdote.content}'`, 10))

  }
  
  const filteredAndSortedAnecdotes = [...anecdotes]
    //  First filter the anecdotes
    .filter(anecdote => {
      if (!filter) return true // if no filter return true 
      return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })

    // Then sort them by votes
    .sort((a,b) => b.votes - a.votes)

  return(
    <div>
    <h2>Anecdotes</h2>
      <Notification/>

      {filteredAndSortedAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
       </div>
      )}
    </div>
  )
}
export default AnecdoteList