import axios from 'axios'
const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNote = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteAnecdote = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    const anecdoteToUpdate = response.data

    const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
    }

    const result = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
    return result.data
}
export default { getAll, createNote, voteAnecdote }