import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

function Home() {
    return <h1>Home</h1>;
}

// function Dashboard() {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <nav>
//                 <Link to="invoices">Invoices</Link>{" "}
//                 <Link to="team">Team</Link>
//             </nav>
//             <hr />
//             <Outlet />
//         </div>
//     );
// }

function Invoices() {
    return <h1>Invoices</h1>;
}

function Team() {
    return <h1>Team</h1>;
}




function Dashboard1() {
    return (
        // <div>
        //     <p>Look, more routes!</p>
        //     <Routes>
        //         <Route path="/" element={<Team />} />
        //         <Route path="invoices" element={<Invoices />} />
        //     </Routes>
        // </div>
        <div>
            <h1>This is the dashboard page</h1>
            <nav>
                <Link to="invoices">Invoices</Link>{" "}
                <Link to="team">Team</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="invoices" element={<Invoices />} />
                <Route path="team" element={<Team />} />
            </Route> */}
        </Routes>
    );
}
export default App

// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="dashboard/*" element={<Dashboard />} />
//         </Routes>
//     );
// }

// export default App


function Dashboard() {
    return (
        <div>
            <h1>This is the dashboard page</h1>
            <nav>
                <Link to="/dashboard/invoices">Invoices</Link>{" "}
                <Link to="/dashboard/team">Team</Link>
            </nav>
            <hr />
            <Outlet />
            <NavLink to="/index" end>Go Home</NavLink>
            <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
                className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >Go Home</NavLink>
            {/* <NavLink  to="/home"
                isActive={(match, location) => {
                    // Check if the link should be considered active based on some condition
                    return location.pathname === "/dashboard"; // You can use any condition here
                }}
                activeStyle={{ color: "blue" }}
                className="nav_link"
            >
                Go Home
            </NavLink> */}
        </div>
    );
}
import { useParams } from 'react-router-dom';
function Posts() {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function NotFound(){
    return(
        <h1>NotFound!!!</h1>
    )
}
// function App() {
//     return (
//         <Routes>
//             {/* <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />}>
//                 <Route path="invoices" element={<Invoices />} />
//                 <Route path="team" element={<Team />} />
//             </Route> */}

//             <Route path="posts" element={<Posts />}>
//                 {/* <Route path="/" element={<Home />} />
//                 <Route path=":slug" element={<Posts />} /> */}
//             </Route>
//             <Route path="invoices/*" element={<NotFound />} />
//         </Routes>

//     )
// }

// export default App;
