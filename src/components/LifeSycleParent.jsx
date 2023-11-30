import React, { useState } from "react";
import LifeSycle from "./LifeSycle";
import UseEffect from "./UseEffect";
import ChangeTitle from "./ChangeTitle";
import A from "./a";

export default function LifeSycleParent() {

    const [isShowComponent, setIsShowComponent] = useState(true);

    return (
        <>
            {/* <h2>LifeSycleParent</h2>
            {isShowComponent && <LifeSycle num={10} setIsShowComponent = {setIsShowComponent}></LifeSycle>} */}

            {/* <h1>Function LifeSycle</h1>
            {isShowComponent && <UseEffect num={3} setIsShowComponent={setIsShowComponent}></UseEffect>} */}

            {/* <ChangeTitle></ChangeTitle> */}
            <A num={2}></A>
        </>
    )
}