import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import Signup from './component/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/login' Component={LoginForm}></Route>
          <Route path='/signup' Component={Signup}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
