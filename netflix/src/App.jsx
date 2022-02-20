import logo from './logo.svg';
import './App.scss';
import { Home } from './components/Home/Home';
import Watch from './pages/watch/Watch';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { useNavigate } from "react-router-dom"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

function App() {
  const navigate = useNavigate();
  const user = true;
  // const { user } = useContext(AuthContext)
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : navigate("/register")}
        ></Route>
        <Route
          path="/register"
          element={!user ? <Register /> : navigate("/")}
        ></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : navigate("/")}
        ></Route>
        {user && (
          <>
            <Route path="/movies" element={<Home />}></Route>
            <Route path="/watch" element={<Watch />}></Route>
          </>
        )

        }
      </Routes>
      {/* <Home /> */}
      {/* <Watch /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
