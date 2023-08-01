//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Editprofile from './pages/Editprofile';
import Forgetpassword from './pages/Forgetpassword';
import Product from './pages/Product';
import HorizontalSlider from './components/HorizontalSlider';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details';
import RowDetails from './pages/RowDetails';
import Logout from './pages/Logout';
import Profile1 from './pages/Profile1';
import { useSelector } from 'react-redux'
import Cart from './pages/Cart';
import Addtocart from './pages/Addtocart';
import Showcart from './pages/Showcart';
import Delete from './pages/Delete';
import PlaceOrder from './pages/PlaceOrder';


function App() {
  const cartItems = useSelector((state) => state.cartItems)
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
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/men">
                   Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/women">
                   Women
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kids">
                   Kids
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                  About Us
                  </Link>
                </li>
                <div className="nav-item1"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                   Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                  / &nbsp;&nbsp;Logout
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link className="nav-link" to="/profile1">
                  <img src="images/profile1.png" alt="img" className="logo12" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                  <img src="images/wishheart.jpg" alt="img" className="logo12" />{cartItems.length}
                  </Link>
                </li>
              </ul>
            </div>
            <h5><Link className="nav-link" to="/showcart">
                   <img src="images/Cart-03.jpg" alt="img" className="logo1" />
                  </Link></h5>
          </div>
          
        </nav>
        <div className="container">
          <Switch>
          <Route path="/home" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={Editprofile} />
            <Route path="/Forgetpassword" component={Forgetpassword} />
            <Route path="/product" component={Product} />
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/kids" component={Kids} />
            <Route path="/about" component={AboutUs} />
            <Route path="/details" component={Details} />
            <Route path="/rowdetails" component={RowDetails} />
            <Route path="/logout" component={Logout} />
            <Route path="/profile1" component={Profile1} />
            <Route path="/cart" component={Cart} />
            <Route path="/addtocart" component={Addtocart} />
            <Route path="/showcart" component={Showcart} />
            <Route path="/delete" component={Delete} />
            <Route path="/placeorder" component={PlaceOrder} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
