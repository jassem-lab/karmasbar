import React from "react"
import { BiSearchAlt2 } from "react-icons/bi"

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get" autoComplete="on" className="search-box">
    <input
      value={searchQuery}
      onInput={e => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search"
      name="s"
      className="search-input"
    />
    <button type="submit" className="search-button">
      <BiSearchAlt2 style={{ color: `white` }} />
    </button>
  </form>
)
export default SearchBar
