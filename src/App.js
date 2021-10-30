import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import NotFound from './Components/NotFound/NotFound';
import TourDetail from './Components/TourDetail/TourDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute exact path="/tourDetail/:id">
              <TourDetail></TourDetail>
            </PrivateRoute>
            {/* <Route exact path="/notFound">
            <NotFound></NotFound>
          </Route> */}
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
