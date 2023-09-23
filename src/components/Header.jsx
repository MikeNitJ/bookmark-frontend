import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="flex flex-row justify-around p-5">
        <Link className="hover:italic" to="/">
            <div>Home</div> 
        </Link>
        <Link className="hover:italic" to="/">
            <div>New Bookmark</div> 
        </Link>

    </nav>
  )
}

export default Header