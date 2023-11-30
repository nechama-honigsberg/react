import React, { useState, useEffect } from "react";

export default function UseEffect(props) {

    const [counter, setCounter] = useState(null);

    // componentDidMount() מקביל ל
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter - 1)
        }, 1000)
        // componentWillUnmount() מקביל ל
        return () => {
            clearInterval(intervalId)
        }
    })
    // componentDidUpdate() מקביל ל
    useEffect(() => {
        if (counter === 0)
            props.setIsShowComponent(false)
    }, [counter])

    useEffect(() => {
        setCounter(props.num)
    }, [props.num])






    
    return (
        <>
            <h2>counter {counter}</h2>
        </>
    )
}