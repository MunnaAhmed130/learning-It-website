import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import About from './Component/About/About';
import Dashboard from './Component/Dashboard/Dashboard';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    
      <Footer className='footer'></Footer>
    </div>
  );
}

export default App;
