import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {

  return (
    <header class='header'>
      <h1>{title}</h1>
      <Button color='orange' onClick={onAdd} text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Note Taker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
