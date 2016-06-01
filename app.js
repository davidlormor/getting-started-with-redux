import React from 'react'
import { render } from 'react-dom'

import store from './store'

import App from './modules/app/component'

const renderApp = () => {
  render(
    <App {...store.getState()} />,
    document.getElementById('app')
  )
}

store.subscribe(renderApp)
renderApp()
