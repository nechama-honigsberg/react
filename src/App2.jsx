
import React, { useState } from "react";
import { Routes, Route, useNavigate, NavLink, useParams, useLocation } from "react-router-dom";

export function Home() {
    const { paramName } = useParams();
    const location = useLocation();
    return (
        <div>
            <h1>This is the home page</h1>
            <h2>Hello {paramName}</h2>
            <div>
                {location.pathname}
            </div>
        </div>
    );
}

function NotFound(){
    return(
        <h1>NotFound!!!</h1>
    )
}

const App = () => {
    const navigate = useNavigate();
    const age = 20;

    return (
        <div>
            {/* <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
                Go Home
            </NavLink> */}

            {/* <button onClick={() => navigate('/home', { age })}>Go Home</button> */}
            {/* <button onClick={() => navigate(`/home/${age}`)}>Go Home</button> */}
            {/* <button onClick={() => navigate("/home")}>Go Home</button> */}
            <button onClick={() => navigate("/home/sara")}>Go Home</button>

            <Routes>
                <Route path="/home" element={<Home />} >
                    <Route path=":paramName" element={<Home />} />
                </Route>
                {/* <Route path="*" element={<NotFound />} /> */}

            </Routes>
            {/* <Routes>
                <Route path="/home" element={<Home />} />
            </Routes> */}
        </div>
    );
}

export default App;

// import { useNavigate } from "react-router-dom";
// function Invoices() {
//     const navigate = useNavigate();
//     let name='Sara'
//     return (
//         <div>
//             <NewInvoiceForm
//                 onSubmit={async event => {
//                     let newInvoice = await createInvoice(
//                         event.target
//                     );
//                     navigate(`/invoices/${newInvoice.id}`);
//                 }}
//             />
//         </div>
//     );
// }
