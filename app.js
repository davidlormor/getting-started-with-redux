import React from 'react'
import { render } from 'react-dom'

import store from './store'

import App from './modules/app/component'

render(
  <App store={store}/>,
  document.getElementById('app')
)
