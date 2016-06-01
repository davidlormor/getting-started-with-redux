import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import store from './store'

import App from './modules/app/component'

class Provider extends Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
