import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/* what part of the code should be nested inside the router */
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Customers from './components/Customers';
import Navbar from './components/Navbar';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import Banner from './movieBanner.png';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <VideoLibrary />
          </Route>
          <Route path="/customers">
            <Customers />
            <br></br> <br></br>
          </Route>
          <Route path="/search">
            <VideoSearch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2"></h1>
          </div>
        </div>
        <img src={Banner} alt="Logo" className="parallax" />
      </div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Why Rent With Us?</h5>
              <p class="grey-text text-lighten-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet
              </p>
            </div>
            <h5 class="white-text"></h5>
          </div>
        </div>
        {/* </div> */}
        <div class="footer-copyright">
          <div class="container">© 2021 Copyright Text</div>
        </div>
      </footer>
    </>
  );
}
