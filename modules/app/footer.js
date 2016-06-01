import React from 'react'

import FilterLink from './filter-link'

const Footer = ({ store }) => {
  return (
    <div>
      Show:&nbsp;
      <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
      &nbsp;
      <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
      &nbsp;
      <FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>
      &nbsp;
    </div>
  )
}

export default Footer
