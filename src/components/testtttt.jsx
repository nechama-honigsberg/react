import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Http() {
    const [users, setUsers] = useState({})
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

    const getData = async () => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/users';
        let options = {
            method: 'GET',
        };
        let res = await fetch(apiUrl, options);
        if (res && res.ok) {
            let resData = await res.json();
            console.log('resData', resData);
        } else {
            console.log('error');
        }
    }
    const getByAxios = async () => {
        const id = 1;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUsers(data);
    }
    const postByAxios = () => {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        axios.post('/users', data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getByAxios()
    }, [])
    
    return (
        <>
            <h1>http</h1>
            <div style={{ backgroundColor: "olive" }}>
                name: {users.name} <br />
            </div>
            <button onClick={getData}>Function getData</button>
            <button onClick={postByAxios}>Function postByAxios</button>
        </>
    )
}
