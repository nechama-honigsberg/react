import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
    const [product, setProduct] = useState({})

    const params = {id:1};
    // const params = useParams() 
    console.log("params!!!", params)
    // {id: 1}
    // useParams will return the params we applied when creating the route (anything with : after the route (i.e: /product/:id))
   

    const getProd = async () => {
        const id = params.id
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        getProd()
    }, [])

    return (
        <div style={{ backgroundColor: "olive" }}>
            name: {product.name} <br />
            {/* address: {product.address} <br /> */}

        </div>
    )
}
