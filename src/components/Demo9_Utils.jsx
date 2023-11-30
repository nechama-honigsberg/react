import axios from 'axios'


  //  GET ALL
  const getItems = async (url) => {
    const response = await axios.get(url)
    return response.data
    
  }

  // GET BY ID
  const getItem = async (url, id) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
  }


  // POST - Create a new user
  const createItem = async (url) => {
    // axios.post receives 2 arguments (url - the url of the ws, obj - the body of the request)
    const response = await axios.post(url, obj)
    return response.data

  }

  // PUT - Update a user
  const updateItem = async (url) => {
    // axios.put receives 2 arguments (url - the url of the ws, obj - the body of the request)
    const response = await axios.put(`${url}/${id}`, obj)
    return response.data
  }

  const deleteItem = async (url) => {
    // axios.delete receives 1 arguments (url + id - the url of the ws)
    const response = await axios.delete(`${url}/${id}`)
    return response.data
  
  }

  export {createItem,deleteItem,getItem,updateItem, getItems} 
//   export cant export an object with as much properties as as we need
//   export default can only export one property