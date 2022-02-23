import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import BootcampPages from './pages/BootcampPages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
       <Navbar /> 
      <Router>
       
        <Switch>
          <Route exact path="/">
            <BootcampPages />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
