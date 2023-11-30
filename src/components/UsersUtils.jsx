import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsersEmails = async () => {
   const response = await axios.get(baseUrl)
   return response.data.map(user => user.email)
}

export {getUsersEmails}