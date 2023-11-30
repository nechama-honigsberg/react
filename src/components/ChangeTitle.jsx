import React, { useState, useEffect } from "react";

function ChangeTitle() {

    const [title, setTitle] = useState(document.title)

    useEffect(function change(){
        document.title = title;
    },[title])
    

    return (
        <>
            <h2>{title}</h2>
            <input type="text" onChange={(e) => (setTitle(e.target.value))}></input>
        </>
    )

}
export default ChangeTitle;