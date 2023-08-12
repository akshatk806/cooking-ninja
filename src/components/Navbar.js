import { Link } from 'react-router-dom'
// hook for accesing a context value in this value
import { useContext } from 'react'

// importing the context(name of the context is ThemeContext)
import ThemeContext from '../context/ThemeContext'

import SearchBar from './SearchBar'

// styles
import './Navbar.css'

const Navbar = () => {
  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={{ background:color }}>
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Ninjas</h1>
            </Link>

            <SearchBar/>

            <Link to="/create">
                <h1>Create Recipe</h1>   
            </Link>
        </nav>
    </div>
  )
}

export default Navbar