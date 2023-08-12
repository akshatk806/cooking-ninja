import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// styles
import './SearchBar.css'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();
        // redirect the user to search page by adding the query parameter
        // q?=momos 
        history.push(`/search?q=${searchTerm}`);
    }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" onChange={e => setSearchTerm(e.target.value)} required/>
        </form>
    </div>
  )
}

export default SearchBar