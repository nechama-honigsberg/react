// import { useState } from "react";

// const NameForm = () => {
//     const [userName, setUserName] = useState('');

//     const handleSubmit = (event) => {
//         alert(userName + ' :שם חדש נשלח');
//         event.preventDefault();
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>

//                 <input type="text" onChange={(e) => setUserName(e.target.value)} /> :שם
//             </label>
//             <br></br>
//             <input type="submit" value="שלח " />
//         </form>
//     )
// }
// export default NameForm;

import { useState } from 'react';

const ControlledLogin = () => {
    const [loginValues, setLoginValues] = useState({ email: '', password: '' })

    const handleSubmit = (event) => {
        alert(loginValues.email)
        event.preventDefault();
    }
    const updateValues = (event) => {
        setLoginValues({
            ...loginValues,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="form-group" >
                <label htmlFor="email-input" >Email</label>
                <input type="email" name="email" id="email-input" value={loginValues.email}
                    onChange={updateValues}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                    value={loginValues.password} onChange={updateValues}></input>
            </div>
            <button type="submit" >submit</button>
        </form>)
}

import React, { useRef } from 'react';
const NameForm = () => {

    const userName = useRef();

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + userName.current.value);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input defaultValue="Sara" type="text" ref={userName} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
// export default NameForm;
export  {ControlledLogin, NameForm};
