import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App'
import rootReducers from './reducers'


const store=createStore(rootReducers, typeof window === "object" &&
typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
? window.__REDUX_DEVTOOLS_EXTENSION__()
: f => f)
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))