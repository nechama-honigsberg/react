import React, { useState } from "react";

function ListTasks() {
    const [tasks, setTasks] = useState([
        { code: 1, title: "Clean", description: "clean the whole house", done: true },
        { code: 2, title: "do homework", description: "clean the whole house", done: false },
    ]);
    const [selectTasks, setSelectTasks] = useState("");

    function add() {
        setTasks([...tasks, selectTasks]);
    }
    function remove(item) {
        setTasks(tasks => tasks.filter(x => x !== item));
    }
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.code}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        Done? <input type="checkbox" checked={task.done}
                            onChange={(e) => selectItem(e.target.checked, item)}></input>
                        <button onClick={() => remove(task)}>x</button>
                    </li>
                ))}
                {/* <FormTask></FormTask> */}
                {/* <input
                    onChange={(e) => setSelectTasks(e.target.value)}
                />
                <button onClick={add}>
                    click to add task</button> */}
            </ul>
        </>
    )
}
export default ListTasks;
// import React, { useState } from "react";
// import './StyleHomeWork.css'
// import styled from 'styled-components'
// function ListTasks() {
//     const [items, setItems] = useState([
//         "clean the room",
//         "do homework",
//         "pick up all the toys",
//         "go to sleep",
//         "wake up!!!😁",
//     ]);
//     const [selectItems, setSelectItems] = useState("");
//     const [isAdd, setIsAdd] = useState(false)
//     const Title = styled.h1`
//     font-size: 2em;
//     text-align: center;
//     color: blue;
//   `;
//     const pSytle = {
//         fontSize: '20px',
//         color: 'red'
//     }
//     function add() {
//         setItems([...items, { text: selectItems, color: 'red' }]);
//     }

//     function remove(e, item) {
//         const d = items.filter((x) => x !== item);
//         setItems(d);
//     }
//     return (
//         <div className='container'>
//             <ul>
//                 <Title>List Tasks</Title>

//                 {items.map((item, index) => (
//                     <li key={index} className="class3" style={{ color: item.color }}>
//                         <button onClick={() => remove(index)}>x</button>
//                         {item.text ? item.text : item} {/* Extract the text property */}
//                     </li>
//                 ))}

//                 <input className={isAdd ? 'class1' : 'class2'} onChange={(e) => setSelectItems(e.target.value)} />
//                 <button style={pSytle} onClick={add}>click to add task</button>
//             </ul>
//         </div >
//     );
// }
// export default ListTasks;