import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import NotFound from './Components/NotFound/NotFound';
import TourDetail from './Components/TourDetail/TourDetail';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/tourDetail/:id">
            <TourDetail></TourDetail>
          </Route>
          {/* <Route exact path="/notFound">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
