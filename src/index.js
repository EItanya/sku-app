import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="greeting">
        <p className="greeting-text">Hello World!</p>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));