import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Ninjas</h1>
            </Link>
            <Link to="/create">
                <h1>Create Recipe</h1>   
            </Link>
        </nav>
    </div>
  )
}

export default Navbar