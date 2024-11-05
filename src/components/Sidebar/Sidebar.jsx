import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <ul>
            <li><Link to="/">DashBoard</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar