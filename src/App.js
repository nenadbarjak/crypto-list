import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const login = () => {
        setLoggedIn(true)
    }

    return (
        <Router>
            <div>
                <Header 
                    loggedIn={loggedIn}
                    login={login}
                />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile loggedIn={loggedIn} />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    );
}
 
export default App;