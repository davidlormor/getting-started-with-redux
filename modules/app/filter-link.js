import React, { Component } from 'react'

import Link from './link'

import store from '../../store'

class FilterLink extends Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnount () {
    this.unsubscribe()
  }

  render () {
    const { filter, children } = this.props
    const state = store.getState()

    return (
      <Link
        active={
          filter === state.visibilityFilter
        }
        onClick={() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
          })
        }}
      >
        {children}
      </Link>
    )
  }
}

export default FilterLink
