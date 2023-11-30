import React from 'react'
import {getItems,updateItem,createItem,deleteItem,getItem} from "./Demo9_Utils"
import {getUsersEmails} from "./UsersUtils"
export default function Demo9_Comp() {

    const getUsers = async () => {
        const data = await getItems('https://jsonplaceholder.typicode.com/users/')
        console.log(data)
    }

    const getTvShows = async () => {
        const data = await getItems('https://api.tvmaze.com/shows')
        console.log(data)
    }

    const getEmails = async () => {
        const data = await getUsersEmails()
        console.log(data)
    }


  return (
    <div>
    <button onClick={getUsers}>Get Data</button>
    <button onClick={getTvShows}>Get Shows</button>
    <button onClick={getEmails}>Get Emails</button>


    </div>
  )
}
