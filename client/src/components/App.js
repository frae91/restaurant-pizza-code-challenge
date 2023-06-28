import { Route, Switch } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import Restaurant from "./Restaurant";
import React, {useState, useEffect} from 'react';
import Login from "./Login";
import Nav from "./Nav";

function App() {
  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect( () => {
    fetch('/me')
    .then(response => response.json())
    .then(json => {
      if (!json.error) {
        setUser(json)
        // setIsLoggedIn(true);
        setIsAllowed(true);
      } else {
        setUser(null)
      }
    })
  }, [])

  function logout() {
    setUser(null);
    // setIsLoggedIn(false);
  }


  return (
    <React.Fragment>
    {
      // isLoggedIn
      // ?
        user
        ?
        <React.Fragment>
          <Nav onLogout={logout} />
          <h1>Welcome to this app, {user.username}!</h1>
          <Home handleAllowed={setIsAllowed} user={user}/>
        </React.Fragment>
        // :
        // null
        :
      <React.Fragment>
          {
            isAllowed
            ?
            <Home handleAllowed={setIsAllowed} user={user}/>
            :
            <Login onLogin={setUser} handleAllowed={setIsAllowed} />
          }
          {/* <Home handleAllowed={setIsAllowed}/> */}
      </React.Fragment>
    }
    </React.Fragment>
    
    // <>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path="/restaurants/:id">
    //       <Restaurant />
    //     </Route>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </>
  );
}

export default App;
