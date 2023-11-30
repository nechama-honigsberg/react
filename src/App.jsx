import { Routes, Route } from "react-router-dom"
import SelectAbleList from './components/ListState'
import Timer from './components/Timer'
import A from './components/a'
import Tasks from './components/Tasks'
import LifeSycleParent from './components/LifeSycleParent'
import Http from './components/RestAPI'
import Product from './components/Product'
import { ControlledLogin, NameForm } from './components/Form'
import StyleComponent from "./components/StyleComponent"
import ShowItems from "./redux/ShowItems"
import CounterHost from "./redux/CounterHost"
function App() {

  return (
    <>
    <CounterHost />
    {/* <LifeSycleParent></LifeSycleParent> */}
      {/* <Tasks></Tasks> */}
      {/* <Timer></Timer> */}
      {/* <A></A> */}
      {/* <ControlledLogin></ControlledLogin>
      <NameForm></NameForm> */}
      {/* <Http></Http> */}
      {/* <Product></Product> */}
      {/* <StyleComponent></StyleComponent> */}
      {/* <ShowItems></ShowItems> */}
    </>
  )
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Tasks />} />
//         <Route path="lifeSycle" element={<LifeSycleParent />} />
//         <Route path="timer" element={<Timer />} />
//       </Routes>
//     </div>
//   )
// }
// export default App
