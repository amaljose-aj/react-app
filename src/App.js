import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Add from "./components/add"
import Remove from "./components/remove"
import Home from "./components/home"



function App() {

  
  return (
  <>
  <Router>
    <div className ="navbar navbar-expand-lg navbar-light bg-light"> 
      <ul> 
      <li className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to ="/" ><button type="button" className="navbar-brand" >Home</button></Link>
        </li>

      <li className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to ="/add"><button type="button" className="navbar-brand">Add</button></Link>
        </li>
        <li className ="navbar navbar-expand-lg navbar-light bg-light">
          <Link to ="/remove"><button type="button" className ="navbar-brand">Remove</button></Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/remove">
        <Remove />
      </Route>

    </Switch>
  </Router>
  </>
  );
};

export default App;
