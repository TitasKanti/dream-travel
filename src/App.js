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
import Travel from './Components/Travel/Travel';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddNewEvent from './Components/AddNewEvent/AddNewEvent';
import AllOrders from './Components/ManageAllOrders/AllOrders/AllOrders';

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
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/orders/:id">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addEvent">
              <AddNewEvent></AddNewEvent>
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
