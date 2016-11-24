import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
const reducer = require('./reducer')

const initialState = {
  name: "gaby-jazz",
  shootGreet: false
  }

const Greeter = (props) => {
  if(props.shootGreet){
    return <h1>Hello and welcome {props.name}</h1>
  }
  else {
    return null
  }
}

const Greet = (props) => <div>
    <button onClick={() => props.dispatch({type: 'TOGGLE_GREET'})}>Greet Me</button>
    <Greeter name={props.name} shootGreet={props.shootGreet} />
  </div>

const main = document.querySelector('main')
// render(<Greeter name="gaby-jazz" />, main)

const store = createStore(reducer, initialState)

store.subscribe(function () {
  const state = store.getState()
  render(<Greet name={state.name} shootGreet={state.shootGreet} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
