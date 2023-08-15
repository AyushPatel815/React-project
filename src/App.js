import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { Component } from 'react';
import Greet from './components/greet';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';

class App extends Component{
  render(){
    return (
      <div className='App'> 
      {/* <Hello /> */}
      <Greet name="Ayush" heroName="Flash"> 
      <p>This is children name</p>
      </Greet>
      <Greet name="Adit" heroName="Flash"> 
      <p>This is children name</p>
      <button>Click</button>
      </Greet>
      
      {<Greet name="Yogesh" heroName="Wonder Women"/>}
      
      <Welcome name="Ayush" heroName="Flash"/>
      <Welcome name="Adit" heroName="Flash"/>
      <Welcome name="Yogesh" heroName="Wonder Women"/>
      <Message />

      <Counter />

      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
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
    </div>
  );
}*/

export default App;
