import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Link from './link'

const mapStateToProps = ({ visibilityFilter }, { filter }) => {
  return {
    active: filter === visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, { filter }) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
