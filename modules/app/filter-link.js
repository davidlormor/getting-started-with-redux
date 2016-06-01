import React, { Component, PropTypes } from 'react'

import Link from './link'

class FilterLink extends Component {
  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnount () {
    this.unsubscribe()
  }

  render () {
    const { children, filter } = this.props
    const { store } = this.context
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

FilterLink.contextTypes = {
  store: PropTypes.object
}

export default FilterLink
