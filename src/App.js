
import './App.css';

import Registration from './Registration';
import Dashboard from './Dashboard';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import AccountDetails from './AccoutDetails';
import Account from './account';

// import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Nav, Card, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import Savings from './components/users/Savings';
import TransactionHistory from './TransactionHistory';
import CTransactionHistory from './CTransactionHistory';
import FundTransfer from './FundTransfer';
import Front from './Front';
import ResetLogin from './ResetLogin'



function App() {
  return (

    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" >
          {/* <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/Userlogin">UserLogin</Link>
          </Nav.Link>

          <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/Adminlogin">AdminLogin</Link>
          </Nav.Link> */}


          {/* <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/Register">Register</Link>
          </Nav.Link> */}

          {/* <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/MyProfile">MyProfile</Link>
          </Nav.Link> */}
          {/* <Nav.Link>
          <Link style={{ color: 'white', fontSize: '20px' }}  className="btn btn-ouline-light " to="/add">AddUser</Link>
          </Nav.Link> */}


          {/* <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/account">Current</Link>
          </Nav.Link> */}
          {/* <Nav.Link>
            <NavDropdown tittle="User Name">
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link> */}
          <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px',marginLeft:'1000px' }} to="/Front"></Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px',marginLeft:'1000px' }} to="/account">Logout</Link>
          </Nav.Link>
          {/* <Nav.Link>
            <Link style={{ color: 'white', fontSize: '20px' }} to="/Front">MyProfile</Link>
          </Nav.Link> */}
        </Navbar>

        <Switch>
          <Route exact path="/"><Redirect to="/Front" /></Route>

          <Route path="/Front" component={Front}></Route>
          <Route path="/UserLogin" component={UserLogin}></Route>
          <Route path="/AdminLogin" component={AdminLogin}></Route>

          <Route path="/Register" component={Registration}></Route>
          <Route path="/Dashboard" component={Dashboard}></Route>
          <Route path="/AccountDetails" component={AccountDetails}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/Savings/:id" component={Savings}></Route>
          <Route path="/add" component={AddUser}></Route>
          <Route path="/TransactionHistory/:id" component={TransactionHistory}></Route>
          <Route path="/CTransactionHistory/:id" component={CTransactionHistory}></Route>
          <Route path="/FundTransfer/:id" component={FundTransfer}></Route>


          <Route path="/edit/:id" component={EditUser}></Route>
          <Route path="/users/:id" component={User}></Route>
          {/* <Route component={NotFound}></Route> */}
          <Route path="**">
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
