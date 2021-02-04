import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchResult from './components/SearchResult';
import Home from './components/Home';

class App extends Component {
  render() {
    return(
      <div className="App">
        <SearchResult/>
      </div>
    )
  }
}

export default App;

