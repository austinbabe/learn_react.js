import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

//React hot reload
if (module.hot) {
  module.hot.accept()
}
