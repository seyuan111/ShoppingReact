import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import {About} from './pages/About'
import {Cart} from './pages/Cart'
import {Login} from './pages/Login'
import {Home} from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
