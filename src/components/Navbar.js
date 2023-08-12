import { Link } from 'react-router-dom'

// importing out custom theme hook
import useTheme from '../hooks/useTheme'

import SearchBar from './SearchBar'

// styles
import './Navbar.css'

const Navbar = () => {
  const { color, changeColor } = useTheme()

  return (
    <div className='navbar' style={{ background:color }}>
        <nav onClick={() => changeColor("pink")}>
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