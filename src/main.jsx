import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from "react-router-dom";

import { legacy_createStore } from "redux"
import { Provider } from 'react-redux'

import { itemReducer } from './redux/store/reducers/itemReducer.jsx';
import appReducer from './redux/appReducer.jsx'


// PROVIDER- תפקידו לקשר בין רידקס לבין הקומפוננטות, בלעדיו לאף קומפוננט לא תהיה גישה למידע
const appStore = legacy_createStore(appReducer)
// appstore = the store of the application

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
    </React.StrictMode>

)





