import React, { useState } from "react";

function SelectAbleList() {

    const items = [{ id: 1, name: "sara" }, { id: 2, name: "rivka" }, { id: 3, name: "rachel" }, { id: 4, name: "leha" }];
    const [selectedItems, setSelectedItems] = useState([]);

    function selectNames(checked, item) {
        if(checked){
            setSelectedItems([...selectedItems, item])
        }else{
            setSelectedItems(items => items.filter(x => x !== item))
        }
    }

    return (
        <>
            <h1>Names selected: {selectedItems.join(", ")}</h1>
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id} >
                            <input
                                type="checkbox"
                                onChange={(e) => selectNames(e.target.checked, item.name)}
                                checked={selectedItems.includes(item.name)}
                            />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}
export default SelectAbleList;


