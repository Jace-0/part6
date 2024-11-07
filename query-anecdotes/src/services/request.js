import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
    axios.get(baseUrl).then(res => res.data)


export const createAnecdote = newAnecdote => 
    axios.post(baseUrl, newAnecdote).then(res => res.data)


export const voteAnecdote = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    const anecdoteToUpdate = response.data
    console.log('it came here SERVER')
    const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
    }

    const result = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
    return result.data
}
// export default { getAnecdotes, createAnecdote, voteAnecdote }