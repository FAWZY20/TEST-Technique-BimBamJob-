import Board from './components/board/board';
import Logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src={Logo} width={250} height={250} alt="logo" />
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
