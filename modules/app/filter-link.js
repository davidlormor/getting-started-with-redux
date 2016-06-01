import React, { Component } from 'react'

import Link from './link'

class FilterLink extends Component {
  componentDidMount () {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnount () {
    this.unsubscribe()
  }

  render () {
    const { children, filter, store } = this.props
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
