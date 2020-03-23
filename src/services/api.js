import axios from 'axios'

const api = axios.create({
  baseURL: 'https://liveposts-api.herokuapp.com/post'
})

export default api