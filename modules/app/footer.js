import React from 'react'

import FilterLink from './filter-link'

const Footer = ({ visibilityFilter, onFilterClick }) => {
  return (
    <div>
      Show:&nbsp;
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        All
      </FilterLink>
      &nbsp;
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Active
      </FilterLink>
      &nbsp;
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Completed
      </FilterLink>
      &nbsp;
    </div>
  )
}

export default Footer
