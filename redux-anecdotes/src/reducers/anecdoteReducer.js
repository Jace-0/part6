import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdote'


const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers : {
    appendAnecdote(state, action){
      state.push(action.payload)
      // return [...state, anecdote]
    },
    setAnecdote(state, action){
      return action.payload
    },
    updateAnecdote(state, action) {
      return state.map(anecdote =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      )
    }
  }
})


export const { appendAnecdote, setAnecdote, updateAnecdote} = anecdoteSlice.actions

export const initialAnecdotes = () => {
  // this is a Redix Thunk Library that returns a function
  return async dispatch => {
    const anecdote = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdote))
  }
}


export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote =  await anecdoteService.createNote(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    try {
      const updatedAnecdote = await anecdoteService.voteAnecdote(id)
      dispatch(updateAnecdote(updatedAnecdote))
    }catch (error) {
      console.error('Error voting for anecdotes:', error)
    }
  }
}

export default anecdoteSlice.reducer