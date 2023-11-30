import React from "react";

function Conditions() {

    const isLoggedIn = true;
    const name = 'teacher';
    const items = [1, 2, 3, 4, 5, 6];

    // תנאי ביצירת רשימה
    const listItems = items.map((item) => (
        item % 2 === 0 ? <li key={item}>Even: {item}</li> : null
    ))



    // הצגת קומפוננטה רק בתנאים מסוימים
    
    // const condition = 1 < 7

    // if (condition) {
    //     return <ComponentA />;
    // } else {
    //     return <ComponentB />;
    // }


    return (
        <div>
            {/* else תנאי מקוצר עם סימן שאלה ונקודיים ל   */}
            {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}

            {/* תנאי מקוצר שבודק האם יש תוכן במשתנה */}
            {name && <p>Hello {name}</p>}

            <ul>{listItems}</ul>
        </div>
    );


}
export default Conditions;
