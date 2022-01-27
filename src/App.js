import logo from './logo.svg';
import './App.css';
import LinkTree from './Components/LinkTree';
import ReactDOM from 'react-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {LINKS} from './DB/links';

function App() {
  return (
    <div className="App">
      <LinkTree links = {LINKS}/>
    </div>
  );
}

export default App;


/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

 */