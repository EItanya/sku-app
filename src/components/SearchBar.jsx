import React from 'react';

class SearchBar extends React.Component {


  render() {
    return (
      <div className="search">
        <input placeholder="Enter text to search for gifs!"  />
      </div>
    );
  }
}

export default SearchBar;