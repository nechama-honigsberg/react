import React, { useState, useEffect } from 'react'
import axios from 'axios'

// ES7+
export default function Http() {
    const [users, setUsers] = useState({})
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

    const getData = async () => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/users';
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        let res = await fetch(apiUrl, options);
        if (res && res.ok) {
            let resData = await res.json();
            console.log('resData', resData);
        } else {
            console.log('error');
        }
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        // console.log('data',data);


    }

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            // fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'GET',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json;charset=UTF-8'
            //     },
            // })
            .then(response => response.json())
            .then(json => console.log("json", json))
            .catch(err => console.log(err));
    }

    const postData = async () => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
        };
        let res = await fetch(apiUrl, options);
        if (res && res.ok) {
            console.log('res', res);

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
                {/* address: {product.address} <br /> */}

            </div>
            <button onClick={getData}>Function getData</button>
            <button onClick={postData}>Function postData</button>
            <button onClick={getPosts}>Function getPosts</button>
            <button onClick={postByAxios}>Function postByAxios</button>
        </>
    )
}
