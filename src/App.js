import logo from './logo.svg';
import './App.css';

console.log("Env check", process.env.KEY)
console.log("Env react code", process.env.REACT_APP_NOT_SECRET_CODE)
function App() {
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
        <iframe src="https://reacttest-1.azurewebsites.net/" width="1000" height="500"></iframe>
      </header>
    </div>
  );
}

export default App;
