//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Editprofile from './pages/Editprofile';
import Forgetpassword from './pages/Forgetpassword';
import Adminpage from './pages/Adminpage';
import Productpage from './pages/Productpage';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import Logout from './pages/Logout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
            <img src="images/newlogo1.jpg"alt="img" className="logo" />
             
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                   <h5>Home</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                  <h5>Signin</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                  <h5>Logout</h5>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <img src="images/new.jpg"alt="img" className="poster" />
        <div className="container">
          <Switch>
          <Route path="/home" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={Editprofile} />
            <Route path="/Forgetpassword" component={Forgetpassword} />
            <Route path="/adminpage" component={Adminpage} />
            <Route path="/productpage" component={Productpage} />
            <Route path="/edit" component={Edit} />
            <Route path="/delete" component={Delete} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
