import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Todo</Link></li>
        <li><Link to="/phone">Phone</Link></li>
      </ul>
    </div>
  )
}

export default Menu
