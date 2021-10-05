import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllServices from './components/AllServices/AllServices';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
