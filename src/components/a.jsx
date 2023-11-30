import React, { useState, useEffect } from "react";

export default function A() {

  // const [name, setName] = useState('sara');

  // useEffect(function change() {
  //   console.log('hello to', name)
  // }, [name])

  // return (
  //   <>
  //     <h2>hello to {name}</h2>
  //     <input type="text" onChange={(e) => (setName(e.target.value))}></input>
  //   </>
  // )

  const [name, setName] = useState({ fName: "", lName: "" });

  const updateFName = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <form>
        <label htmlFor="first_name1">enter first name 1</label>
        <input type='text' id='first_name1' name='fName' value={name.fName}
          onChange={updateFName} />

        <br />
        <label htmlFor="last_name1">enter last name 1</label>
        <input type='text' id='last_name1' name='lName' value={name.lName}
          onChange={updateFName} />
        <br />
      </form>
      <h1>Your name: {name.fName} {name.lName}</h1>    </>
  )

}