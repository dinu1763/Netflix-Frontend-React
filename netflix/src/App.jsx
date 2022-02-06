import logo from './logo.svg';
import './App.scss';
import { Home } from './components/Home/Home';
import Watch from './pages/watch/Watch';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Watch /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
