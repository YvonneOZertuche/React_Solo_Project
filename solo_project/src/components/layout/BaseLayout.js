import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = props => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
       </ul>
      {props.children}
      
  </>
  )
}

export default BaseLayout
