import React from 'react'
import { render } from 'react-dom'
import redux from 'redux'
const reducer = require('./reducer')

const initialState = {

}

const Greeter = (props) => <h1>Hello and welcome to {props.name}</h1>
const main = document.querySelector('main')
render(<Greeter name="gaby-jazz" />, main)

const store = redux.createStore(reducer, initialState)

store.subscribe(function () {
  const state = store.getState()
  const view = render(state, store.dispatch)
})

store.dispatch({type: 'INIT'})
