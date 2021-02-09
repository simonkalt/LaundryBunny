import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import GoogleLogin from "./components/gg-login";
import TwitterLogin from "./components/tw-login";
import FacebookLogin from "./components/fb-login";
import logo from './img/Bunny Logo II.png';
import { IconContext } from "react-icons";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io";

function App() {
return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}><div><img src={logo} alt="logo" className="lb-logo"/></div></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
          <div>
            <table><tr><td>
            <Link className="nav-link" to={"/tw-login"}>
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                <AiFillTwitterCircle />
                </IconContext.Provider>
            </Link>
            </td><td>
            <Link className="nav-link" to={"/fb-login"}>
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                <IoLogoFacebook />
                </IconContext.Provider>
            </Link>
            </td><td>
            <Link className="nav-link" to={"/gg-login"}>
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                <IoLogoGoogle />
                </IconContext.Provider>
            </Link>
            </td></tr></table>
      </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/fb-login" component={FacebookLogin} />
            <Route path="/gg-login" component={GoogleLogin} />
            <Route path="/tw-login" component={TwitterLogin} />
          </Switch>
        </div>
      </div>
      </div>
      <div>
      </div>
  </Router>
  );
}

export default App;