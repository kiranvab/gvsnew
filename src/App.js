import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
class App extends Component {
  render() {
    return(
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App;

