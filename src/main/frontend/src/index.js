import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.querySelector('.container')
    // document.getElementById('root')
  )
}

render(App)
